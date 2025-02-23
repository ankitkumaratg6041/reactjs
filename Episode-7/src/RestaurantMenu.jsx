import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import RestaurantCategories from './RestaurantCategories';
import { RES_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [resMenuData, setResMenuData] = useState(null);
    const [cardsCategory, setCardsCategory] = useState([]);

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

    useEffect(() => {
        if (resMenuData) {
            const allResCards = resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            // console.log(allResCards)
            // const allResCardsCategory = allResCards?.slice(1, allResCards.length-2).map((card) => card?.card?.card?.title);
            setCardsCategory(allResCards || []);
            // console.log(allResCardsCategory); // Now logs correctly
        }
    }, [resMenuData]);

    if (resMenuData === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, avgRating, locality, cloudinaryImageId } = resMenuData?.data?.cards[2]?.card?.card?.info
    const { slaString } = resMenuData?.data?.cards[2]?.card?.card?.info?.sla
    
    // console.log(`
    //     name: ${name}
    //     costForTwoMessage: ${costForTwoMessage}
    //     cuisines: ${cuisines}
    //     avgRating: ${avgRating}
    //     locality: ${locality}
    //     slaString: ${slaString}
    //     `)

    return (
        <div>
            <RestaurantCard info={resMenuData?.data?.cards[2]?.card?.card?.info} />
            <RestaurantCategories catName={cardsCategory} />
        </div>
    );
}

export default RestaurantMenu;