import { useEffect, useState } from "react";

const useFood = () => {
    const [foods,setFood]=useState([]);
    useEffect(()=>{
        fetch('https://limitless-shelf-68611.herokuapp.com/courses').then(res=>res.json()).then(data=>setFood(data));
    },[])
    return [foods]
};

export default useFood;