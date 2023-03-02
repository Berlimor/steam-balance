import React from "react";

export default function Card(props) {

  return (
    <div className={"card-container " + (props.value === props.val ? "active" : "")} >
      <input type="radio" name="payment-method" required="" value={props.val} onClick={props.onClick} />
      <img src={props.url} />
    </div>
  );
}
