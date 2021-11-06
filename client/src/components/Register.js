import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      username: name,
      password: password,
    };

<<<<<<< HEAD
    fetch("http://localhost:4000/register", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
=======

    // fetch("http://localhost:4000/addUser", {
    //   method: "POST",
    //   // mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
      navigate("/dashboard")
>>>>>>> d87a5a4de9af31f44ef02e45992984e18768a067
  };
  return (
    <div class="container">
      <ul class="listamain">
        <li>
          <h1>Register:</h1>
        </li>
        <li>
          <input
            type="text"
            name="Username"
            placeholder="Username:"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            type="password"
            name="Password"
            placeholder="Repeat password"
          />
        </li>
        <li>
          <input
            type="button"
            name="Submit"
            value="Submit"
            onClick={() => handleSubmit()}
          />
        </li>
      </ul>
    </div>
  );
}
export default Register;
