import React, { useEffect } from "react";
import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "./Contact.css";

// Leaflet varsayılan marker fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  useEffect(() => {
    document
      .querySelectorAll(".contact-module-fade-in-up")
      .forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
      });
  }, []);

  const contactInfo = [
    {
      icon: "📍",
      title: "Adres",
      content: "Erzene, Ege Ünv. No:172",
      subcontent: "35040 Bornova/İzmir",
    },
    {
      icon: "📧",
      title: "E-posta",
      content: "egesavtek@gmail.com",
      link: "mailto:info@example.com",
    },
    {
      icon: "⏰",
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      subcontent: "Cumartesi: 10:00 - 14:00",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://twitter.com",
      color: "#1da1f2",
    },
    {
      name: "Instagram",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com",
      color: "#e4405f",
    },
    {
      name: "YouTube",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com",
      color: "#ff0000",
    },
  ];

  return (
    <div className="contact-module-container">
      <Navbar />
      {/* Hero Section */}
      <section className="contact-module-hero">
        <div className="contact-module-hero-content">
          <span className="contact-module-badge contact-module-fade-in-up">
            <span>🤝</span> Bize Ulaşın
          </span>
          <h1 className="contact-module-title contact-module-fade-in-up">
            İletişime Geçin
          </h1>
          <p className="contact-module-subtitle contact-module-fade-in-up">
            Projeleriniz hakkında konuşmak veya sorularınızı yanıtlamak için
            buradayız
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-module-main">
        <div className="contact-module-grid">
          {/* Sol Taraf - Leaflet Harita */}
          <div className="contact-module-map-container contact-module-fade-in-up">
            <MapContainer
              center={[38.4555, 27.2067]}
              zoom={15}
              style={{ height: "100%", borderRadius: "1rem" }}
              className="contact-module-leaflet-container"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[38.4555, 27.2067]}>
                <Popup className="contact-module-leaflet-popup-content-wrapper">
                  Ege Üniversitesi <br /> Bornova / İzmir
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Sağ Taraf - İletişim Bilgileri ve Sosyal Medya */}
          <div className="contact-module-info-section">
            {/* İletişim Bilgileri */}
            <div className="contact-module-info-cards contact-module-fade-in-up">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-module-info-card">
                  <div className="contact-module-info-icon">{info.icon}</div>
                  <div className="contact-module-info-content">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-module-info-link">
                        {info.content}
                      </a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                    {info.subcontent && (
                      <p className="contact-module-info-sub">
                        {info.subcontent}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Sosyal Medya */}
            <div className="contact-module-social-section contact-module-fade-in-up">
              <h3>Sosyal Medya</h3>
              <p className="contact-module-social-description">
                Bizi takip edin ve iletişime geçin
              </p>
              <div className="contact-module-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-module-social-link"
                    style={{ "--hover-color": social.color }}
                    title={social.name}
                  >
                    <span className="contact-module-social-icon">
                      {social.icon}
                    </span>
                    <span className="contact-module-social-name">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
