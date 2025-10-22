import React, { useState } from "react";
import "../App.css";

export default function Participants() {
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    representativeName: "",
    corporateEmail: "",
    personalEmail: "",
    phone: "",
    website: "",
    linkedin: "",
    logo: null,
    pmoYears: "",
    employees: "",
    pmoStructure: "",
    pmoTeamSize: "",
    intentLetter: "",
    kvkkConsent: false,
    ethicsAccepted: false,
  });

  const [pdfOpened, setPdfOpened] = useState(false); // link tıklanınca aktifleşecek

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!formData.ethicsAccepted) {
    alert("Lütfen PMI Etik ve Mesleki Davranış Kuralları’nı okuyup onaylayın.");
    return;
  }
    console.log("Katılımcı Başvurusu:", formData);
    alert("Katılımcı başvurunuz başarıyla alınmıştır! Teşekkür ederiz.");
  };

  return (
    <section className="form-page">
      <h1>PMO Awards 2025 Katılımcı Başvuru Formu</h1>
      <p className="form-description">
        PMI Türkiye tarafından düzenlenen PMO Awards, ülkemizin en iyi Proje Yönetim Ofislerini (PMO) ödüllendirmeyi amaçlar. 
        Aşağıdaki formu doldurarak başvurunuzu gerçekleştirebilirsiniz.
      </p>

      <form className="application-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-posta" value={formData.email} onChange={handleChange} required />
        <input type="text" name="organization" placeholder="Kurum Adı" value={formData.organization} onChange={handleChange} required />
        <input type="text" name="representativeName" placeholder="PYO Temsilcisi (Ad Soyad)" value={formData.representativeName} onChange={handleChange} required />
        <input type="email" name="corporateEmail" placeholder="PYO Temsilcisinin Kurumsal Mail Adresi" value={formData.corporateEmail} onChange={handleChange} required />
        <input type="email" name="personalEmail" placeholder="PYO Temsilcisinin Kişisel Mail Adresi" value={formData.personalEmail} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="PYO Temsilcisinin Telefon Numarası" value={formData.phone} onChange={handleChange} required />
        <input type="url" name="website" placeholder="Websitesi URL’si" value={formData.website} onChange={handleChange} />
        <input type="url" name="linkedin" placeholder="Kurum LinkedIn Adresi" value={formData.linkedin} onChange={handleChange} />

        <label className="file-label">
          Kurum Logosu (PNG formatında, en az 1000x1000 px)
        </label>
        <input type="file" name="logo" accept=".png" multiple onChange={handleFileChange} required />

        <input type="number" name="pmoYears" placeholder="Proje yönetim ofisiniz kaç yıldır faaliyet göstermektedir?" value={formData.pmoYears} onChange={handleChange} />
        <input type="number" name="employees" placeholder="Firmanızda tam zamanlı çalışan sayısı" value={formData.employees} onChange={handleChange} />
        <textarea name="pmoStructure" placeholder="Proje yönetim ofisinizin yapısı ve işleyişi hakkında kısa bilgi" rows="3" value={formData.pmoStructure} onChange={handleChange} />
        <input type="number" name="pmoTeamSize" placeholder="Proje yönetim ofisinizde kaç kişi çalışmaktadır?" value={formData.pmoTeamSize} onChange={handleChange} />
        <textarea name="intentLetter" placeholder="Başvuru niyet mektubu" rows="4" value={formData.intentLetter} onChange={handleChange} />

        {/* KVKK Onayı */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="kvkkConsent"
            checked={formData.kvkkConsent}
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
