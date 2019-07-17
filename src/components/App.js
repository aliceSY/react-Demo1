import React, {PureComponent}  from "react";

export default class App extends PureComponent {
    render() {
       return (
            <div className="header">
                 <img src={require("../assets/images/1.png")} className="header_logo"/>
                 <div>Hello world</div>
                 <i className="fa fa-camera-retro fa-2x"></i>
            </div>
       )
    }
}