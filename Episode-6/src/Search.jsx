import { useEffect, useState } from "react";
import { Restaurants } from "../utils/mockData";

const Search = ({resResult}) => { 
    const [searchValue, setSearchValue] = useState('');

    const findRestaurants = () => { 
        if(searchValue === '') {
            resResult(Restaurants);
            return;
        }
        const pickedRestaurant = Restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase()));
        const pickedByCuisine = Restaurants.filter((restaurant) => restaurant.data.cuisines.join().toLowerCase().includes(searchValue.toLowerCase()));

        // If the restaurant is not found by name, then search by cuisine and if there are duplicate restaurants, remove them
        const combinedRestaurants = [...pickedRestaurant, ...pickedByCuisine];
        const restaurantMap = {};
        for (const restaurant of combinedRestaurants) { 
            if(!restaurantMap[restaurant.data.id]) {
                restaurantMap[restaurant.data.id] = restaurant;
            }
        }
        resResult(Object.values(restaurantMap));
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className='search-container'>
            <input type='text' placeholder='Search Restaurant' onChange={handleChange}/>
            <button onClick={findRestaurants}>Search</button>
        </div>
    );
}

export default Search;