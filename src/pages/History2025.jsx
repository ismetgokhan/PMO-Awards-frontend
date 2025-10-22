// src/pages/History2025.jsx

import React from "react";
import "../App.css";

const History2025 = () => {
  return (
    <div className="history-container">
      <h2>PMO Awards 2025 Özeti</h2>

      <section>
        <h3>Genel Bakış</h3>
        <p>
          PMI Türkiye olarak, “Türkiye’nin En İyi Proje Yönetim Ofisi (PMO)
          Ödülleri” programının 2025 dönemi başarıyla tamamlanmıştır. Proje
          performansı, liderliği ve değer üretimiyle öne çıkan PMO’lar bu
          programda ödüllendirilmiştir.
        </p>
      </section>

      <section>
        <h3>Uygunluk Kriterleri</h3>
        <ul>
          <li>Tüm kurumsal ve kamu sektörü PMO’ları başvurabilir.</li>
          <li>Danışmanlık şirketleri doğrudan başvuramaz.</li>
          <li>PMI personeli, yüklenicileri başvuru yapamaz.</li>
        </ul>
      </section>

      <section>
        <h3>Süreç &amp; Takvim</h3>
        <ul>
          <li><strong>15 Mayıs – 7 Temmuz:</strong> Başvuru Aşaması</li>
          <li><strong>Temmuz – Ağustos:</strong> Video Başvuru Dönemi</li>
          <li><strong>Ağustos – Eylül:</strong> Değerlendirme</li>
          <li><strong>Ekim:</strong> Ödül Töreni</li>
          <li><strong>Kasım:</strong> Geri Bildirim Dönemi</li>
          <li><strong>Aralık:</strong> Kapanış ve değerlendirme</li>
        </ul>
      </section>

      <section>
        <h3>Ödül Töreni &amp; Sonuçlar</h3>
        <p>
          Ödüller, PMI Türkiye Zirvesi kapsamında takdim edildi. Finalistler ve
          kazananlar kurumlara özel plaketlerle ödüllendirildi. Bu ödül,
          PMO’ların proje yönetimindeki katkısının geniş çevrede görünür olmasını
          sağladı.
        </p>
      </section>

      <section>
        <h3>Geri Bildirim &amp; Öğrenilen Dersler</h3>
        <p>
          Tüm katılımcılara, güçlü yönleri ve geliştirilebilecek alanları içeren
          detaylı geri bildirimler sağlandı. 2025 sürecinden edinilen dersler,
          2026 organizasyonu için temel çıktı olarak kaydedildi.
        </p>
      </section>

      <section className="contact-section">
        <p>
          Detaylı bilgiler, başvuru linkleri ve iletişim için bizimle iletişime
          geçin.
        </p>
        <a href="mailto:pmoawards@pmi.org.tr">pmoawards@pmi.org.tr</a>
      </section>
    </div>
  );
};

export default History2025;
