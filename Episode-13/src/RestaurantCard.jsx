import '../restaurantStyle.css'
import { SWIGGY_IMG_URL } from '../utils/constants';

const RestaurantCard = ({ info }) => {
    
    if (!info) return null; // Handle cases where info is undefined

    const { name, costForTwoMessage, cuisines, avgRating, locality, sla, cloudinaryImageId } = info;
    const { slaString } = sla || {};

  return (
      <div className='res-cat-card-container'
        // style={{
        //     backgroundImage: `url(${SWIGGY_IMG_URL}${cloudinaryImageId})`,
        //     backgroundSize: "cover", // Ensures the image covers the div
        //     backgroundPosition: "center", // Centers the image
        //     backgroundRepeat: "no-repeat", // Prevents repetition
        // }}
      >
          <h1 className="title">{name}</h1>  
          <div className="details">
              <h3 className="details-title">{avgRating} | {costForTwoMessage}</h3>
              <p className="cuisines-tags">{cuisines.join(", ")}</p>
              <h4>{locality} | { slaString}</h4>   
          </div>
    </div>
  )
}

export default RestaurantCard