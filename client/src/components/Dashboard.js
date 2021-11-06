import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Account from "./Account";

<head>
  <link rel = "stylesheet" type = "text/css" href = "css/style.css"></link>
</head>

function Dashbaord() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generate");
  };
  let accounts = [
    {
      id: 1,
      name: "account1",
      url: "https://google.com",
      password: "sjslxh1ojc0",
    },
  ];
  return (
    <div>
      {/* <p>Accounts</p>
      <ul>
        {accounts.map((account) => {
          return (
            <Account
              name={account.name}
              password={account.password}
              idx={account.id}
            />
          );
        })}
      </ul> */}
      {/* <button onClick={() => handleClick()}>Add account</button> */}

      <div id = "main">
        <nav>
          <ul>
            <li><a href = "http://localhost:3000/generate">Add Account</a></li>
          </ul>
        </nav>
      </div>

      <div className = "Boxes">

          <div className = "box"></div>
          <div className = "box"></div>
          <div className = "box"></div>
          <div className = "box"></div>
          
      </div>


    </div>
  );
}

export default Dashbaord;
