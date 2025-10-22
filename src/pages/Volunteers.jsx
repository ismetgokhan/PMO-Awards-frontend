import React, { useState } from "react";
import "../App.css";
import gaye from "../assets/gaye.jpg";
import recep from "../assets/recep.jpg";
import ismet from "../assets/ismet.jpg";
import linkedin from "../assets/linkedin.png"; // küçük LinkedIn logosu (32x32 önerilir)

export default function Volunteers() {
  const [activeCard, setActiveCard] = useState(null);

  const volunteers = [
    {
      id: 1,
      name: "Gaye Ege İzci",
      title: "PMO Awards Ekibi",
      image: gaye,
      linkedin: "https://www.linkedin.com/in/egeizci/",
      bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aspernatur vitae quam minima. Error delectus ex, quidem sapiente reprehenderit in minima molestiae quo doloremque non nisi, beatae quasi sint vero."
    },
    {
      id: 2,
      name: "Recep Soran",
      title: "PMO Awards Ekibi",
      image: recep,
      linkedin: "https://www.linkedin.com/in/recep-soran/",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum ducimus quae id fugit magnam omnis ratione aliquam minima ab in enim, at, voluptatum totam placeat fugiat alias, debitis mollitia?"
    },
    {
      id: 3,
      name: "İsmet Gökhan",
      title: "PMO Awards Ekibi",
      image: ismet,
      linkedin: "https://www.linkedin.com/in/ismet-gokhan/",
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus veritatis saepe, quae perferendis necessitatibus soluta laboriosam eos vel voluptatem facilis quisquam numquam dignissimos impedit quod molestiae eum ipsa, dolorem autem!"
    }
  ];

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="volunteers-page">
      <h1>PMO Awards 2026 Gönüllülerimiz</h1>
      <p className="volunteers-subtitle">
        PMO Awards 2026 ekibinde emeği geçen gönüllülerimizle tanışın!
      </p>

      <div className="volunteers-grid">
        {volunteers.map((v) => (
          <div
            key={v.id}
            className={`volunteer-card ${activeCard === v.id ? "active" : ""}`}
            onClick={() => toggleCard(v.id)}
          >
            <img src={v.image} alt={v.name} className="volunteer-photo" />
            <h3>{v.name}</h3>
            <p>{v.title}</p>

            {activeCard === v.id && (
              <div className="volunteer-details">
                <p>{v.bio}</p>
                <a href={v.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="linkedin-icon"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
