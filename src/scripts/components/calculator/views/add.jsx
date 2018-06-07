import React from "react";
import StoreData from "../store";

var AddButton = React.createClass({
    addclick:function() {
       StoreData.addperform("+")
    },
    render() {
        return (
          <a className="waves-effect waves-light btn-flat" onClick={this.addclick}>+</a>
        );
    }
});

module.exports = AddButton;
