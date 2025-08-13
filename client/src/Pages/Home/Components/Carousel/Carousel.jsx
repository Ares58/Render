import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel.css";

import image1 from "./img/bg1.jpg";
import image2 from "./img/bg2.jpg";
import image3 from "./img/bg3.jpg";
import image4 from "./img/bg4.jpg";
import image5 from "./img/bg5.jpg";

// Projeler - İlerleme durumları ile birlikte
const slidess = [
  {
    name: "ROV Projesi",
    src: image1,
    ozet: "İnsansız otonom su altı robotu geliştirme projesi",
    developmentProgress: 85,
    testingProgress: 62,
    developmentLabel: "Geliştirme",
    testingLabel: "Test & Doğrulama",
  },
  {
    name: "Bars UAV",
    src: image2,
    ozet: "İnsansız hava aracı tasarım ve üretim projesi",
    developmentProgress: 92,
    testingProgress: 78,
    developmentLabel: "Tasarım & Üretim",
    testingLabel: "Uçuş Testleri",
  },
  {
    name: "Hava Savunma Sistemi",
    src: image3,
    ozet: "Otonom hava savunma ve radar sistemi projesi",
    developmentProgress: 75,
    testingProgress: 45,
    developmentLabel: "Sistem Geliştirme",
    testingLabel: "Entegrasyon",
  },
  {
    name: "Robo Taksi",
    src: image4,
    ozet: "Otonom sürüş teknolojisi ile akıllı taşıt projesi",
    developmentProgress: 68,
    testingProgress: 40,
    developmentLabel: "AI Geliştirme",
    testingLabel: "Yol Testleri",
  },
  {
    name: "İDA",
    src: image5,
    ozet: "İnsansız deniz üstü aracı ve navigasyon sistemi",
    developmentProgress: 55,
    testingProgress: 30,
    developmentLabel: "Prototip",
    testingLabel: "Deniz Testleri",
  },
];

export default function Carousel() {
  return (
    <div className="examples" data-animate>
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
              <path d="M9 11H7l5-8 5 8h-2v7h-6v-7z" />
            </svg>
            <span>Proje Durumu</span>
          </div>
          <h2 className="section-title">
            Projelerimizin <span className="title-gradient">İlerleyişi</span>
          </h2>
          <p className="section-description">
            Savunma teknolojileri projelerimizin güncel gelişim durumu
          </p>
        </div>

        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          speed={600}
          effect="coverflow"
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {slidess.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <div className="slide-content">
                <div className="slide-header">
                  <h2 className="slide-title">{slide.name}</h2>
                  <p className="slide-description">{slide.ozet}</p>
                </div>

                <div className="progress-section">
                  {/* İlk Progress Bar */}
                  <div className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">
                        {slide.developmentLabel}
                      </span>
                      <span className="progress-percentage">
                        {slide.developmentProgress}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill development"
                        style={{ width: `${slide.developmentProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* İkinci Progress Bar */}
                  <div className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">
                        {slide.testingLabel}
                      </span>
                      <span className="progress-percentage">
                        {slide.testingProgress}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill testing"
                        style={{ width: `${slide.testingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <a className="slide-link">Detayları Gör</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
