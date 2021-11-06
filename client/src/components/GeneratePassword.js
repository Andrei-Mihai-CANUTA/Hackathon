import react, { useState } from "react";
import crypto from "crypto";
import { useNavigate } from "react-router-dom";

export default function GeneratePassword() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordGenerated = crypto
      .randomBytes(parseInt(passwordLength))
      .toString("hex");

    const data = {
      name: name,
      url: url,
      password: passwordGenerated,
    };
    // fetch("http://localhost:4000/addAccount", {
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
    <div className = "container2">
      <ul className = "listamain">
      <li><h1>Create new account:</h1></li>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
       <li> <label htmlFor="url"></label>
        <input
          type="text"
          name="name"
          placeholder = "Add site name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        /></li>
       <li><label htmlFor="url"></label>
        <input
          type="text"
          name="url"
          placeholder = "Add site url"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        /></li>
        <li><label></label>
        <input
          type="text"
          placeholder = "Password length"
          value={passwordLength}
          onChange={(e) => {
            setPasswordLength(e.target.value);
          }}
        /></li>
        <li><input
        type="Submit" 
        name ="Submit"
        value = "Add Account"/>
        
        </li>
       </form>
       <li><h6><a href = "http://localhost:3000/dashboard">Go back</a></h6></li>
      </ul>
    </div>
  );
}
