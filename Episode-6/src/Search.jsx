import { useEffect, useState } from "react";

const Search = ({resResult, resData}) => { 
    const [searchValue, setSearchValue] = useState('');
    const Restaurants = resData;

    const findRestaurants = () => { 
        if(searchValue === '') {
            resResult(Restaurants);
            return;
        }
        const pickedRestaurant = Restaurants.filter((restaurant) => restaurant.card.card.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        const pickedByCuisine = Restaurants.filter((restaurant) => restaurant.card.card.info.cuisines.join().toLowerCase().includes(searchValue.toLowerCase()));

        // If the restaurant is not found by name, then search by cuisine and if there are duplicate restaurants, remove them
        const combinedRestaurants = [...pickedRestaurant, ...pickedByCuisine];
        const restaurantMap = {};
        for (const restaurant of combinedRestaurants) { 
            if(!restaurantMap[restaurant.card.card.info.id]) {
                restaurantMap[restaurant.card.card.info.id] = restaurant;
            }
        }
        console.log(restaurantMap)
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