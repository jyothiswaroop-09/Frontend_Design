import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.includes("@")) {
      setMsg("❌ Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setMsg("❌ Password must be at least 6 characters.");
      return;
    }

    const savedPassword = localStorage.getItem(`user_${email}`);

    if (savedPassword) {
      // Existing user → check password
      if (savedPassword !== password) {
        setMsg("❌ Incorrect password!");
        return;
      }
    } else {
      // New user → save email + password
      localStorage.setItem(`user_${email}`, password);
      localStorage.setItem(`todos_${email}`, JSON.stringify([]));
    }

    // Successful login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", email);
    setMsg("✅ Login successful!");

    // Redirect to Todo page
    setTimeout(() => navigate("/todo"), 500);
  };

  return (
    <section className="section">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
        <p>{msg}</p>
      </form>
    </section>
  );
}
