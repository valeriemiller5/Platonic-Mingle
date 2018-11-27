import React from "react";
import "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} className="btn btn-lg btn-info input-lg">
    {props.children || "Click Here for Latest Trends!"} 
  </button>
);
