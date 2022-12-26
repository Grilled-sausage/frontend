import React, { useState, useEffect} from "react";
import PersonR from "./PersonR.js";
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';


function PersonRBox() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/survey/filmmaker`, {
      headers: {
          Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setPeople(res.data);
      console.log(res.data);
    })
  }, []);

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
        {people.map((item) => {
          return (
            <PersonR
              name={item.name}
              type={item.type}
              profile_path={item.image}
            />
          );
        })}
      </div>
    </>
  )

}

export default PersonRBox;