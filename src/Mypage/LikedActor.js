import PersonR from "../Components/PersonR";
import React, { useState, useEffect, useRef } from 'react';
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';

function LikedActor() {
  const [actors, setActors] = useState([]);
  const [heart, setHeart] = useState({});
  const [change, setChange] = useState(false);

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/preference/filmmaker?type=배우`, {
      headers: {
          Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setActors(res.data);
      console.log(res.data);
    })
  }, [change]);

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
  }

  useDidMountEffect(() => {
    axios.delete(`${SERVER_URL}/api/preference/filmmaker`, {
      data: heart.personId,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "Content-Type": 'application/json'
      }
    }).then((res) => {
      console.log(res.data);
      setChange((current) => !current);
    })
  }, [heart]);

  return (
    <div
      style={{
        width: "80%",
        marginTop: "50px",
        margin: "0",
        backgroundColor: "#1d1d1d",
        display: "grid",
        marginLeft: "auto",
        marginRight: "auto",
        gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr)",
        placeItems: "center",
      }}
    >
      {actors.map((item) => {
        return (
          <PersonR
            name={item.name}
            profile_path={item.image}
            id={item.id}
            func={setHeart}
            flag={true}
          />
        );
      })}
    </div>
  );
}

export default LikedActor;