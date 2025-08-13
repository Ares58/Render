import React, { useState, useEffect, useRef } from "react";
import "./NewsSection.css";

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  // MongoDB'den haberleri çek
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/blogs`
        );
        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }
        const data = await response.json();

        // API'den gelen veriyi bileşenin beklediği formata dönüştür
        const formattedData = data.map((blog) => ({
          id: blog._id,
          category: blog.category || "Genel",
          title: blog.title,
          description: blog.excerpt || blog.content.substring(0, 150) + "...",
          date: new Date(blog.createdAt).toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          readTime: `${Math.ceil(blog.content.length / 500)} dk okuma`,
          image: blog.image || null, // Varsayılan resmi kaldırdık, null bıraktık
          tags: blog.tags || [],
          author: blog.author || "Yazar Belirtilmemiş",
        }));

        setNewsData(formattedData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.error("Haberler yüklenirken hata:", err);
      }
    };

    fetchNews();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && newsData.length > 0) {
      intervalRef.current = setInterval(() => {
        setSelectedNews((prev) => (prev + 1) % newsData.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, newsData.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [newsData]); // newsData bağımlılık olarak eklendi

  const handleNewsSelect = (index) => {
    setSelectedNews(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual selection
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (isLoading) {
    return (
      <section className="news-section" ref={sectionRef}>
        <div className="news-container">
          <div className="loading-message">Haberler yükleniyor...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="news-section" ref={sectionRef}>
        <div className="news-container">
          <div className="error-message">Hata: {error}</div>
        </div>
      </section>
    );
  }

  if (newsData.length === 0) {
    return (
      <section className="news-section" ref={sectionRef}>
        <div className="news-container">
          <div className="no-news-message">Gösterilecek haber bulunamadı.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="news-section" ref={sectionRef}>
      <div className="news-container">
        <div className="news-header animate-on-scroll">
          <div className="section-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            <span>Haberler</span>
          </div>
          <h2 className="section-title">
            Bizden <span className="title-gradient">Haberler</span>
          </h2>
          <p className="section-description">
            Savunma teknolojileri alanındaki en güncel gelişmeler ve
            projelerimizden haberler
          </p>
        </div>

        <div className="news-content">
          <div className="main-news animate-on-scroll">
            <div className="news-image-container">
              {newsData[selectedNews].image ? (
                <img
                  src={newsData[selectedNews].image}
                  alt={newsData[selectedNews].title}
                  className="news-image"
                />
              ) : (
                <div className="news-image-placeholder">
                  <div className="placeholder-content">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                    <span>Görsel Yok</span>
                  </div>
                </div>
              )}
              <div className="image-overlay">
                <div className="category-badge">
                  {newsData[selectedNews].category}
                </div>
                <div className="news-tags">
                  {newsData[selectedNews].tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="gradient-overlay"></div>
            </div>

            <div className="news-details">
              <div className="news-meta">
                <span className="news-date">{newsData[selectedNews].date}</span>
                <span className="news-divider">•</span>
                <span className="read-time">
                  {newsData[selectedNews].readTime}
                </span>
                <span className="news-divider">•</span>
                <span className="author">{newsData[selectedNews].author}</span>
              </div>

              <h3 className="news-title">{newsData[selectedNews].title}</h3>
              <p className="news-description">
                {newsData[selectedNews].description}
              </p>

              <button className="read-more-btn">
                <span>Devamını Oku</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </button>
            </div>
          </div>

          <div className="news-sidebar animate-on-scroll">
            <div className="news-list-header">
              <h4>Diğer Haberler</h4>
              <button
                className={`auto-play-toggle ${
                  isAutoPlaying ? "playing" : "paused"
                }`}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                title={
                  isAutoPlaying
                    ? "Otomatik geçişi durdur"
                    : "Otomatik geçişi başlat"
                }
              >
                {isAutoPlaying ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>
            </div>

            <div className="news-list">
              {newsData.map((news, index) => (
                <div
                  key={news.id}
                  className={`news-item ${
                    index === selectedNews ? "active" : ""
                  }`}
                  onClick={() => handleNewsSelect(index)}
                >
                  <div className="news-item-image">
                    {news.image ? (
                      <img src={news.image} alt={news.title} />
                    ) : (
                      <div className="news-item-placeholder">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21,15 16,10 5,21" />
                        </svg>
                      </div>
                    )}
                    {news.image && (
                      <div className="item-category">{news.category}</div>
                    )}
                  </div>

                  <div className="news-item-content">
                    <h5 className="news-item-title">{news.title}</h5>
                    <div className="news-item-meta">
                      <span>{news.date}</span>
                      <span className="item-read-time">{news.readTime}</span>
                    </div>
                    <div className="selection-indicator">
                      <div className="indicator-fill"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="news-navigation animate-on-scroll">
          <div className="progress-indicators">
            {newsData.map((_, index) => (
              <button
                key={index}
                className={`progress-dot ${
                  index === selectedNews ? "active" : ""
                }`}
                onClick={() => handleNewsSelect(index)}
              >
                <div className="dot-progress"></div>
              </button>
            ))}
          </div>

          <div className="nav-buttons">
            <button
              className="nav-btn prev"
              onClick={() =>
                handleNewsSelect(
                  selectedNews > 0 ? selectedNews - 1 : newsData.length - 1
                )
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>
            <button
              className="nav-btn next"
              onClick={() =>
                handleNewsSelect((selectedNews + 1) % newsData.length)
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
