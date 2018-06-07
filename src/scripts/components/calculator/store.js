import Reflux from "reflux";
import CalculatortActions from "./action";

var CalculatorStore = Reflux.createStore({
    listenables: [CalculatortActions],
    data:{
      button : [
      {"value":1,"type":"int"},
      {"value":2,"type":"int"},
      {"value":3,"type":"int"},
      {"value":"+","type":"add"},
      {"value":4,"type":"int"},
      {"value":5,"type":"int"},
      {"value":6,"type":"int"},
      {"value":"-","type":"minus"},
      {"value":7,"type":"int"},
      {"value":8,"type":"int"},
      {"value":9,"type":"int"},
      {"value":"*","type":"mul"},
      {"value":0,"type":"int"},
      {"value":"/","type":"div"},
      {"value":"=","type":"equal"}
     ],
      firstVal:"",
      sendval:"",
      action:""
     },
    loadButton:function() {
      this.trigger(this.data);
    },
    valueAssign:function(number) {
      if(this.data.action == ""){
        this.data.firstVal += number
      } else {
        this.data.sendval += number
      }
      this.trigger(this.data);
    },
    addperform:function(number) {
        this.data.action = number;
        this.trigger(this.data);
    },
    setValue: function(value) {
        this.data.firstVal = value;
        this.data.sendval = "";
        this.data.action = "";
        this.trigger(this.data);
    },
    backspace:function() {
        this.data.firstVal = this.data.firstVal.toString();
        this.data.sendval = this.data.sendval.toString();

        if(this.data.sendval != "") {
            this.data.sendval = this.data.sendval.substring(0,this.data.sendval.length - 1);
        } else if(this.data.action != "") {
            this.data.action = "";
        } else if(this.data.firstVal != ""){
              this.data.firstVal = this.data.firstVal.substring(0,this.data.firstVal.length - 1);
        }
        this.trigger(this.data);
    }
});


module.exports = CalculatorStore;
