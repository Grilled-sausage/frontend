import React, {useEffect} from "react";
import axios from "axios";
import { SERVER_URL } from "../Components/Server";

export default function Kakao() {
    let authcode = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        axios.get(`${SERVER_URL}/api/auth/token?code=${authcode}`)
        .then((res) => {
            let jwtToken  = res.headers.get("Authorization");
            localStorage.setItem("Authorization", jwtToken);
            axios.get(`${SERVER_URL}/api/rating/movie`, {
                headers: {
                    Authorization: localStorage.getItem("Authorization")
                }
            }).then((res) => {
                if(res.data.length !== 0){
                    //window.location.replace('/main');
                    window.location.replace('/survey');
                }
                else{
                    window.location.replace('/survey');
                }
            })
        })
        .catch((Error) => {console.log(Error)})
    }, []);


    return(
        <div>

        </div>
    );
}