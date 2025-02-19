import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";
import { useState } from 'react';
import { Restaurants } from "../utils/mockData";

const Body = () => { 
    

    const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);


    const filterRestaurants = () => {
        setListOfRestaurants(Restaurants.filter((restaurant) => restaurant.data.avgRating >= 4.7));
    }

    
    const findRestaurants = (searchedRestaurant) => { 
        if(searchedRestaurant === '') {
            setListOfRestaurants(Restaurants);
            return;
        }
        const pickedRestaurant = Restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchedRestaurant.toLowerCase()));
        const pickedByCuisine = Restaurants.filter((restaurant) => restaurant.data.cuisines.join().toLowerCase().includes(searchedRestaurant.toLowerCase()));

        // If the restaurant is not found by name, then search by cuisine and if there are duplicate restaurants, remove them
        const combinedRestaurants = [...pickedRestaurant, ...pickedByCuisine];
        const restaurantMap = {};
        for (const restaurant of combinedRestaurants) { 
            if(!restaurantMap[restaurant.data.id]) {
                restaurantMap[restaurant.data.id] = restaurant;
            }
        }
        setListOfRestaurants(Object.values(restaurantMap));
    }
    return (
        <div>
            <Search resResult={findRestaurants}/>
            <button className="filter-btn" onClick={filterRestaurants}>Top Rated Restaurants</button>
            <div className='res-card-container'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantContainer key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;