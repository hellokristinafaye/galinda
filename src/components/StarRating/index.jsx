import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({noOfStars = 5}) {
  // State vars
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Custom Methods
  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };

  const handleMouseLeave = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };

  return (
    <div className="">
      {[...Array(noOfStars)].map((_, index) => {
        // index += 1;

        return (
          <FaStar
            key={index}
            // onClick={() => handleClick(index)}
            // onMouseMove={() => handleMouseEnter(index)}
            // onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
