import { useRef,useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbarparent from './navbarparent'
import AuthManager from "../APIs/AuthManager";
import axios from "axios";
import { useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Organizations from "../APIs/Organizations";

const Menu = () => {
    const [fetchedData, setFetchedData] = useState([])
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentBuffet = useRef(null);

    const [reservedfoods, setReservedFoods] = useState([]);
    const [fetchedAmount, setFetchedAmount] = useState();
    
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
    // useEffect(() => {
        const fetchData = async () => {
            // Assuming AuthManager.getToken() and AuthManager.isLoggedIn() are synchronous. 
            // If they are asynchronous, you should await them as well.
            try {
                if (AuthManager.isLoggedIn()) {
                    const token = AuthManager.getToken();
                    const buffet_id = parseInt(currentBuffet.current.value);
                    const from_date = "2024-05-31";
                    const to_date = "2024-06-01";
    
                    const response = await axios.get(
                        `https://ghablameh.fiust.ir/api/v1/buffets/${buffet_id}/weekly-menus/?from_date=${from_date}&to_date=${to_date}`,
                        { headers: { Authorization: "JWT " + token } }
                    );
    
                    setFetchedData(response.data);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
    
        // Execute the fetchData function
        fetchData();
    // }, []); // Empty dependency array means this effect runs on component mount only

    //fetch wallet data
    useEffect(() => {
        const fetchUserData = async () => {
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
        if (AuthManager.isLoggedIn()) fetchUserData();
    }, []);

    //reserve
    const handlereserve = async (food) => {
        const item = data.find(item => item.id === parseInt(currentBuffet.current.value));
        const buffetName = item ? item.name : 'Name not found for the specified ID.';

        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/' + food[0].id + '/';

        console.log('food', food)

        const requestData = {
            client: 1,
            meal_food: food[0].mealFood_name,
            buffet: {
                name: buffetName,
            },
            food: {
                name: food[0].name,
                description: food[0].description,
            }
        };

        console.log('requestData: ', requestData)

        try {
            const response = await axios.patch(url, JSON.stringify(requestData), {
                headers: {
                    'Authorization': token,
                }
            });

            if (response.status === 200) {
                setReservedFoods(prev => prev.some(item => item.id === food.id) ? prev : [...prev, food]);
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
        //id not found. we need the food id in the reservedfoods list not food.id
        const reservedFood = reservedfoods.find(item => item.food.id === parseInt(food.id));
        console.log("Reserved Foods list:", reservedfoods);
        console.log("reserved Food: ", reservedFood);

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
                setReservedFoods(prev => prev.filter(item => item.id !== food.id));
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
                <div className="text-center mb-4">{`در فرایند رزرو خطایی رخ داد`}</div>
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
                <div className="text-center mb-4">{` ابتدا کیف پول خود را شارژ کنید `}</div>
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

        if (isChecked) {
            if (food.price > amount) {
                chargeWalletToast();
            } else {
                handlereserve(food);
            }
        } else {
            handleDeletereserve(food);
        }
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

                    dateEntry[mealName] = meal ? meal.items.map(item => ({
                        name: item.food.name,
                        foodId: item.food.id,
                        mealId: meal.id,
                        price: item.price,
                        numberInStock: item.number_in_stock,
                    })) : [];
                });

                return dateEntry;
            });
        }, [data, dates, mealNames]);

        return (
            <div className="m-4">
                <table className="min-w-full divide-y divide-gray-300 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <thead className="text-white" style={{ background: 'rgb(38, 87, 124)' }}>
                        <tr>
                            <th className="w-1/5 p-2 text-lg font-medium tracking-wider text-center">روز</th>
                            {mealNames.map((mealName, index) => (
                                <th key={index} className="w-1/5 p-2 text-lg font-medium tracking-wider text-center">{mealName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {organizedData.map((entry, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="p-2">{entry.date}</td>
                                {mealNames.map((mealName, index) => (
                                    <td key={index} className="p-2">
                                        {entry[mealName].map((food, foodIndex) => (
                                            <div key={foodIndex} className="flex items-center justify-center">
                                                <div className="flex flex-row justify-center items-center p-2 rounded-lg my-2" style={{ background: 'rgba(38, 87, 124,0.3)' }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={reservedfoods.some(reserved => reserved.food.id === food.id)}
                                                        onChange={(e) => handleCheckboxChange(food, e.target.checked)}
                                                        className="m-3 rounded-sm"
                                                    />
                                                    <div className="flex flex-col p-2">
                                                        <span className="text-sm font-medium text-gray-900">{food.name}</span>
                                                        <span className="text-sm text-gray-700">{food.price} تومان </span>
                                                        <span className="text-sm text-gray-700"> موجودی: {food.numberInStock} عدد </span>
                                                    </div>
                                                </div></div>
                                        ))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <>
            <Navbarparent />
            <div className=""></div>
            <div style={{ width: "100%" }} className="px-5 py-3">
                <div className="grid grid-cols-3 my-4 text-center"></div>

                {/* buffets */}
                <div className="grid grid-cols-3 w-full" >
                    <div></div>
                    <div className="content-center w-full">
                        {/*  */}
                        <select className="rounded w-full"  ref={currentBuffet} onChange={fetchData} defaultValue={ "بوفه خود را انتخاب کنید" }> 
                            {loading ? (
                                <option>Loading...</option>
                            ) : (
                                data.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                </div>

                {/* table */}
                <TableComponent data={fetchedData} />
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Menu;
