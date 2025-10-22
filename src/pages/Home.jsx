import React from "react";
import "../App.css";
import heroImg from "../assets/hero-sample.jpg";

export default function Home() {
  return (
    <section className="home-hero fade-in">
      <div className="home-hero-content slide-up">
        <div className="text-section">
          <h1>PMO Awards 2026</h1>
          <p>
            PMI Türkiye tarafından düzenlenen PMO Awards, Proje Yönetim Ofislerinin (PMO)
            ülkemizdeki en iyi uygulamalarını ve değer üretimini görünür kılmayı amaçlar.
          </p>
        </div>

        <div className="image-section fade-in-delay">
          <img src={heroImg} alt="PMO Awards Hero" />
        </div>
      </div>
    </section>
  );
}
