import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🧠 Test için sahte roller
    if (credentials.email === "admin@pmo.com") {
      navigate("/admin-dashboard");
    } else if (credentials.email === "jury@pmo.com") {
      navigate("/jury-dashboard");
    } else if (credentials.email === "participant@pmo.com") {
      navigate("/participant-dashboard");
    } else {
      alert("Geçersiz kullanıcı veya şifre.");
    }
  };

  return (
    <section className="form-page">
      <h1>PMO Awards 2026 Giriş</h1>
      <form className="application-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-posta"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit" className="btn-primary">
          Giriş Yap
        </button>
      </form>
    </section>
  );
}
