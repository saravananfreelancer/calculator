import React from "react";

var Header = React.createClass({
    render() {
        return (
            <nav className="header-bar">
              <div className="nav-wrapper">
                <a className="brand-logo">Calculator</a>
              </div>
            </nav>
        );
    }
});

module.exports = Header;
