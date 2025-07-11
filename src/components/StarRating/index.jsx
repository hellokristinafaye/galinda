// Trial 6 START

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex, "click!");
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex, "over!");
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex, "leave!");
  }

  return (
    <div className="">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

// Trial 6 END

// Trial 5 START (from notes)
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css'

// export default function StarRating({ noOfStars = 5 }) {

//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   function handleClick(getCurrentIndex) {
//     console.log(getCurrentIndex, "click!");
//     setRating(getCurrentIndex);
//   }

//   function handleMouseEnter(getCurrentIndex) {
//     console.log(getCurrentIndex, "over!");
//     setHover(getCurrentIndex);

//   }

//   function handleMouseLeave() {
//     // console.log(getCurrentIndex, "left!");
//     setHover(rating);
//   }

//   return (
//     <div >

//       {[...Array(noOfStars)].map((_, index) => {
//         index += 1;

//         return (
//           <FaStar
//             key={index}
//             onClick={() => handleClick(index)}
//             onMouseOver={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//             size={40}
//             className={index <= (hover || rating)? 'active': 'inactive'}
//           />
//         );
//       })}
//     </div>
//   );
// }

// Trial 5 END

// Trial 4 START
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css'

// export default function StarRating({ noOfStars = 5 }) {

//   // state vars
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   // custom methods
//   function handleClick(getCurrentIndex) {
//     console.log(getCurrentIndex, "click!");
//     setRating(getCurrentIndex);
//   }
//   function handleMouseEnter(getCurrentIndex) {
//     console.log(getCurrentIndex, "over!");
//     setHover(getCurrentIndex);
//   }
//   function handleMouseLeave() {
//     // console.log(getCurrentIndex, "left!");
//     setHover(rating);

//   }

//   return (
//     <div className="">
//       {[...Array(noOfStars)].map((_, index) => {
//         index += 1

//         return (
//           <FaStar
//             key={index}
//             onClick={() => handleClick(index)}
//             onMouseOver={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//             size={40}
//             className={index <= (hover || rating)? 'active': 'inactive'}
//           />
//         );
//       })}
//     </div>
//   );
// }
// Trial 4 END

// Trial 3 START

// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css'

// export default function StarRating({ noOfStars = 5 }) {
//     // state vars
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     // custom methods
//     function handleClick(getCurrentIndex) {
//         console.log(getCurrentIndex, "click!");
//         setRating(getCurrentIndex);

//     }
//     function handleMouseEnter(getCurrentIndex) {
//         console.log(getCurrentIndex, "enter!");
//         setHover(getCurrentIndex);
//     }
//     function handleMouseLeave() {
//         // console.log(getCurrentIndex, "leave!");
//         setHover(rating);
//     }

//   return (
//     <div className="">
//           Trial 3<br></br>

//           {[...Array(noOfStars)].map((_, index) => {
//               index +=1
//               return (
//                 <FaStar
//                   key={index}
//                   onClick={() => handleClick(index)}
//                   onMouseOver={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                       size={40}
//                       className={index <= (hover || rating)? 'active': 'inactive'}
//                 />
//               );
//       })}
//     </div>
//   );
// }

// Trial 4 END

// Trial 3 START

// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css'

// export default function StarRating({ noOfStars = 5 }) {
//     // state vars
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     // custom methods
//     function handleClick(getCurrentIndex) {
//         console.log(getCurrentIndex, "click!");
//         setRating(getCurrentIndex);

//     }
//     function handleMouseEnter(getCurrentIndex) {
//         console.log(getCurrentIndex, "enter!");
//         setHover(getCurrentIndex);
//     }
//     function handleMouseLeave() {
//         // console.log(getCurrentIndex, "leave!");
//         setHover(rating);
//     }

//   return (
//     <div className="">
//           Trial 3<br></br>

//           {[...Array(noOfStars)].map((_, index) => {
//               index +=1
//               return (
//                 <FaStar
//                   key={index}
//                   onClick={() => handleClick(index)}
//                   onMouseOver={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                       size={40}
//                       className={index <= (hover || rating)? 'active': 'inactive'}
//                 />
//               );
//       })}
//     </div>
//   );
// }

// Trial 3 END

// Trial 2 START
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import "./style.css";

// export default function StarRating({ noOfStars = 5 }) {
//   // state vars
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   // custom methods
//   const handleClick = (getCurrentIndex) => {
//       console.log(getCurrentIndex, "click!");
//       setRating(getCurrentIndex);
//       console.log(rating, "click rating")
//   };
//   const handleMouseEnter = (getCurrentIndex) => {
//       console.log(getCurrentIndex, "over!");
//       setHover(getCurrentIndex);
//       console.log(hover, "hover!")
//   };
//   const handleMouseLeave = () => {
//       setHover(rating);
//       console.log(rating, "gone!");
//   };

//   return (
//     <div className="">
//       {[...Array(noOfStars)].map((_, index) => {
//         index += 1;
//         return (
//           <FaStar
//             key={index}
//             onClick={() => handleClick(index)}
//             onMouseOver={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//             size={40}
//             className={index <= (hover || rating) ? "active" : "inactive"}
//           />
//         );
//       })}
//     </div>
//   );
// }

// Trial 2 END

// Finished Trial 1 START

// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css';

// export default function StarRating({ noOfStars = 5 }) {
//       // State vars
//       const [rating, setRating] = useState(0);
//       const [hover, setHover] = useState(0);

//       // Custom Methods
//       const handleClick = (getCurrentIndex) => {
//               console.log(getCurrentIndex, "Click!");
//               setRating(getCurrentIndex);
//               console.log(rating, "New Rating!")
//           };

//           const handleMouseEnter = (getCurrentIndex) => {
//                   console.log(getCurrentIndex, "Over!");
//                   setHover(getCurrentIndex);
//               };

//               const handleMouseLeave = () => {
//                        setHover(rating);
//                        console.log(rating, "New!");
//                   };

//                   return (
//                         <div className="">
//                           {[...Array(noOfStars)].map((_, index) => {
//                                 index += 1;

//                                 return (
//                                       <FaStar
//                                         key={index}
//                                         onClick={() => handleClick(index)}
//                                         onMouseLeave={() => handleMouseLeave(index)}
//                                         onMouseOver={() => handleMouseEnter(index)}
//                                         size={40}
//                                         // checking if the index less than or equal to the hover or rating indexes?
//                                         className={index <= (hover || rating) ? "active" : "inactive"}
//                                       />
//                                     );
//                                   })}
//                                 </div>
//                               );
//                             }

//                             Finished Trial 1 END
