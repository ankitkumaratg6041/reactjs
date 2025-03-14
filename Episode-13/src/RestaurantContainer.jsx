import { CDN_URL } from "../utils/constants";
import { SWIGGY_IMG_URL } from "../utils/constants";

const RestaurantContainer = (props) => { 
    const { imgId, resData } = props;

    // Check if swiggyData and its nested properties are defined
    // const newData = swiggyData;
    // console.log("heres the new data: " + newData)
    // const cloudinaryImageId = newData.data?.cards?.[3]?.card?.card?.info?.cloudinaryImageId;
    // console.log(cloudinaryImageId);
    // console.log(SWIGGY_IMG_URL+swiggyData.data.cards[3].card.card.info.cloudinaryImageId)
    // console.log(swiggyData.data.cards[3].card.card.info.cloudinaryImageId)

    const { name, cuisines, avgRating, sla } = resData;
    return (
        <div className='restaurant-container'>
            <div className='card-image-container'>
                <img src={imgId ? SWIGGY_IMG_URL+imgId : CDN_URL} alt='Butter-Chicken'/>
            </div>
            <div className='card-info'>
                <h3 className="res-card-title">{name}</h3>
                <p className='tags'>{cuisines.join(", ")}</p>
                <span className='rating-time'>
                    <h4>{avgRating}</h4>
                    <h4>{sla.slaString}</h4>
                </span>
            </div>
            <button>Order Now</button>
        </div>
    )
}

export const withPromotedLabel = (RestaurantContainer) => {
    return (props) => {
        return (
            <div className="promoted-container">
                <label className="promoted-label">Promoted</label>
                <RestaurantContainer {...props} />
            </div>
        );
    };
};


export default RestaurantContainer;