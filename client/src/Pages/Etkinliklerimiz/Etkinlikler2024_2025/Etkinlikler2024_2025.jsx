// Activities2024_2025.js
import React, { useState } from "react";
import "../Etkinlikler.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const Activities2024_2025 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const activities = [
    {
      id: 1,
      title: "Yıl Başı Oryantasyon Programı",
      date: "Eylül 2024",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
        "https://picsum.photos/400/250?random=4",
      ],
    },
    {
      id: 2,
      title: "Teknoloji Zirvesi 2024",
      date: "Ekim 2024",
      images: [
        "https://picsum.photos/400/250?random=5",
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
      ],
    },
    {
      id: 3,
      title: "Kariyer Günleri",
      date: "Kasım 2024",
      images: [
        "https://picsum.photos/400/250?random=8",
        "https://picsum.photos/400/250?random=9",
        "https://picsum.photos/400/250?random=10",
        "https://picsum.photos/400/250?random=11",
        "https://picsum.photos/400/250?random=12",
      ],
    },
    {
      id: 4,
      title: "Kış Kampı",
      date: "Aralık 2024",
      images: [
        "https://picsum.photos/400/250?random=13",
        "https://picsum.photos/400/250?random=14",
        "https://picsum.photos/400/250?random=15",
      ],
    },
    {
      id: 5,
      title: "Proje Sunumları",
      date: "Ocak 2025",
      images: [
        "https://picsum.photos/400/250?random=16",
        "https://picsum.photos/400/250?random=17",
        "https://picsum.photos/400/250?random=18",
        "https://picsum.photos/400/250?random=19",
      ],
    },
    {
      id: 6,
      title: "Mezuniyet Töreni",
      date: "Haziran 2025",
      images: [
        "https://picsum.photos/400/250?random=20",
        "https://picsum.photos/400/250?random=21",
        "https://picsum.photos/400/250?random=22",
        "https://picsum.photos/400/250?random=23",
        "https://picsum.photos/400/250?random=24",
        "https://picsum.photos/400/250?random=25",
      ],
    },
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e, imageSrc) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(imageSrc);
    }
  };

  const handleModalKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="activities-container">
        <div className="activities-header">
          <div className="blog-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            EGE SAVTEK Etkinlikleri
          </div>
          <h1 className="activities-title">2024-2025 Etkinlikleri</h1>
          <p className="activities-subtitle">
            Yıl boyunca gerçekleştirilen etkinliklerimizi keşfedin
          </p>
        </div>

        <div className="activities-content">
          {activities.map((activity) => (
            <section key={activity.id} className="activity-section">
              <div className="activity-header">
                <h2 className="activity-title">{activity.title}</h2>
                <span className="activity-date">{activity.date}</span>
              </div>

              <div className="activity-separator"></div>

              <div className="images-grid">
                {activity.images.map((image, index) => (
                  <div
                    key={index}
                    className="image-container"
                    onClick={() => openModal(image)}
                    onKeyDown={(e) => handleKeyDown(e, image)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${activity.title} resmi ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${activity.title} - ${index + 1}`}
                      className="activity-image"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <div className="zoom-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 21L16.514 16.506"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M8 10.5H13M10.5 8V13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="modal-overlay"
            onClick={closeModal}
            onKeyDown={handleModalKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Resim görüntüleyici"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Modalı kapat"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Büyütülmüş görünüm"
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Activities2024_2025;
