import React from "react";
import { useNavigate } from "react-router-dom";
import Account from "./Account";

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
      Dashbord:
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
      <button onClick={() => handleClick()}>Add account</button>
    </div>
  );
}

export default Dashbaord;
