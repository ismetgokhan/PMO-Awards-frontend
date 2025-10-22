import React from "react";

export default function JuryDashboard() {
  return (
    <section className="form-page">
      <h1>Jüri Paneli</h1>
      <p>Bu alanda size atanmış katılımcıların başvurularını inceleyebilir ve değerlendirme puanlarını girebilirsiniz.</p>

      <div className="jury-actions">
        <button className="btn-primary">Değerlendirilecek Başvurular</button>
        <button className="btn-outline">Geri Bildirimlerim</button>
      </div>
    </section>
  );
}
