const reactElement = {
    type: "a",
    props:{
        href : "https://google.com",
        target: "_blank"
    },
    innerText: "Click me to visit google"
};

const mainContainer = document.querySelector("#root");
function updateContainer(mainContainer,reactElement) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.innerText;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.props.target);
    // mainContainer.appendChild(domElement);
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.innerText;
    for (let atr in reactElement.props){
        if(atr === "innerText") continue
        domElement.setAttribute(atr,reactElement.props[atr]);
    };
    mainContainer.appendChild(domElement);
};
updateContainer(mainContainer,reactElement);

