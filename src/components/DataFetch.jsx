import React, { useState } from "react";

export default function DataFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <section className="section">
      <h2>Fetched Data (Fake API)</h2>
      <button onClick={fetchData}>Fetch Users</button>
      {loading && <p>Loading...</p>}
      <div className="data-grid">
        {users.map((u) => (
          <div key={u.id} className="card">
            <h4>{u.name}</h4>
            <p>{u.email}</p>
            <p>{u.address.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
