import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Hello2(){
    const {user} = useContext(UserContext)
    return(
        <h1>HELLO {user} 2</h1>
    )
}
export default Hello2