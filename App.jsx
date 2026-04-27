import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function App() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const modalRef = useRef(null);

  const [values, setValues] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 2200);
  };

  const validate = (v) => {
    const e = { email: "", password: "" };

    if (!v.email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(v.email.trim())) e.email = "Enter a valid email address.";

    if (!v.password) e.password = "Password is required.";
    else if (v.password.length < 8) e.password = "Minimum 8 characters.";
    else if (!/[A-Z]/.test(v.password)) e.password = "Add 1 uppercase letter (A-Z).";
    else if (!/[0-9]/.test(v.password)) e.password = "Add 1 number (0-9).";
    else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(v.password))
      e.password = "Add 1 special character (e.g., !@#).";

    return e;
  };

  const errors = useMemo(() => validate(values), [values]);
  const canSubmit = useMemo(() => !errors.email && !errors.password, [errors]);

  // Close when clicking outside modal
  useEffect(() => {
    function onDown(e) {
      if (!open) return;
      if (modalRef.current && !modalRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Escape to close
  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const onOpen = () => {
    setOpen(true);
    showToast("✨ Welcome — sign in to continue");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!canSubmit) {
      showToast("❌ Fix the errors to continue");
      return;
    }

    setLoading(true);
    showToast("⏳ Signing in...");

    // Demo API call
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    showToast(`✅ Signed in as ${values.email}`);
    // Optional: close modal after success
    // setOpen(false);
  };

  const onChange = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const onBlur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  return (
    <div className="page">
      {/* HERO / Landing */}
      <header className="hero">
        <div className="brandRow">
          <div className="brandLogo">AI</div>
          <div className="brandText">
            <div className="brandName">FayasAI Cloud</div>
            <div className="brandTag">Modern AI SaaS • Secure • Fast</div>
          </div>
        </div>

        <h1 className="headline">
          AI PLATFORM PAGE <span className="grad"> Using RAG Concepts</span>
        </h1>
        <p className="subhead">
          "AI-Powered Mock Interview Generator: Your Ultimate Tool for Job Interview Success! 🤖"
        </p>

        <div className="ctaRow">
          <button className="ctaPrimary" onClick={onOpen}>
            Launch Sign In
          </button>
          <button
            className="ctaSecondary"
            onClick={() => showToast("📄 Pricing (demo) clicked")}
          >
            View Pricing
          </button>
        </div>

        <div className="featureGrid">
          <div className="featureCard">
            <div className="featureTitle">⚡ Fast Setup</div>
            <div className="featureText">Vite + React. Clean structure, easy to extend.</div>
          </div>
          <div className="featureCard">
            <div className="featureTitle">🔒 Secure by Design</div>
            <div className="featureText">Validation UI ready for JWT / OAuth integration.</div>
          </div>
          <div className="featureCard">
            <div className="featureTitle">📈 Portfolio Ready</div>
            <div className="featureText">Glass UI, animations, modal patterns used in SaaS.</div>
          </div>
        </div>
      </header>

      {/* Floating AI Badge */}
      <button className={`aiFab ${open ? "active" : ""}`} onClick={onOpen} aria-label="Open Sign In">
        <span className="aiFabInner">AI</span>
      </button>

      {/* Modal */}
      <div className={`modalOverlay ${open ? "show" : ""}`}>
        <div className="modal" ref={modalRef}>
          <div className="modalHeader">
            <div>
              <div className="modalTitle">Sign in</div>
              <div className="modalSubtitle">Access your AI dashboard</div>
            </div>
            <button className="iconBtn" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={onChange("email")}
              onBlur={onBlur("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
            />
            {touched.email && errors.email && <div className="error">{errors.email}</div>}

            <label className="label">Password</label>
            <div className="pwRow">
              <input
                className="input"
                type={showPw ? "text" : "password"}
                placeholder="Min 8 chars, A-Z, 0-9, symbol"
                value={values.password}
                onChange={onChange("password")}
                onBlur={onBlur("password")}
                aria-invalid={Boolean(touched.password && errors.password)}
              />
              <button
                type="button"
                className="ghostBtn"
                onClick={() => setShowPw((s) => !s)}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
            {touched.password && errors.password && <div className="error">{errors.password}</div>}

            <div className="row">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a
                className="link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast("🔐 Forgot password (demo)");
                }}
              >
                Forgot password?
              </a>
            </div>

            <button className="btnPrimary" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <button
              className="btnSecondary"
              type="button"
              disabled={loading}
              onClick={() => showToast("✨ Google OAuth (demo)")}
            >
              Continue with Google
            </button>

            <div className="fineprint">
              New here?{" "}
              <a
                className="link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast("🧾 Sign up (demo)");
                }}
              >
                Create an account
              </a>
            </div>

            <div className="rules">
              Password rules: <b>8+</b> chars, <b>uppercase</b>, <b>number</b>, <b>symbol</b>
            </div>
          </form>
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}