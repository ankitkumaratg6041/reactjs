import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";
import { useState } from 'react';
import { Restaurants } from "../utils/mockData";

const Body = () => { 
    

    const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);


    const filterRestaurants = () => {
        setListOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant.data.avgRating >= 4.7));
    }

    
    const findRestaurants = (filteredRestaurants) => { 
        if(filteredRestaurants === '') {
            setListOfRestaurants(Restaurants);
            return;
        }
        setListOfRestaurants(Restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(filteredRestaurants.toLowerCase())));
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