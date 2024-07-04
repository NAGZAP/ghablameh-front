import styles from  '../styles/weeklymenu.module.css';
import { useRef, useState, useEffect } from "react";
import Navbarparent from './navbarparent'
import AuthManager from "../APIs/AuthManager";
import axios from "axios";
import { useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Organizations from "../APIs/Organizations";
import jalaliMoment from 'jalali-moment';
import moment from 'moment';
import Select from 'react-select';

const  WeeklyMenu= () => {
    const [fetchedData, setFetchedData] = useState([])
    const [data, setData] = useState([]);
    const [reservedfoods, setReservedFoods] = useState([]);
    const [fetchedAmount, setFetchedAmount] = useState();
    const [loading, setLoading] = useState(true);
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const currentBuffet = useRef(null);

    //fetch dates
    useEffect(() => {
        jalaliMoment.locale('fa', {
            week: {
                dow: 6,
            },
        });

        const getFirstDayOfWeek = () => {
            const now = jalaliMoment();
            // console.log(now)
            const startOfWeek = now.startOf('week');
            return startOfWeek.format('jYYYY/jM/jD');
        };
        const getEndDayOfWeek = () => {
            const now = jalaliMoment();
            const endweek = now.endOf('week');
            return endweek.format('jYYYY/jM/jD');
        };
        function convertToChristian(date) {
            const jalaliDate = jalaliMoment(date, 'jYYYY/jM/jD');
            const christianDate = jalaliDate.toDate();
            const formattedDate = moment(christianDate, 'ddd MMM DD YYYY').format('YYYY-MM-DD');
            return formattedDate;
        }

        const firstDayOfWeek = getFirstDayOfWeek();
        const endweek = getEndDayOfWeek();

        const christianDatefday = convertToChristian(firstDayOfWeek);
        setFromDate(christianDatefday)
        const christianDatelday = convertToChristian(endweek);
        setToDate(christianDatelday)
        // console.log('line 55')
    }, []);

    async function getNextWeek() {
        try {
            const currentDate = new Date(fromDate);
            currentDate.setDate(currentDate.getDate() + 7);
            setFromDate(currentDate.toISOString().split('T')[0]); // Format as 'YYYY-MM-DD'
    
            const currentDate2 = new Date(toDate);
            currentDate2.setDate(currentDate2.getDate() + 7);
            setToDate(currentDate2.toISOString().split('T')[0]);
    
            // Assuming fetchData() is an asynchronous function
            await fetchData();
    
            console.log('Next week:');
            console.log('From Date:', fromDate);
            // console.log('To Date:', toDate);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    async function getLastWeek() {
        try {
            const currentDate = new Date(fromDate);
            currentDate.setDate(currentDate.getDate() - 7);
            setFromDate(currentDate.toISOString().split('T')[0]);
    
            const currentDate2 = new Date(toDate);
            currentDate2.setDate(currentDate2.getDate() - 7);
            setToDate(currentDate2.toISOString().split('T')[0]);
    
            // Assuming fetchData() is an asynchronous function
            await fetchData();
    
            console.log('Last week:');
            console.log('From Date:', fromDate);
            // console.log('To Date:', toDate);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    //fetch buffets
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await Organizations.GetOrganizationBuffets();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (AuthManager.isLoggedIn()) {
            fetchData();
        }
    }, []);

    //fetch table data
    const fetchData = async () => {
        try {
            if (AuthManager.isLoggedIn()) {
                const token = AuthManager.getToken();
                const buffet_id = parseInt(currentBuffet.current.value);

                const response = await axios.get(
                    `https://ghablameh.fiust.ir/api/v1/buffets/${buffet_id}/weekly-menus/?from_date=${fromDate}&to_date=${toDate}`,
                    { headers: { Authorization: "JWT " + token } }
                );

                setFetchedData(response.data);
                fetchReservations();
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    // fetch reserved foods
    const fetchReservations = async () => {
        try {
            const token = AuthManager.getToken();

            const response = await axios.get(`https://ghablameh.fiust.ir/api/v1/reserve/?from_date=${fromDate}&to_date=${toDate}`,
                { headers: { Authorization: "JWT " + token } }
            );
            setReservedFoods(response.data);
        } catch (error) {
            console.error("Error fetching reservations: ", error);
        }
    };

    //fetch every 5 seconds
    useEffect(() => {
        if (currentBuffet.current !== null) {
            const fetchReservationsId = setInterval(() => {
                fetchReservations();
            }, 5000); // 5 seconds
            const fetchDataId = setInterval(() => {
                fetchData();
            }, 5000); // 5 seconds

            return () => {
                clearInterval(fetchReservationsId);
                clearInterval(fetchDataId);
            };

        }
    }, []);

    //fetch wallet data
    const fetchWalletData = async () => {
        try {
            const token = AuthManager.getToken();

            const response = await axios.get("https://ghablameh.fiust.ir/api/v1/wallets/me/",
                { headers: { Authorization: "JWT " + token } }
            );
            setFetchedAmount(response.data.balance);
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };

    useEffect(() => {
        const intervalId = AuthManager.isLoggedIn() ? setInterval(fetchWalletData, 5000) : null;

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        };
    }, []);

    //reserve
    const handlereserve = async (food) => {

        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/';

        const requestData = {
            meal_food: food.mealFoodId
        };

        try {
            const response = await axios.post(url, requestData, {
                headers: {
                    'Authorization': token,
                }
            });

            if (response.status === 201) {
                fetchReservations();
                checkToast(food);
            } else {
                console.log('Reservation update failed:', response.data);
                failToast();
            }
        } catch (error) {
            console.error('An error occurred:', error);
            failToast();
        }
    }

    //delete reservation
    const handleDeletereserve = async (food) => {
        const reservedFood = reservedfoods.find(item => item.meal_food.food.id === parseInt(food.foodId));
        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/' + reservedFood.id + '/';

        try {
            const response = await axios.delete(url, {
                headers: {
                    'Authorization': token,
                }
            });

            if (response.status == 204) {
                uncheckedToast(food);
                fetchReservations();
            } else {
                console.log('Deleting reservation failed:', response.data);
                failToast();
            }
        } catch (error) {
            console.error('An error occurred:', error);
            failToast();
        }
    }

    // reservation completed toast
    const checkToast = (food) => {
        toast.info(
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">{`${food.name} رزرو شد`}</div>
            </div>,
            {
                position: 'top-center',
                autoClose: 3000,
                closeButton: true,
                hideProgressBar: false,
                progress: undefined,
                icon: false,
            }
        );
    };

    // reservation deleted toast
    const uncheckedToast = (food) => {
        toast.warn(
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">{` رزرو ${food.name}  حذف شد`}</div>
            </div>,
            {
                position: 'top-center',
                autoClose: 3000,
                closeButton: true,
                hideProgressBar: false,
                progress: undefined,
                icon: true,
            }
        );
    };

    // reservation failed toast
    const failToast = () => {
        toast.info(
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">{`!در فرایند رزرو خطایی رخ داد`}</div>
            </div>,
            {
                position: 'top-center',
                autoClose: 3000,
                closeButton: true,
                hideProgressBar: false,
                progress: undefined,
                icon: false,
            }
        );
    };

    // number in stock toast
    const numberInStockToast = () => {
        toast.info(
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">{` !موجودی غذا کافی نیست `}</div>
            </div>,
            {
                position: 'top-center',
                autoClose: 3000,
                closeButton: true,
                hideProgressBar: false,
                progress: undefined,
                icon: false,
            }
        );
    };
  
    // charge wallet toast
    const chargeWalletToast = () => {
        toast.info(
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">{` کیف پول خود را شارژ کنید `}</div>
            </div>,
            {
                position: 'top-center',
                autoClose: 3000,
                closeButton: true,
                hideProgressBar: false,
                progress: undefined,
                icon: false,
            }
        );
    };

    // food Checkbox change handler
    const handleCheckboxChange = (food, isChecked) => {
        const amount = parseInt(fetchedAmount, 10);
        console.log(food)
        if (isChecked) {
            if (food.price > amount) {
                chargeWalletToast();
            }
            else if (food.numberInStock == 0) {
                numberInStockToast();
            } 
            else {
                handlereserve(food);
            }
        } else {
            handleDeletereserve(food);
        }
    };

    const convertToJalali = (date) => {
        const today = new Date(date).toLocaleDateString('fa-IR');
        return today;
    };

    //render table
    const TableComponent = ({ data }) => {
        if (data.length === 0) {
            return (
                <div className="flex items-center justify-center h-64"> {/* Adjust height as needed */}
                    <span className="flex flex-row justify-center items-center p-2 rounded-lg my-2" style={{ background: 'rgba(38, 87, 124,0.3)' }} >  غذایی جهت رزرو وجود ندارد، بوفه دیگری انتخاب کنید. </span>
                </div>
            );
        }

        const dates = [...new Set(data.map(entry => entry.date))];
        const mealNames = [...new Set(data.flatMap(entry => entry.meals.map(meal => meal.name)))];

        const organizedData = useMemo(() => {
            return dates.map(date => {
                const dateEntry = { date };
                const mealsForDate = data.find(entry => entry.date === date)?.meals || [];

                mealNames.forEach(mealName => {
                    const meal = mealsForDate.find(m => m.name === mealName);

                    if (meal) {
                        // For each meal, create an array of items with detailed information
                        dateEntry[mealName] = meal.items.map(item => ({
                            name: item.food.name,
                            foodId: item.food.id,
                            mealFoodId: item.id, // Directly assigning the meal's ID as mealFoodId
                            price: item.price,
                            numberInStock: item.number_in_stock,
                        }));
                    } else {
                        dateEntry[mealName] = []; // If no meal is found, assign an empty array
                    }
                });

                return dateEntry;
            });
        }, [data, dates, mealNames]);

        return (
          // <div className="my-6 mx-2">
              <table className="min-w-full divide-y divide-gray-300 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <thead className="text-white bg-sky-800" style={{ background: '' }}>
                      {/* rgb(218, 168, 43) */}
                      <tr>
                          <th className="w-1/5 p-2 text-lg font-medium tracking-wider text-center">روز</th>
                          {mealNames.map((mealName, index) => (
                              <th key={index} className="w-1/5 p-2 text-lg font-medium tracking-wider text-center">{mealName}</th>
                          ))}
                      </tr>
                  </thead>
                  <tbody>
                      {organizedData.map((entry, rowIndex) => (
                          <tr key={rowIndex} className={`${'flex'} ${'items-center'} ${'justify-center'} py-14 ${rowIndex % 2 === 0? 'bg-white' : 'bg-slate-50'}`}>
                              {/* <div className="flex items-center justify-center py-14"> */}
                                  <td className="p-2 text-sky-950">{convertToJalali(entry.date)}</td>
                              {/* </div> */}
                              {/* } */}
                              {mealNames.map((mealName, index) => (
                                  <td key={index} className="p-2">
                                      {entry[mealName].map((food, foodIndex) => (
                                          <div key={foodIndex} className="flex items-center justify-center">
                                              <div className="flex flex-row justify-center items-center p-2 rounded-lg my-2" style={{ background: 'rgba(251, 146, 60, 0.9)' }}>
                                                  <div className="flex flex-col p-2 items-start justify-center">
                                                      <span className="text-sm font-bold text-sky-900">{food.name}</span>
                                                      <span className="text-xs pt-1 font-normal text-sky-900">{food.price} تومان </span>
                                                      <span className="text-xs text-sky-900"> موجودی: {food.numberInStock} عدد </span>
                                                      {/* <span className="text-sm text-gray-700">{food.foodId}  </span> */}
                                                  </div>
                                              </div>
                                          </div>
                                      ))}
                                  </td>
                              ))}
                          </tr>
                      ))}
                  </tbody>
              </table>
          // </div> 
      );
    };

    const options = data.map((item) => ({
        value: item.id,
        label: item.name
    }));

    return (
        <>
            <Navbarparent />
            <div className=""></div>
        <div style={{ width: "100%" }} className="px-5 py-3">
            <div className="grid grid-cols-3 my-4 text-center"></div>

            {/* choose buffet */}
            <div className="grid grid-cols-3 w-full" >
                <div></div>
                <div className="mb-3 content-center w-full flex justify-center items-center">
                    <Select
                        options={options}
                        value={currentBuffet.current}
                        // isLoading={loading}
                        className="rounded w-60"
                        placeholder=" بوفه خود را انتخاب کنید. "
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                text: 'de6016',
                                primary: 'rgb(38, 87, 124)',
                                primary25: 'rgba(38, 87, 124,0.4)',
                            }
                        })}
                        onChange={selectedOption => {
                            currentBuffet.current = selectedOption;
                            fetchData();
                        }}
                    />
                </div>
            </div>

            {/* last week / next week button */}
            <div className="flex flex-row my-5 justify-center items-center w-full">
                {/* <div className="flex flex-row justify-end items-center "> */}
                    <button className="rounded-xl bg-sky-800 mx-24 px-5 py-2 text-white hover:bg-sky-900" onClick={getNextWeek}> هفته بعدی </button>
                    <button className="rounded-xl bg-sky-800 mx-24 px-5 py-2 text-white hover:bg-sky-900" onClick={getLastWeek}> هفته قبلی </button>
                {/* </div> */}
            </div>

            {/* table */}
            <TableComponent data={fetchedData} />
        </div>
            <ToastContainer />
        </>
    );
};

export default WeeklyMenu;
