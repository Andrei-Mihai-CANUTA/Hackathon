import React from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
function Login() {
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
  );
}
export default Login;
