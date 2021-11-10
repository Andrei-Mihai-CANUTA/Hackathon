import React, { useState } from "react";
import "./form.css";
export default function Account(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="Boxes">
      <p
        className="box"
        onClick={() => {
          setShow(!show);
        }}
      >
        Account {props.idx}
      </p>
      {show ? (
        <div>
          <p>name: {props.name}</p>
          <p>url: {props.url}</p>
          <p>password: {props.password}</p>
        </div>
      ) : null}
    </div>
  );
}
