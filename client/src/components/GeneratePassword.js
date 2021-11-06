import react from "react";

export default function GeneratePassword() {
  return (
    <div>
      <label for="url">Add site name</label>
      <input type="text" name="name" />
      <label for="url">Add site url</label>
      <input type="text" name="url" />
      <label>Password length </label>
      <input type="text" />
    </div>
  );
}
