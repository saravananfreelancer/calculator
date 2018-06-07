import React from "react";
import { render } from "react-dom";
import Header from "./components/header/header";
import Calculator from "./components/calculator/index";


"use strict";

var App = React.createClass({


    render() {
        return (
            <div>
                <Header />
                <Calculator />
            </div> 
        );
    }
});
module.exports = App;

// Renders the main app into the DOM

render(<App />, document.getElementById("app"));
