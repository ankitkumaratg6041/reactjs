import { CDN_URL } from "../utils/constants";

const RestaurantContainer = (props) => { 
    const { resData } = props;
    const { name, cuisines, avgRating, deliveryTime } = resData.data;
    return (
        <div className='restaurant-container'>
            <div className='card-image-container'>
                <img src={CDN_URL} alt='Butter-Chicken'/>
            </div>
            <div className='card-info'>
                <h3>{name}</h3>
                <p className='tags'>{cuisines.join(", ")}</p>
                <span className='rating-time'>
                    <h4>{avgRating}</h4>
                    <h4>{deliveryTime}</h4>
                </span>
            </div>
            <button>Order Now</button>
        </div>
    )
}

export default RestaurantContainer;