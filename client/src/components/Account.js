import React, { useState } from "react";

export default function Account(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p
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
