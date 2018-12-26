import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className=" jumbotron jumbotron-fluid" {...props}>
        <img src={require('../../images/logo.png')}/>
        <h3>{props.message}</h3>
    </div>
);

export default Jumbotron;