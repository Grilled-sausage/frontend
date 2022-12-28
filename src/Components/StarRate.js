import React from "react";
import { useState } from "react";
import StarRating from "react-svg-star-rating";

function StarRate({size, func, myRating}) {
  const [rating, setRating] = useState(myRating);
  const handleOnClick = (rating) => {
    setRating(rating);
    func(rating);
  }
  return (
    <>
      <section>
        <StarRating
          unit="half"
          activeColor={"#EEB76B"}
          hoverColor={"#EEB76B"}
          emptyColor={"#8a8a8a"}
          size={size}
          innerRadius="20"
          handleOnClick={handleOnClick}
          initialRating={myRating}
        />
      </section>
    </>
  );
}


export default StarRate;
