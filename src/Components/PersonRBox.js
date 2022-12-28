import React, { useState, useEffect, useRef } from "react";
import PersonR from "./PersonR.js";
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';


function PersonRBox() {
  const [people, setPeople] = useState([]);
  const [heart, setHeart] = useState({});
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/survey/filmmaker`, {
      headers: {
          Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setPeople(res.data);
    })
  }, []);

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
  }

  useDidMountEffect(() => {
    if(heart.heart === true){
      axios.delete(`${SERVER_URL}/api/preference/filmmaker`, {
        data: heart.personId,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": 'application/json'
        }
      }).then((res) => {})
    }
    else{
      axios.post(`${SERVER_URL}/api/preference/filmmaker`, heart.personId, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": 'application/json'
        }
      }).then((res) => {})
    }
  }, [heart]);

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
              id={item.id}
              func={setHeart}
              flag={false}
            />
          );
        })}
      </div>
    </>
  )

}

export default PersonRBox;