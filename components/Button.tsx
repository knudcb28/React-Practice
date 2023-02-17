import React from "react";

function Button(props:{onClick:()=>void}){
  return (
    <div className="p-5">
      <button className="button" onClick={props.onClick}>
        <p className="font-bold">Call Component</p>
      </button>
    </div>
  );
};

export default Button;
