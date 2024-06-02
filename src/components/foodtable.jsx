import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from "axios";
import requests from '../APIs/AuthManager';
import { useState, useEffect } from "react";
import Organizations from "../APIs/Organizations";
import AuthManager from "../APIs/AuthManager";
import { ToastContainer, toast } from 'react-toastify';

const FoodTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentBuffet = useRef(null);
    const [mealsId, setMealsId] = useState([]);
    const [meals, setMeals] = useState([]);
    const [foods, setFoods] = useState([]);

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

        fetchData();
    }, []);

    let buffetId = currentBuffet.current.value;

    //fetch buffet, meal, food
    const handleBuffetChange = async () => {

        //buffetId
        let buffetId = currentBuffet.current.value;
        let data = [];
        const token = requests.getToken();

        //mealsId
        data = await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/", { headers: { Authorization: `JWT ${token}` } });
        if (data.data.length !== 0) {
            let listPK = data.data[0].id;
            setMealsId(data.data);

            //meals
            let meals = (await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/" + listPK + "/meals/", { headers: { Authorization: `JWT ${token}` } })).data
            setMeals(meals)

            // mealsId.map((meal, index) => {
            //     console.log("meal dates: ", index, " ", meal.date)
            // })

            //foodsId
            const foodsList = [];
            for (let meal of meals) {
                let gottendata = (await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/" + listPK + "/meals/" + meal.id + "/meals/", { headers: { Authorization: `JWT ${token}` } })).data
                foodsList.push(gottendata)
            }

            //foods
            const foods = [];
            for (let foodArray of foodsList) {
                for (let food of foodArray) {
                    let gottendata2 = (await axios.get("https://ghablameh.fiust.ir/api/v1/foods/" + food.food + "/", { headers: { Authorization: `JWT ${token}` } })).data
                    gottendata2.price = food.price;
                    foods.push(gottendata2)
                }
            }
            setFoods(foods)
            // console.log('foodsList: ', foods)
        }
    }

    //dates
    const renderDates = () => {
        let dateList = [];
        // console.log("dateList: ",dateList)
        return mealsId.map((meal, index) => {
            // if (!dateList.includes(meal.time)) {
            dateList.push(meal.time);
            return (
                <>
                    <th key={index} className="py-3 flex items-center">
                        <td className="py-2 px-4 " style={{ borderBottom: '1px solid rgb(38, 87, 124)' }}>{meal.date}</td>
                    </th>
                </>
            );
            // }  
            // return null;
        });
    };


    // fetch reserved foods
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const token = AuthManager.getToken();

                const response = await axios.get("https://ghablameh.fiust.ir/api/v1/reserve/",
                    { headers: { Authorization: "JWT " + token } }
                );
                setReservedFoods(response.data);
            } catch (error) {
                console.error("Error fetching reservations: ", error);
            }
        };

        if (AuthManager.isLoggedIn()) fetchReservations();
    }, []);

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
        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/' + food.id + '/';
        console.log('food',food)
        const requestData = {
            client: food.client,
            meal: {
                name: food.name,
                time: food.name,
            },
            buffet: {
                name: data.find(item => item.id === buffetId),
            },
            food: {
                name: food.name,
                description: food.description,
            }
        };

        console.log('requestData',requestData)

        try {
            const response = await axios.patch(url, requestData, {
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
        const reservedFood = reservedfoods.find(item => {
            console.log("food.id:", food.id);
            console.log("item.id:", item.id);
            return item.id === food.id;
        });
        
        console.log("Reserved Food:", reservedFood);

        console.log("reservedFood: ",reservedFood)
        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/' + reservedFood.id + '/';

        try {
            const response = await axios.delete(url, {
                headers: {
                    'Authorization': token,
                }
            });

            if (response.status === 204) {
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

    // reservation canceled toast
    const uncheckedToast = (food) => {
        toast.warn(
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">{` رزرو ${food.food.name}  حذف شد`}</div>
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

    // Checkbox change handler
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

    //foods
    const renderFoods = () => {
        // let dateList = [];
        return foods.map((food, index) => {
            // if (!dateList.includes(meal.time)) {
            // dateList.push(meal.time); 
            return (
                <>
                    <th key={index} className="py-2 px-4">
                        <td className="py-2 px-4" onClick={handleCheckboxChange}><div className="flex flex-row justify-center items-center">
                            <span className="event-name">{food.name}</span>
                            <span className="event-name">{food.price}</span>
                            <input
                                type="checkbox"
                                checked={reservedfoods.some(reserved => reserved.food.id === food.id)}
                                onChange={(e) => handleCheckboxChange(food, e.target.checked)}
                                className="m-2"
                            />
                        </div></td>
                        {/* <hr className="w-full" style={{ alignSelf: 'center', marginTop: '0.5rem', marginBottom: '0.5rem', backgroundColor: 'rgb(38, 87, 124)', height: '2px', border: 'none' }} /> */}
                    </th>
                </>
            );
            // }
            // return null;
        });
    };

    return (
        <>
            <Navbar />
            <div className=""></div>
            <div style={{ width: "100%" }} className="px-5 py-3">
                <div className="grid grid-cols-3 my-4 text-center"></div>

                {/* buffets */}
                <div className="grid grid-cols-3 w-full" >
                    <div></div>
                    <div className="content-center w-full">
                        <select className="rounded w-full" onChange={handleBuffetChange} ref={currentBuffet}>
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
                <div>
                    <table className="  w-full  m-10 mx-auto bg-op" >

                        {/* meals */}
                        <thead>
                            <tr className=" text-white " style={{ backgroundColor: 'rgb(38, 87, 124)' }}>
                                <th className="py-2 px-4 text-right text-2xl">روز</th>

                                {meals.map((meal, index) => (
                                    <>
                                        <th key={index} className="py-2 px-4">
                                            <div className="flex flex-col items-center">
                                                <div className="text-3xl">{meal.name}</div>
                                                <hr className="text-sm opacity-20" style={{ width: '7vw', alignSelf: 'center', marginTop: ' 0.5rem', marginBottom: ' 0.5rem' }} /> {/* Use alignSelf to center the <hr> in the flex container */}
                                                <div className="font-light text-sm">{meal.time}</div>
                                            </div>
                                        </th>
                                    </>
                                ))}
                            </tr>
                        </thead>

                        {/*/ dates */}
                        <tbody style={{ border: '1px solid rgb(38, 87, 124)' }}>
                            <tr className="bg-white">
                                <tr className="bg-white flex flex-col " >
                                    <td className="py-2 px-4"> {renderDates()} </td>
                                </tr>
                                <td className="py-2 px-4">{renderFoods()}</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-2 px-4">جمعه</td>
                                <td className="py-2 px-4">i</td>
                                <td className="py-2 px-4">ii</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default FoodTable;
