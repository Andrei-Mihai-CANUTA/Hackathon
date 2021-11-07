import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Account from "./Account";

function Dashbaord() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generate");
  };
  useEffect(() => {
    fetch("http://localhost:4000/getAccounts" + localStorage.getItem("name"), {
      method: "GET",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
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
      <p>Accounts</p>
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
      </ul>
<<<<<<< HEAD
      <button className = "button2" onClick={() => handleClick()}>Add account</button>
      
      <div className = "Boxes">

          <div className = "box"></div>
          <div className = "box"></div>
          <div className = "box"></div>
          <div className = "box"></div>
          
=======
      <button onClick={() => handleClick()}>Add account</button>

      <div id="main">
        <nav>
          <ul>
            <li>
              <a href="http://localhost:3000/generate">Add Account</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="Boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
>>>>>>> 0fd0384c372fbf7f75133baac7fbd6a642d4f28e
      </div>
    </div>
  );
}

export default Dashbaord;
