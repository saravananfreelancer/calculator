import React from "react";
import StoreData from "../store";

var MultipleButton = React.createClass({
Multipleclick:function() {
   StoreData.addperform("*")
},
render() {
    return (
      <a className="waves-effect waves-light btn-flat" onClick={this.Multipleclick}>*</a>
    );
}
});

module.exports = MultipleButton;
