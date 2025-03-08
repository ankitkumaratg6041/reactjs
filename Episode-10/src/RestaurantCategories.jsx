import { useEffect, useState } from 'react'
import '../restaurantStyle.css'

const RestaurantCategories = ({ catName = [] }) => {
    const [isActiveIndex, setIsActiveIndex] = useState(null)
    const [cardTitle, setCardTitle] = useState([])
    
    const handleDisplay = (index) => {
        setIsActiveIndex(isActiveIndex === index ? null : index);
    }
    useEffect(() => {
        // console.log("hey there")
        // console.log(catName)
        const allTitles = catName?.slice(1, catName.length - 2).map((card) => card?.card?.card?.title)
        setCardTitle(allTitles)
    }, [catName])

  return (
      <div>
          {
              cardTitle.length > 0 ? 
                (cardTitle.map((title, index) => (
                    <div className="cat-info" key={index}>
                        <div className='cat-info-header'>
                            <h2>{title}</h2>
                            <button className='cat-btn' onClick={() => handleDisplay(index)}>
                                {isActiveIndex === index ? "Hide" : "Show more"}
                            </button>
                        </div>
                        <div className={`${isActiveIndex === index ? 'activeClass' : 'notActiveClass'} extra-details`}>
                            {
                                catName[isActiveIndex + 1]?.card?.card?.itemCards?.map((item, idx) => (
                                    <p key={idx}>{item.card.info.name}</p>
                                ))
                            }
                        </div>
                    </div>
                    
                ))) 
                  :
                  
                (<p>Loading items....</p>)
          }  
          
    </div>
  )
}

export default RestaurantCategories