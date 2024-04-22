import React from "react";
import ReactDOM from "react-dom";

// React.createElement => it's Object => HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"Hello React");

// JSX - HTML-like or xml syntax

// jSX (Transpiled before it reaches the js)
const jsxHeading = (
                    <h1 id="heading1" className="heading" tabIndex="3">
                       Namste React form jsx
                    </h1>
                   )

// functional components

const HeadingComponents = () => {
    return <h1>This is functional components</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);