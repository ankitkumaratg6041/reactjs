import { useEffect, useState } from "react";

const Search = ({resResult}) => { 
    const [searchValue, setSearchValue] = useState('');

    const findRestaurants = () => { 
        resResult(searchValue);
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