import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from "axios";
import requests from '../APIs/AuthManager';
import { useState, useEffect } from "react";
import Organizations from "../APIs/Organizations";

const FoodTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentBuffet = useRef(null);
    const [mealsId, setMealsId] = useState([]);
    const [meals, setMeals] = useState([]);
    const [foods, setFoods] = useState([]);


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

            mealsId.map((meal, index) => {
                console.log("meal dates: ", index, " ", meal.date)
            })

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
                    foods.push(gottendata2)
                }
            }
            setFoods(foods)
            console.log('foods: ', foods)
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

    //foods
    const renderFoods = () => {
        // let dateList = [];
        return foods.map((food, index) => {
            // if (!dateList.includes(meal.time)) {
            // dateList.push(meal.time); 
            return (
                <>
                    <th key={index} className="py-2 px-4">
                        <td className="py-2 px-4">{food.name}</td>
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
        </>
    );
};

export default FoodTable;
