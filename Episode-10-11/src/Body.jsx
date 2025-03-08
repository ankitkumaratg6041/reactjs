import RestaurantContainer, {withPromotedLabel} from "./RestaurantContainer";
import Search from "./Search";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // const [cloudinaryImageId, setCloudinaryImageId] = useState([]);
    const onlineStatus = useOnlineStatus();

    const RestaurantContainerPromoted = withPromotedLabel(RestaurantContainer);

    const swiggyJsonData = useRestaurantMenu();
    useEffect(() => {
        setListOfRestaurants(swiggyJsonData);
    }, [swiggyJsonData])

    const filterRestaurants = () => {
        setListOfRestaurants(swiggyJsonData.filter((restaurant) => (restaurant.card.card.info.avgRating)*1 >= 4.3));
    }

    
    const findRestaurants = (finalListOfSearchedRestaurants) => { 
        console.log(finalListOfSearchedRestaurants)
        setListOfRestaurants(finalListOfSearchedRestaurants);
    }

    if (!swiggyJsonData) { 
        return (
                <Shimmer />
        )
    }

    if (!onlineStatus) {
        return (
            <h1>ATG says: Looks like you are offline!! Please conncect to a reliable network.</h1>
        )
    }

    return (swiggyJsonData.length === 0) ?
        (<Shimmer />): 
        (
            <div>
                <Search resResult={findRestaurants} resData={swiggyJsonData} />
                <button className="filter-btn" onClick={filterRestaurants}>Top Rated Restaurants</button>
                <div className='res-card-container'>
                    {listOfRestaurants?.map((restaurant) => {
                        const isPromoted = restaurant?.card?.card?.info?.promoted || false;
                        return (<Link to={`/restaurant/${restaurant.card.card.info.id}`} key={restaurant.card.card.info.id}>
                            {
                                isPromoted ? (<RestaurantContainer resData={restaurant.card.card.info} imgId={restaurant.card.card.info.cloudinaryImageId} />) : (<RestaurantContainer resData={restaurant.card.card.info} imgId={restaurant.card.card.info.cloudinaryImageId} />)
                            }
                        </Link>)
                    })}
                </div>
            </div>
        )
}

export default Body;