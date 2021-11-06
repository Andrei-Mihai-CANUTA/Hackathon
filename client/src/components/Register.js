import React from "react";
import "./form.css";
function Register() {
  return (
    <div class = "container">
    <ul class = "listamain">
        <li><h1>Register:</h1></li>
        <li><input type = "text" name = "Username" placeholder = "Username:"/></li>
        <li><input type = "password" name = "Password" placeholder = "Password"/></li>
        <li><input type = "password" name = "Password" placeholder = "Repeat password"/></li>
        <li><input type = "button" name = "Submit" value = "Submit"/></li>
    </ul>
</div>
  );
}
export default Register;
