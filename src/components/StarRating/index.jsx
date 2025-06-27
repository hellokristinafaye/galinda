import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function StarRating({ noOfStars = 5 }) {
  // State vars
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Custom Methods
  const handleClick = (getCurrentIndex) => {
      console.log(getCurrentIndex, "Click!");
      setRating(getCurrentIndex);
      console.log(rating, "New Rating!")
  };

  const handleMouseEnter = (getCurrentIndex) => {
      console.log(getCurrentIndex, "Over!");
      setHover(getCurrentIndex);
            // console.log(rating, "New Hover!");

  };

  const handleMouseLeave = () => {
    //   console.log(getCurrentIndex, "Leave!");
       setHover(rating);
       console.log(rating, "New!");
  };

  return (
    <div className="">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            // onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onMouseOver={() => handleMouseEnter(index)}
            size={40}
            // is the index lessthan or equal to the hover or rating indexes?
            className={index <= (hover || rating) ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
}
