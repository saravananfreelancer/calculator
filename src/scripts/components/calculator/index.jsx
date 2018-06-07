import React from "react";
import Reflux from "reflux";
import Button from "./views/button";
import Add from "./views/add";
import Sub from "./views/minus";
import Divide from "./views/divide";
import Multi from "./views/multi";
import StoreData from "./store";

var Calculator = React.createClass({
 mixins: [ Reflux.connect(StoreData, "store")],
 componentDidMount:function() {
     StoreData.loadButton();
 },
 numberClick:function(number) {
    StoreData.valueAssign(number);
 },
 performaction:function() {
    var firstVal = Number(this.state.store.firstVal);
    var secondVal = Number(this.state.store.sendval);
    var finalVlue;
    if(this.state.store.action == "+") {
      finalVlue = firstVal + secondVal;
    } else if(this.state.store.action == "-") {
      finalVlue = firstVal - secondVal;
    } else if(this.state.store.action == "*") {
      finalVlue = firstVal * secondVal;
    } else if(this.state.store.action == "/") {
      finalVlue = firstVal / secondVal;
    }
    finalVlue = finalVlue.toString();
    StoreData.setValue(finalVlue)
 },
 clearLastVal:function() {
      StoreData.backspace();
 },
    render() {
        if(this.state.store && this.state.store.button) {
            return (
                    <div className="calculator-box">
                        <div className="value-box">
                           <div className="display-box">
                                 <span>{this.state.store.firstVal}</span>
                                 <span>{this.state.store.action}</span>
                                 <span>{this.state.store.sendval}</span>
                           </div>
                           <div className="backSpace" onClick={this.clearLastVal}>
                               &larr;
                           </div>
                        </div>
                        {
                           this.state.store.button.map((currentObj,index) => {
                               if(currentObj.type == "int") {
                                  return(<Button key={index} label={currentObj.value} click = {this.numberClick}/>)
                               } else  if(currentObj.type == "add") {
                                  return (<Add key={index}/>)
                               }  else  if(currentObj.type == "minus") {
                                  return (<Sub key={index}/>)
                               }  else  if(currentObj.type == "div") {
                                  return (<Divide key={index}/>)
                               }   else  if(currentObj.type == "mul") {
                                  return (<Multi key={index}/>)
                               } else if(currentObj.type == "equal"){
                                  return(<a key={index} className="waves-effect waves-light btn-flat" onClick={this.performaction}> = </a>)
                               }
                           })
                        }
                    </div>
            );
        } else {
             return (
                     <div>
                     </div>
             );
        }

    }
});

module.exports = Calculator;
