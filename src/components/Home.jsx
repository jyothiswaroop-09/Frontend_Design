import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
        backgroundColor: "#f5f7fa",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
        Welcome to Your TODO Frontend Dashboard
      </h1>
      <p
        style={{
          maxWidth: "300px",
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: "1.6",
          marginBottom: "2rem",
        }}
      >
          A <strong>Todo</strong> is a task a user wants to complete. 
  Each user can have their own personalized list, add or delete tasks, 
  and manage daily priorities efficiently.
      </p>

     

      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "0.7rem 1.5rem",
          fontSize: "1.1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login to Continue
      </button>
    </section>
  );
}
