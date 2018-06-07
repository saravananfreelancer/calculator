import React from "react";
import StoreData from "../store";

var DivideButton = React.createClass({
divideclick:function() {
   StoreData.addperform("/")
},
render() {
    return (
      <a className="waves-effect waves-light btn-flat" onClick={this.divideclick}>/</a>
    );
}
});

module.exports = DivideButton;
