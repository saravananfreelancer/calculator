import React from "react";

var Button = React.createClass({
    render() {
        return (
          <a className="waves-effect waves-light btn-flat" onClick={this.props.click.bind(null,this.props.label)}>{this.props.label}</a>
        );
    }
});

module.exports = Button;
