import React, {useEffect} from "react";
import axios from "axios";

export default function Kakao() {
    let authcode = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        axios.get(`http://ec2-3-38-49-6.ap-northeast-2.compute.amazonaws.com:8080/api/auth/token?code=${authcode}`)
        .then((res) => {
            let jwtToken  = res.headers.get("Authorization");
            localStorage.setItem("Authorization", jwtToken);
            window.location.replace('/survey');
        })
        .catch((Error) => {console.log(Error)})
    }, []);


    return(
        <div>

        </div>
    );
}