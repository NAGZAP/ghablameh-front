import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
// import WeeklyMenuTable from "../components/WeeklyMenuTable";
// import BuffetsDropdown from "../components/ChooseBuffet";
import axios from "axios";
import requests from '../APIs/AuthManager';
import { useState, useEffect } from "react";
import Organizations from "../APIs/Organizations";
import AuthManager from "../APIs/AuthManager";

const FoodTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const foodrow = useRef(null);
    const currentBuffet = useRef(null);
    const [mealsId, setMealsId] = useState([]);
    const [meals, setMeals] = useState([]);
    const [foodddd, setFoods] = useState([]);
    const [yaali, setYaali] = useState([]);
    const [finalfoods , setFinalfoods] = useState([]);
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

    // buffet, meal, food
    const handleBuffetChange = async () => {
        let buffetId = currentBuffet.current.value;
        let data = [];
        const token = requests.getToken();
        data = await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/", { headers: { Authorization: `JWT ${token}` } });
        if (data.data.length !== 0) {
            let listPK = data.data[0].id;
            setMealsId(data.data);

            let foods = await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/" + listPK + "/meals/", { headers: { Authorization: `JWT ${token}` } });
            setMeals(foods.data)
            // console.log(foods.data)
            // console.log("foods", foods)

            // foods.data.map(async meal=> (
            //     setFoods((await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/" + listPK + "/meals/"+meal.id+"/meals/", { headers: { Authorization: `JWT ${token}`} })
            // ).data)))

            const listt=[];
            for(let meal of foods.data){
                let gottendata=(await axios.get("https://ghablameh.fiust.ir/api/v1/buffets/" + buffetId + "/menus/" + listPK + "/meals/"+meal.id+"/meals/", { headers: { Authorization: `JWT ${token}`} })).data 
                // console.log("gottendata: ", gottendata)
                listt.push(gottendata)
            }
            console.log("listt: ", listt)
            // setFoods(listt)

            // console.log("foods", foodddd)
            
            const listt2 = [];
            for(let meal of listt){
                for(let meal1 of meal){
                console.log(meal)
                let gottendata2=(await axios.get("https://ghablameh.fiust.ir/api/v1/foods/" +  meal1.id  + "/", { headers: { Authorization: `JWT ${token}`} })).data 
                console.log("gottendata2: ", gottendata2);
                listt2.push(gottendata2)
            }}
            console.log("listt22: ", listt2)
            // setFoods(listt)
            setFinalfoods(listt2);

            // foodddd.data.map(async meal=> (
            //     setFoods((await axios.get("https://ghablameh.fiust.ir/api/v1/foods/" +  meal.id  + "/", { headers: { Authorization: `JWT ${token}`} })
            // ).data)
        
            // ))
            // console.log("token: ",token)
            // console.log("foods", foods)
        }
    }

    return (
        <>
            <Navbar />
            <div className=""></div>
            <div style={{ width: "100%" }} className="px-5 py-3">
                <div className="grid grid-cols-3 my-4 text-center"></div>

                {/* buffets */}
                <div className="grid grid-cols-3 w-full">
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
                    <table className="border-collapse border w-full  border-blue-500 m-10 mx-auto bg-op" style={{ border: '1px solid rgb(38, 87, 124)' }}>
                        {/* meals */}
                        <thead>
                            <tr className=" text-white " style={{ backgroundColor: 'rgb(38, 87, 124)' }}>
                                <th className="py-2 px-4 text-right">روز</th>

                                {meals?.map((meal, index) => (
                                    <>
                                        <th key={index} className="py-2 px-4">
                                            <div>{meal.name}</div>
                                            <div key={index} className="py-2 px-4 font-light text-sm">{meal.time}</div>
                                        </th>

                                    </>
                                ))}


                            </tr>
                        </thead>
                        {/* days */}


                        {/* foods */}
                        <tbody>
                            <tr className="bg-white  " style={{ borderBottom: '1px solid rgb(38, 87, 124)' }}>
{/* 
                                <tr className="bg-white border-b flex flex-col ">

                                    {mealsId?.map((meal, index) => (
                                        <>
                                        
                                            <th key={index} className="py-2 px-4">

                                                <td className="py-2 px-4">{meal.date}</td>
                                                <td className="py-2 px-4">{meal.date}</td>
                                                listt2
                                            </th>

                                        </>
                                    ))}


                                </tr>
                                <td className="py-2 px-4"></td> */}
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
