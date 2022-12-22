import React from "react";
import { useState } from "react";
// import { ReactComponent as Star } from "./assets/star.svg";
// import Star from "./assets/star.svg";
import StarRating from "react-svg-star-rating";


// const ratingChanged = (newRating) => {
//   console.log(newRating)
// }

function StarRate() {
  const [rating, setRating] = useState(0);
  const handleOnClick = (rating: number) => {
    setRating(rating);
  }
  return (
    <>
      <section>
        <StarRating
          unit="half"
          activeColor={"#EEB76B"}
          hoverColor={"#EEB76B"}
          emptyColor={"#8a8a8a"}
          size="30"
          innerRadius="20"
          handleOnClick={handleOnClick}
        />
      </section>
    </>
  );
}


export default StarRate;
