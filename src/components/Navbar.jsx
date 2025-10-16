import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation(); // ← Add this line at the top inside Navbar

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/"; // redirect to Home
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}

        {isLoggedIn && <li><Link to="/todo">Todo</Link></li>}

        {/* Logout button only appears on /todo page */}
        {isLoggedIn && location.pathname === "/todo" && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
