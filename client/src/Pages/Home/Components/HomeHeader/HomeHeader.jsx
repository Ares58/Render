import React, { useEffect, useRef } from "react";
import Bg1 from "./image/bg1.jpg";
import "./HomeHeader.css";

// Constants
const HOME_HEADER_PARALLAX_SPEED = 0.3;
const HOME_HEADER_SCALE_FACTOR = 0.0005;
const HOME_HEADER_THROTTLE_DELAY = 8; // 120fps

// Utility function for throttling
const homeHeaderThrottle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default function HomeHeader() {
  const homeHeaderBgRef = useRef(null);

  // Navigation handlers
  const handleHomeHeaderProjectsClick = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("Projects section not found");
    }
  };

  const handleHomeHeaderAboutClick = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("About section not found");
    }
  };

  // Keyboard event handlers
  const handleHomeHeaderProjectsKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleHomeHeaderProjectsClick();
    }
  };

  const handleHomeHeaderAboutKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleHomeHeaderAboutClick();
    }
  };

  // Home header parallax effect with throttling
  useEffect(() => {
    const handleHomeHeaderScroll = homeHeaderThrottle(() => {
      if (homeHeaderBgRef.current) {
        const scrollY = window.scrollY;
        const translateY = scrollY * HOME_HEADER_PARALLAX_SPEED;
        const scale = 1 + scrollY * HOME_HEADER_SCALE_FACTOR;

        homeHeaderBgRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }
    }, HOME_HEADER_THROTTLE_DELAY);

    window.addEventListener("scroll", handleHomeHeaderScroll, {
      passive: true,
    });

    // Initial call
    handleHomeHeaderScroll();

    return () => window.removeEventListener("scroll", handleHomeHeaderScroll);
  }, []);

  return (
    <section className="home-header-section" role="banner">
      <img
        className="home-header-background"
        src={Bg1}
        ref={homeHeaderBgRef}
        alt="Ege Savtek topluluğu arka plan görseli"
        loading="eager"
        decoding="async"
      />
      <div className="home-header-overlay" aria-hidden="true"></div>

      <div className="container home-header-content-wrapper">
        <div className="home-header-text-container">
          <h1 className="home-header-main-title">
            <span className="home-header-title-line">EGE</span>
            <span className="home-header-title-line home-header-gradient-text">
              SAVTEK
            </span>
            <span className="home-header-title-line">TOPLULUĞU</span>
          </h1>

          <p className="home-header-description">
            Geleceğin savunma teknolojilerini bugünden geliştiren öğrenci
            topluluğu
          </p>

          <div className="home-header-buttons-container">
            <button
              className="home-header-btn-primary"
              onClick={handleHomeHeaderProjectsClick}
              onKeyDown={handleHomeHeaderProjectsKeyDown}
              aria-label="Navigate to projects section"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <polygon points="5,3 19,12 5,21 5,3" />
              </svg>
              <span>Projelerimizi Keşfet</span>
              <div className="home-header-btn-shine" aria-hidden="true"></div>
            </button>

            <button
              className="home-header-btn-secondary"
              onClick={handleHomeHeaderAboutClick}
              onKeyDown={handleHomeHeaderAboutKeyDown}
              aria-label="Navigate to about section"
            >
              <span>Hakkımızda</span>
              <svg
                className="home-header-arrow-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="home-header-scroll-indicator"
        aria-label="Scroll down for more content"
      >
        <div className="home-header-scroll-text" aria-hidden="true">
          Scroll
        </div>
        <div className="home-header-scroll-line" aria-hidden="true"></div>
      </div>
    </section>
  );
}
