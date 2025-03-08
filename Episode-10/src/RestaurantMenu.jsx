import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import RestaurantCategories from './RestaurantCategories';
import { useParams } from 'react-router-dom';
import useGetRestaurantMenu from '../utils/useGetRestaurantMenu';
// import useGetRestaurantCategory from '../utils/useGetRestaurantCategory';

const RestaurantMenu = () => {
    const {resId} = useParams();
    // const [resMenuData, setResMenuData] = useState(null);
    const [cardsCategory, setCardsCategory] = useState([]);

    const resMenuData = useGetRestaurantMenu(resId);
    // const cardsCategory = useGetRestaurantCategory();

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

    return (
        <div>
            <RestaurantCard info={resMenuData?.data?.cards[2]?.card?.card?.info} />
            <RestaurantCategories catName={cardsCategory} />
        </div>
    );
}

export default RestaurantMenu;