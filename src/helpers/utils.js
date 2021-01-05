
import decode from 'jwt-decode';


const getAuthToken = () => {
    const token = localStorage.getItem('blumin-tkn') || null;
    return token;
};

export const isLoggedIn = () =>{
    let authToken = getAuthToken();
    return !!authToken && !isTokenExpired(authToken);
}

const isTokenExpired = (token) => {
    let expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}

const getTokenExpirationDate = (encodedToken) =>{
    let token = decode(encodedToken);
    if (!token.exp) {
        return null;
    }
  
    let date = new Date(0);
    date.setUTCSeconds(token.exp);
  
    return date;
}

export const getUserInfo = () =>{
    if (isLoggedIn()) {
        return decode(getAuthToken());
    }
}

