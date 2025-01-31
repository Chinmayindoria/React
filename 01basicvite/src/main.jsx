import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: "a",
    props:{
        href : "https://google.com",
        target: "_blank"
    },
    innerText: "Click me to visit google"
};

function MyApp(){
    return(
     <></>
    )
}
let anotherElement = (
    <a href="https://google.co" target ="_blank">Visit google</a>
)
let areactElement = React.createElement(
    "a",
    {
        href:"https://google.com",
        target: "_blank"
    },
    "Visit d"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    areactElement
  
)
