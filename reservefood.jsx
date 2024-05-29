import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthManager from './src/APIs/AuthManager';
import axios from 'axios';
import Navbarparent from './src/components/navbarparent';

const Menu = () => {
    const [reservedfoods, setReservedFoods] = useState([]);

    const [foods, setFoods] = useState([
        {
            "id": 11,
            "client": 1,
            "meal": {
              "id": 3,
              "name": "ناهار",
              "time": "13:00:00"
            },
            "buffet": {
              "id": 42,
              "name": "sfsfs",
              "created_at": "2024-05-15T20:57:23.718005+03:30",
              "updated_at": "2024-05-15T20:57:23.718017+03:30",
              "organization_name": "Amir",
              "average_rate": 2,
              "number_of_rates": 2,
              "image": null
            },
            "food": {
              "id": 6,
              "name": "ناگت مرغ",
              "description": "ناگت مرغ"
            },
            "created_at": "2024-05-29T18:06:34.179119+03:30",
            "updated_at": "2024-05-29T18:06:34.179130+03:30"
          },
        {
            id: 6,
            client: 2,
            buffet: { id: 43, name: "Buffet B" },
            food: { id: 7, name: "پیتزا مارگاریتا", description: "Classic Margherita Pizza" },
            meal: { id: 5, name: "ناهار", time: "13:00:00" },
            created_at: "2024-05-30T12:30:00.000000+03:30",
            updated_at: "2024-05-30T12:35:00.000000+03:30",
        },
        {
            id: 4,
            client: 3,
            buffet: { id: 44, name: "Buffet C" },
            food: { id: 8, name: "سالاد فصل", description: "Fresh seasonal salad" },
            meal: { id: 6, name: "صبحانه", time: "09:00:00" },
            created_at: "2024-06-01T08:50:00.000000+03:30",
            updated_at: "2024-06-01T08:55:00.000000+03:30",
        }
    ]);

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

    //reserve
    const handlereserve = async (food) => {
        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/' + food.id + '/';
    
        const requestData = {
            client: food.client, 
            meal: {
                name: food.meal.name,
                time: food.meal.time,
            },
            buffet: {
                name: food.buffet.name,
            },
            food: {
                name: food.food.name,
                description: food.food.description,
            }
        };
    
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
        const token = 'JWT ' + localStorage.getItem("token");
        const url = 'https://ghablameh.fiust.ir/api/v1/reserve/' + food.id + '/';
    
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
                <div className="text-center mb-4">{`${food.food.name} رزرو شد`}</div>
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

    // Checkbox change handler
    const handleCheckboxChange = (food, isChecked) => {
        if (isChecked) {
            handlereserve(food)
        } else {
            handleDeletereserve(food)
        }
    };

    return (
        <>
            <Navbarparent />
            <div className="container mx-auto p-4">

                {foods.map((food) => (
                    <div key={food.id} className="bottom flex-grow h-30 py-1 cursor-pointer w-40 m-3">
                        <div className="event bg-black text-white rounded p-1 text-sm mb-1">
                            <div className="flex flex-row justify-center items-center">
                                <span className="event-name">{food.food.name}</span>
                                <input
                                    type="checkbox"
                                    checked={reservedfoods.some(reserved => reserved.food.id === food.food.id)}
                                    onChange={(e) => handleCheckboxChange(food, e.target.checked)}
                                    className="m-2"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                
                                <span className="meal-name">{food.meal.name}</span>
                                
                                <span className="meal-time">{food.meal.time}</span>
                                
                                <span className="food-price">{food.food.price} تومان</span>
                            </div>
                        </div>
                    </div>
                    // Ensure `food.food.price` is the correct path
                ))}
                <ToastContainer />
            </div>
        </>
    );
};

export default Menu;