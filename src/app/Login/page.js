"use client";

import { useState } from "react";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario, "Contraseña:", password);
    // Aquí conectas con tu API o lógica de login
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>FIDCUS</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom, #192a67 50%, #ffffff 50%)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "380px",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
    color: "#192a67",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  input: {
    padding: "0.9rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "1rem",
    backgroundColor: "#fff",
  },
  button: {
    padding: "0.9rem",
    backgroundColor: "#192a67",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};
