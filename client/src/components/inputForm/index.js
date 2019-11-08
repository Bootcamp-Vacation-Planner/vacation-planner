import React from "react";
import "./style.css";


export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" type="text" placeholer="Name of Activity" {...props} />
        <input className="form-control" type="date" placeholder="Date" {...props} />
        <input className="form-control" type="time" placeholder="Time" {...props} />
        <input className="form-control" type="text" placeholder="Details" {...props} />
        <button> Submit </button>

      </div>
    );
  }
  
  
  export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }
  export default Input;
 