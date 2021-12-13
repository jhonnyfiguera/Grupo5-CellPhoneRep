import React from "react";

const authData = {
  token: "",
  email: "",
  password: "",
  name: "",
  phone: 0,
  userId: "",
};

export { authData };
export default React.createContext(authData);
