import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar"; // Navbar'ı import et
import Bg1 from "../../img/bg1.jpg";
import "./AnaSayfa.css";
import { Carousel } from "../../components/Carousel/Carousel";

const EgeSavtek = () => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Refs for DOM elements
  const heroBgRef = useRef(null);
  const carouselRef = useRef(null);

  // Hero parallax effect
  useEffect(() => {
    const handleScroll = () => {
      // Hero parallax effect
      if (heroBgRef.current) {
        const scrollY = window.scrollY;
        heroBgRef.current.style.transform = `translateY(${
          scrollY * 0.3
        }px) scale(${1 + scrollY * 0.0005})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel effect
  useEffect(() => {
    const updateCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          currentSlide * (100 / 3)
        }%)`;
      }
    };

    updateCarousel();
  }, [currentSlide]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const header = entry.target.querySelector(".section-header");
          if (header) {
            header.classList.add("animate-in");
          }
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll("[data-animate]");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Create particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      );
    }
    return particles;
  };

  const newsCards = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ),
      title: "Teknoloji Haberleri",
      description: "En son savunma teknolojileri haberleri ve gelişmeler.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
        </svg>
      ),
      title: "İnovasyon Merkezi",
      description: "Yenilikçi projeler ve teknolojik çözümler geliştiriyoruz.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12,22s8-4 8-10V5l-8-3-8,3v7c0,6 8,10 8,10z" />
        </svg>
      ),
      title: "Güvenlik Teknolojileri",
      description: "Milli güvenlik alanında öncü teknolojiler üretiyoruz.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21,15 16,10 5,21" />
        </svg>
      ),
      title: "Proje Galerisi",
      description: "Geliştirdiğimiz projelerin görsel sunumları.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="23,7 16,12 23,17 23,7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      title: "Video İçerikler",
      description: "Projelerimizin tanıtım videoları ve test süreçleri.",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12,2 2,7 12,12 22,7 12,2" />
          <polyline points="2,17 12,22 22,17" />
          <polyline points="2,12 12,17 22,12" />
        </svg>
      ),
      title: "Katmanlı Sistemler",
      description: "Karmaşık sistemlerin basit çözümlerle entegrasyonu.",
    },
  ];

  // Benefit items data
  const benefitItems = [
    "Türkiye'nin önde gelen savunma teknolojileri topluluğu",
    "Öğrenci odaklı araştırma ve geliştirme projeleri",
    "Milli teknoloji geliştirme vizyonu ile çalışıyoruz",
    "Uluslararası yarışmalarda başarılı sonuçlar",
    "Deneyimli akademisyen ve sektör uzmanlarıyla çalışma",
    "Yenilikçi teknolojiler ile geleceği şekillendiriyoruz",
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-particles">{renderParticles()}</div>

        <img
          className="hero-bg"
          src={Bg1}
          ref={heroBgRef}
          alt="Arka Plan Resmi"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">EGE</span>
              <span className="title-line title-gradient">SAVTEK</span>
              <span className="title-line">TOPLULUĞU</span>
            </h1>

            <p className="hero-description">
              Geleceğin savunma teknolojilerini bugünden geliştiren öğrenci
              topluluğu
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="5,3 19,12 5,21 5,3" />
                </svg>
                <span>Projelerimizi Keşfet</span>
                <div className="btn-shine"></div>
              </button>
              <button className="btn-secondary">
                <span>Hakkımızda</span>
                <svg
                  className="arrow-icon"
                  width="20"
                  height="20"
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
        </div>

        <div className="scroll-indicator">
          <div className="scroll-text">Scroll</div>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
              <span>Haberler</span>
            </div>
            <h2 className="section-title">Bizden Haberler</h2>
            <p className="section-description">
              Savunma teknolojileri alanındaki en güncel gelişmeler ve
              projelerimizden haberler
            </p>
          </div>

          <div className="news-carousel-container">
            <button
              className="carousel-nav carousel-nav-left"
              onClick={() =>
                setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
              }
              disabled={currentSlide === 0}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6" />
              </svg>
              <div className="nav-ripple"></div>
            </button>

            <div className="news-carousel-wrapper">
              <div className="news-carousel" ref={carouselRef}>
                {newsCards.map((card, index) => (
                  <div className="news-card" key={index}>
                    <div className="card-glow"></div>
                    <div className="feature-icon-wrapper">
                      <div className="feature-icon">{card.icon}</div>
                      <div className="icon-bg"></div>
                    </div>
                    <h3 className="feature-title">{card.title}</h3>
                    <p className="feature-description">{card.description}</p>
                    <div className="card-border"></div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-nav carousel-nav-right"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev < totalSlides - 1 ? prev + 1 : prev
                )
              }
              disabled={currentSlide >= totalSlides - 1}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
              <div className="nav-ripple"></div>
            </button>
          </div>

          <div className="carousel-indicators">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="examples" data-animate>
        <Carousel />
      </section>

      {/* Benefits Section */}
      <section id="about" className="benefits" data-animate>
        <div className="container">
          <div className="benefits-content">
            <div className="section-header">
              <div className="section-badge">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Hakkımızda</span>
              </div>
              <h2 className="section-title">Biz Kimiz</h2>
              <p className="section-description">
                Temel olarak proje geliştiren bir öğrenci topluluğu
              </p>
            </div>

            <div className="benefits-grid">
              {benefitItems.map((item, index) => (
                <div className="benefit-item" key={index}>
                  <div className="benefit-check">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <span className="benefit-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-title">
              Ege'nin en büyük savunma teknolojileri topluluğu.
            </div>
            <p className="footer-description">
              Sizleri de yanımızda görmek isteriz
            </p>
            <div className="footer-links">
              <a href="#">Gizlilik</a>
              <a href="#">Kullanım Koşulları</a>
              <a href="#">Destek</a>
              <a href="#">İletişim</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EgeSavtek;
