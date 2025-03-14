import { useState, useEffect } from 'react';

const useRestaurantMenu = () => {
    const [swiggyJsonData, setSwiggyJsonData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => { 
        const swiggyData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const jsonData = await swiggyData.json();
        const restaurantData = jsonData.data.cards.slice(3);
        setSwiggyJsonData(restaurantData);
    }

    return (swiggyJsonData)
}

export default useRestaurantMenu