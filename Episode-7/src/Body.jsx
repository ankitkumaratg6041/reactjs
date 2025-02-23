import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [swiggyJsonData, setSwiggyJsonData] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // const [cloudinaryImageId, setCloudinaryImageId] = useState([]);

    useEffect(() => { 
        fetchData();
    }, []);

    const fetchData = async () => { 
        const swiggyData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const jsonData = await swiggyData.json();
        const restaurantData = jsonData.data.cards.slice(3);
        setSwiggyJsonData(restaurantData);
        setListOfRestaurants(restaurantData);
    }

    const filterRestaurants = () => {
        setListOfRestaurants(swiggyJsonData.filter((restaurant) => (restaurant.card.card.info.avgRating)*1 >= 4.5));
    }

    
    const findRestaurants = (finalListOfSearchedRestaurants) => { 
        console.log(finalListOfSearchedRestaurants)
        setListOfRestaurants(finalListOfSearchedRestaurants);
    }

    if (swiggyJsonData.length === 0) { 
        return (
                <Shimmer />
        )
    }

    return (swiggyJsonData.length === 0) ?
        (<Shimmer />): 
        (
            <div>
                <Search resResult={findRestaurants} resData={swiggyJsonData} />
                <button className="filter-btn" onClick={filterRestaurants}>Top Rated Restaurants</button>
                <div className='res-card-container'>
                    {listOfRestaurants?.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant.card.card.info.id}`} key={restaurant.card.card.info.id}>
                            <RestaurantContainer resData={restaurant.card.card.info} imgId={restaurant.card.card.info.cloudinaryImageId} />
                        </Link>
                    ))}
                </div>
            </div>
        )
}

export default Body;