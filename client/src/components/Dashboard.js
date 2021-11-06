import react from "react";
import { useNavigate } from "react-router-dom";

function Dashbaord() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generate");
  };
  return (
    <div>
      Dashbord:
      <p>Accounts</p>
      <ul>
        <li>Account 1</li>
        <li>Account 2</li>
        <li>Account 3</li>
      </ul>
      <button onClick={() => handleClick()}>Add account</button>
    </div>
  );
}

export default Dashbaord;
