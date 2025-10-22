import React, { useState } from "react";
import "../App.css";

export default function Jury() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    title: "",
    certifications: "",
    pmiId: "",
    experienceYears: "",
    previousJury: "",
    ethicsCommitment: "",
    goodJudgeTraits: "",
    companyConflict: false,
    motivation: "",
    cv: null,
    consent: false,
    ethicsAccepted: false,
  });

  const [pdfOpened, setPdfOpened] = useState(false); // PDF linki tıklandı mı?

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!formData.ethicsAccepted) {
    alert("Lütfen PMI Etik ve Mesleki Davranış Kuralları’nı okuyup onaylayın.");
    return;
  }
    console.log("Jüri Başvurusu:", formData);
    alert("Jüri başvurunuz başarıyla alınmıştır! Teşekkür ederiz.");
  };

  return (
    <section className="form-page">
      <h1>PMO Awards 2025 Jüri Başvuru Formu</h1>
      <p className="form-description">
        PMO Awards jüri ekibi, proje yönetimi alanında deneyimli
        profesyonellerden oluşmaktadır. Siz de bilgi ve deneyiminizle bu
        prestijli organizasyonda jüri olarak yer almak isterseniz, aşağıdaki
        formu doldurabilirsiniz.
      </p>

      <form className="application-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Ad Soyad" value={formData.fullName} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefon Numarası" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-posta Adresi" value={formData.email} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Kurum/Şirket" value={formData.company} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Görevi/Ünvanı" value={formData.title} onChange={handleChange} required />
        <input type="text" name="certifications" placeholder="Proje yönetim alanındaki sertifikalarınız" value={formData.certifications} onChange={handleChange} />
        <input type="text" name="pmiId" placeholder="PMI Üyelik Numarası (varsa)" value={formData.pmiId} onChange={handleChange} />
        <input type="number" name="experienceYears" placeholder="Proje yönetimi alanındaki deneyim yılı" value={formData.experienceYears} onChange={handleChange} />

        <textarea
          name="previousJury"
          placeholder="Daha önce PMI veya benzeri organizasyonlarda jüri/komite görevinde bulundunuz mu?"
          rows="3"
          value={formData.previousJury}
          onChange={handleChange}
        />

        <textarea
          name="ethicsCommitment"
          placeholder="PMI etik ilkeleri ve değerlere bağlılık konusunda kendinizi nasıl değerlendirirsiniz?"
          rows="3"
          value={formData.ethicsCommitment}
          onChange={handleChange}
        />

        <textarea
          name="goodJudgeTraits"
          placeholder="Size göre iyi bir jüri üyesinin sahip olması gereken 3 ana özellik nedir?"
          rows="3"
          value={formData.goodJudgeTraits}
          onChange={handleChange}
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="companyConflict"
            checked={formData.companyConflict}
            onChange={handleChange}
            required
          />
          Jüri olarak PMO Awards'a katılmam durumunda, şirketimin PMO Awards
          2025'e katılamayacağını kabul ediyorum.
        </label>

        <textarea
          name="motivation"
          placeholder="Neden jüri üyesi olmak istiyorsunuz?"
          rows="4"
          value={formData.motivation}
          onChange={handleChange}
          required
        />

        <label className="file-label">Güncel CV (PDF formatında)</label>
        <input
          type="file"
          name="cv"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          6698 Sayılı Kişisel Verilerin Korunması Kanunu’nun 5. Maddesi
          kapsamında kişisel verilerimin PMI TR tarafından kullanılmasını
          onaylıyorum.
        </label>

        {/* ✅ Etik PDF Linki */}
        <div className="pdf-container">
          <h3>PMI Etik ve Mesleki Davranış Kuralları</h3>
          <p>
            Lütfen aşağıdaki bağlantıya tıklayarak{" "}
            <a
              href="/PMI Etik ve Mesleki Davranış Kuralları.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setPdfOpened(true)} // link tıklanınca aktifleşir
              style={{ color: "#00509e", textDecoration: "underline", fontWeight: "600" }}
            >
              PMI Etik ve Mesleki Davranış Kuralları’nı görüntüleyin
            </a>
            .
          </p>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="ethicsAccepted"
              checked={formData.ethicsAccepted}
              onChange={handleChange}
              required
              disabled={!pdfOpened} // 🔒 PDF açılmadan tıklanamaz
            />
            PDF’yi okudum, anladım ve uymayı kabul ediyorum.
          </label>
        </div>

        <button type="submit" className="btn-primary">
          Başvuruyu Gönder
        </button>
      </form>
    </section>
  );
}
