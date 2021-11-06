import react, { useState } from "react";
import crypto from "crypto";

export default function GeneratePassword() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [passwordLength, setPasswordLength] = useState("");

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
    fetch("http://localhost:4000/addAccount", {
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
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="url">Add site name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="url">Add site url</label>
        <input
          type="text"
          name="url"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <label>Password length </label>
        <input
          type="text"
          value={passwordLength}
          onChange={(e) => {
            setPasswordLength(e.target.value);
          }}
        />
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
}
