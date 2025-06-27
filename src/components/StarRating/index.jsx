import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


export default function StarRating(numOfStars = 5) {
    
    // State vars
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Custom Methods
    const handleClick = (getCurrentIndex) => {
        
    }
   
    const handleMouseEnter = (getCurrentIndex) => {
        
    }

    const handleMouseLeave = (getCurrentIndex) => {
        
    }


    return (
        <div className="">Star Rating
{
            [...Array(numOfStars)].map((_, index) => {

                return (
                  <FaStar
                    key={index}
                    onClick={handleClick(index)}
                    onMouseMove={handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave(index)}
                    size={40}
                  />
                );
            })
        }
        </div>
    )
}

