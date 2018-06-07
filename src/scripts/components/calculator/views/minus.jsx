import React from "react";
import StoreData from "../store";

var SubButton = React.createClass({
minusclick:function() {
   StoreData.addperform("-")
},
render() {
    return (
      <a className="waves-effect waves-light btn-flat" onClick={this.minusclick}>-</a>
    );
}
});

module.exports = SubButton;
