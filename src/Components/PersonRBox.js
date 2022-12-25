import PersonR from "./PersonR.js";
import { personDummy } from "../personDummy";
import React from 'react';

function PersonRBox() {
  return (
    <>
      <div
        style={{
          width: "80%",
          marginTop: "100px",
          margin: "0",
          backgroundColor: "#1d1d1d",
          display: "grid",
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr)",
          placeItems: "center",
        }}
      >
        {personDummy.results.map((item) => {
          return (
            <PersonR
              name={item.name}
              profile_path={item.profile_path}
            />
          );
        })}
      </div>
    </>
  )

}

export default PersonRBox;