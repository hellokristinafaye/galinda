import {FaStar} from 'react-icons/fa'


export default function StarRating(numOfStars = 5){

    return (
        <div className="">Star Rating
{
            [...Array(numOfStars)].map((_, index) => {

                return <FaStar
                    key={index}
                    
                
            />
            })
        }
        </div>
    )
}

