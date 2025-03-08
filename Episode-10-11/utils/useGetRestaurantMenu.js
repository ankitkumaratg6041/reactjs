import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const useGetRestaurantMenu = (resId) => {
    const [resMenuData, setResMenuData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const resData = await fetch(RES_URL + resId);
        // const resData = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=1021991&catalog_qa=undefined&query=Burger&submitAction=ENTER');
        const jsonData = await resData.json();
        // console.log(jsonData);
        setResMenuData(jsonData);
    }

    return (
        resMenuData
    )
}

export default useGetRestaurantMenu;