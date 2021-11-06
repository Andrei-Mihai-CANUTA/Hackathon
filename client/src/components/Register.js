import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      name: name,
      password: password,
    };


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
