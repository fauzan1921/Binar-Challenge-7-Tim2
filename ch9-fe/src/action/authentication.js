import jwt_decode from "jwt-decode";

export const decodedToken = (token) => {
    const decoded = jwt_decode(token);

    if (decoded.aud !== process.env.REACT_APP_PROJECT_ID) {
        return null;
    }

    return decoded;
};
