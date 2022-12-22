const CLIENT_ID = "c7296f02d20133ca1482fff8d734e46e";
const REDIRECT_URI = "http://localhost:3000";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;