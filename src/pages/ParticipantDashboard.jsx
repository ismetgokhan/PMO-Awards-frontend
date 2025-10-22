import React from "react";

export default function ParticipantDashboard() {
  return (
    <section className="form-page">
      <h1>Katılımcı Paneli</h1>
      <p>Bu alanda yarışma başvuru formunuzu, video yüklemelerinizi ve sürecin durumunu takip edebilirsiniz.</p>

      <div className="participant-actions">
        <button className="btn-primary">Video Yükle</button>
        <button className="btn-outline">Başvuru Durumu</button>
      </div>
    </section>
  );
}
