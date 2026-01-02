import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom/client";
// REACT is a library that can be imported

 // takes 3 param -> element type, object, what we want inside element. its a core react thing.
// this objs are used to give attributes to tags
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I am H1 Tag"),
            React.createElement("h2", {}, "I am H2 Tag"), // way to create siblings
        ]
    ),
     React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", {}, "I am H1 Tag"),
            React.createElement("h2", {}, "I am H2 Tag"), 
        ]
    )] // this way we hve created two child of parent. but the code looks ugly & complex. To solve this, we've JSX
);

// Above syntax is difficult. So JSX(javascript syntax) react was created
console.log(parent) // returns object which is a react element

// we need to use camel case for writinh attributes in JSX unlike HTML.
const jsxHeading = <h1 id = "heading" className="jsxHeading">React using JSX</h1> // JSX is not HTML in JS. Looks like HTML or XML.

const Title = () => {
    return <div id="titleContainer">
      <h1> I am a Title component</h1>
    </div>
};

const num = 1000;
const HeadComponent = () => {
    return <div id="headingContainer">
        {/* inside {}, we can write any piece of js */}
        {Title()} /* since title is a js function, it can be called inside */ 
      <Title />
      <h1> I am a react component</h1>
    </div>
};

// this is the job of REACT DOM to create root. something which browsers do. hence using REACTDOM to create it.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Browser engines doesn't understand js. JSX is transpiled before it reaches the js engine.
// Done by parcel via Babel.Babel is a JS that converts our code 
// root.render(jsxHeading); // render method turns this obj to tags/ elements

root.render(<HeadComponent />); // way of rendering a component