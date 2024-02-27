import axios from 'axios';
import { useState } from 'react';

const HelloWorld = () =>
{
    const [respTxt, setRespTxt] = useState();
    axios.get("/hello_world").then(data => setRespTxt(data.json()));
    return <>
        {respTxt}
    </>
}

export default HelloWorld;