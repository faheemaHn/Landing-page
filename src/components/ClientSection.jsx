import React from "react";
import "./ClientSection.css";
import underlineImage from "../assets/Element12.png";
import QuoteBlue from "../assets/QuoteBlue.png";
import QuoteWhite from "../assets/QuoteWhite.png";
import Avater1 from "../assets/Avater1.png";
import Avater2 from "../assets/Avater.png";
import Avater3 from "../assets/Avater3.png";

const testimonials = [
  {
    bgColor: "#ffffff",
    textColor: "#212529",
    quoteImg: QuoteBlue,
    dividerClass: "divider blue",
    avatar: Avater1,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    bgColor: "#4F9CF9",
    textColor: "#ffffff",
    quoteImg: QuoteWhite,
    dividerClass: "divider white",
    avatar: Avater2,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    bgColor: "#4F9CF9",
    textColor: "#ffffff",
    quoteImg: QuoteWhite,
    dividerClass: "divider white",
    avatar: Avater3,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
];

const ClientSection = () => {
  return (
    <section className="client-section" data-aos="fade-up">
      <h2 className="client-heading">
        What Our Clients{" "}
        <span className="underline-text">
          Says
          <img src={underlineImage} alt="Underline" className="underline-img" />
        </span>
      </h2>

      <div className="client-cards">
        {testimonials.map((client, index) => (
          <div
            className="client-card"
            key={index}
            style={{ backgroundColor: client.bgColor, color: client.textColor }}
            data-aos="fade-right"
            data-aos-delay={index * 200}
          >
            <img src={client.quoteImg} alt="Quote" className="quote-icon" />
            <p className="client-text">
              Whitepate is designed as a collaboration tool<br />
              for businesses that is a full project<br />
              management solution.
            </p>
            <hr className={client.dividerClass} />
            <div className="client-info">
              <img src={client.avatar} alt="Avatar" className="avatar-img" />
              <div>
                <p className="client-name">{client.name}</p>
                <p className="client-position">{client.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
