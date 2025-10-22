import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import pmiLogo from "../assets/pmi-logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        {/* Sol kısım: Logo */}
        <div className="topbar-left">
          <img src={pmiLogo} alt="PMI Türkiye" className="topbar-logo" />
        </div>

        {/* Sağ kısım: Sosyal medya, dil, PMI.org, Giriş */}
        <div className="topbar-right">
          <div className="social-icons">
            <a href="https://facebook.com/PMITurkey" target="_blank" rel="noreferrer">🌐</a>
            <a href="https://instagram.com/pmiturkey" target="_blank" rel="noreferrer">📷</a>
            <a href="https://linkedin.com/company/pmiturkey" target="_blank" rel="noreferrer">💼</a>
            <a href="https://youtube.com/@PMITurkeyChapter" target="_blank" rel="noreferrer">▶️</a>
          </div>

          <div className="lang-switch">
            🇬🇧 | 🇹🇷
          </div>

          <a href="https://www.pmi.org" target="_blank" rel="noreferrer" className="pmi-btn">
            PMI.ORG
          </a>

          {/* 🔹 Giriş Yap butonu */}
          <Link to="/login" className="login-btn-top">
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
