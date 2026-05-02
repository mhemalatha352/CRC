import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📧 Email validation
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // 🔐 Login
  const login = async () => {
    setError("");

    if (!form.email || !form.password) {
      setError("⚠️ Please fill all fields");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("⚠️ Enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("userEmail", form.email);
        nav("/home");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome to CRC</h1>
            <p className="login-subtitle">Discover your perfect career path</p>
          </div>

          <form className="login-form" onSubmit={(e) => { e.preventDefault(); login(); }}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <a href="#" className="forgot-password-link" onClick={(e) => { e.preventDefault(); alert("Password reset feature coming soon!"); }}>
                Forgot Password?
              </a>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <span className="loading-spinner">Logging in...</span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="login-footer">
            <p className="signup-hint">
              New user? Just sign in — your account will be created automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;