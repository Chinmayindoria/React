import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Hello(){
    const {user} = useContext(UserContext)
    return(
        <h1>HELLO {user} 1</h1>
    )
}
export default Hello