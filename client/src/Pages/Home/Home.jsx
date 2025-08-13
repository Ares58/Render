import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import NewsSection from "./Components/NewsSection/NewsSection";
import Carousel from "./Components/Carousel/Carousel";
import Benefits from "./Components/Benefits/Benefits";
import Footer from "/src/components/Footer/Footer.jsx";
import "./Home.css";

const AnaSayfa = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollTop(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Navbar />
      <HomeHeader />
      <NewsSection />
      <Carousel />
      <Benefits />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Sayfa başına dön"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default AnaSayfa;
