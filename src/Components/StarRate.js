import React from "react";
import { useState } from "react";
import StarRating from "react-svg-star-rating";

function StarRate() {
  const [rating, setRating] = useState(0);
  const handleOnClick = (rating) => {
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
