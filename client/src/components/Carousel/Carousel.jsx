import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel.css";

import image1 from "../../img/bg1.jpg";
import image2 from "../../img/bg2.jpg";
import image3 from "../../img/bg3.jpg";
import image4 from "../../img/bg4.jpg";
import image5 from "../../img/bg5.jpg";

// Tüm resimleri kullanıyoruz
const slidess = [
  { name: "ROV Projesi", src: image1, ozet: "İnsansız otonom su altı robotu " },
  { name: "Bars UAV", src: image2, ozet: "insansız havaaracı" },
  {
    name: "Hava Savunma Sistemi",
    src: image3,
    ozet: "Otonom hava savunma sistemi",
  },
  {
    name: "Robo Taksi",
    src: image4,
    ozet: "Otonom sürüş özelliğine sahip kara aracı",
  },
  {
    name: "İDA",
    src: image5,
    ozet: "İnsansız deniz üstü aracı",
  },
];

export const Carousel = () => {
  return (
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
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>Öne Çıkanlar</span>
        </div>
        <h2 className="section-title">Projelerimizi Keşfedin</h2>
        <p className="section-description">
          Savunma teknolojileri alanındaki başarılı projelerimiz
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
          delay: 3000, // 3 saniye bekle
          disableOnInteraction: false, // Kullanıcı etkileşimi sonrası otomatiği durdurma
          pauseOnMouseEnter: true, // Mouse üzerine geldiğinde duraklat
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
          // Mobil cihazlar için
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Tablet için
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Desktop için
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
              <h2 className="slide-title">{slide.name}</h2>
              <p className="slide-description">{slide.ozet}</p>
              <a className="slide-link">Keşfet</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
