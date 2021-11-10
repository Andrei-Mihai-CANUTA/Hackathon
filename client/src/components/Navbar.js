import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <nav>
        <ul>
          {!isLoggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <li onClick={() => handleLogout()}>Logout</li>
          )}

          <Link to="/register">Register</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
