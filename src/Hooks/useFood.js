import { useEffect, useState } from "react";

const useFood = () => {
    const [foods,setFood]=useState([]);
    useEffect(()=>{
        fetch('./food.json').then(res=>res.json()).then(data=>setFood(data));
    },[])
    return [foods]
};

export default useFood;