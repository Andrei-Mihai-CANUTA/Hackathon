import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
function Login() {
<<<<<<< HEAD
  const navigate = useNavigate();
  
  return (
    <div className = "container">
    <ul className = "listamain">
        <li><h1>Login:</h1></li>
        <li><input type = "text" name = "Username" placeholder = "Username"/></li>
        <li><input type = "password" name = "Password" placeholder = "*********"/></li>
        <li><input type = "button" name = "Submit" value = "Submit"/></li>
        <li><a href = "http://localhost:3000/register">Sign up!</a></li>
    </ul>
</div>
=======
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      username: name,
      password: password,
    };
    fetch("http://localhost:4000/login", {
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
  };
  return (
    <div class="container">
      <ul class="listamain">
        <li>
          <h1>Login:</h1>
        </li>
        <li>
          <input
            value={name}
            type="text"
            name="Username"
            placeholder="Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            value={password}
            type="password"
            name="Password"
            placeholder="*********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            type="button"
            name="Submit"
            value="Submit"
            onClick={() => handleLogin()}
          />
        </li>
        <li>
          <a href="http://localhost:3000/register">Sign up!</a>
        </li>
      </ul>
    </div>
>>>>>>> 76d6edc1281f772cc92a41ba4173ccbe679281dd
  );
}
export default Login;
