import React from "react";

const authData = {
    token: "Vacio",
    email: "",
    password: "",
    name: "",
    phone: 0,
}

export { authData }
export default React.createContext(authData)

/*Object {
  "email": "figuerajhonny5@gmail.com",
  "family_name": "Figuera",
  "given_name": "Jhonny",
  "id": "109187894384021618399",
  "locale": "es",
  "name": "Jhonny Figuera",
  "picture": "https://lh3.googleusercontent.com/a-/AOh14GgHMkaN6D3P1qEo7S5bIYzb9T2CvUPTjvrCjai1dkI=s96-c",
  "verified_email": true,
} */