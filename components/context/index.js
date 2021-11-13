import React, { useEffect, useState, useContext } from "react";

const authData = {
    name: "",
    mail: "",
    token: "",
    phone: "",
}

export { authData }
export default React.createContext(authData)