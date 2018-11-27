import React from "react";
import "./ListItem.css";

export const ListItem = props => (
  <li className="list-group-item">
    <div className="card-deck">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-title"> {props.url}</h6>
            </div>
        </div>
    </div>
  </li>
);
