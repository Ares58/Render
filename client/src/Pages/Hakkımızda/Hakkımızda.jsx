import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Rocket,
  Users,
  Trophy,
  Target,
  Heart,
  Star,
  Award,
  Zap,
  Shield,
} from "lucide-react";
import "./Hakkımızda.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("mission");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "166+", label: "Aktif Üye" },
    { icon: Trophy, value: "20+", label: "TEKNOFEST Başarısı" },
    { icon: Rocket, value: "10+", label: "Proje Takımı" },
    { icon: Award, value: "2019", label: "Kuruluş Yılı" },
  ];

  const achievements = [
    {
      year: "2019",
      title: "TEKNOFEST Roket Yarışması",
      description: "571 takım arasında ilk 15'e girerek finalist",
      category: "Roket",
    },
    {
      year: "2020",
      title: "İnsansız Su Altı Sistemleri",
      description: "220 takım arasından 6. sırada finale kalma",
      category: "ROV",
    },
    {
      year: "2021",
      title: "En İyi Takım Ruhu Ödülü",
      description: "TEKNOFEST Su Altı Sistemleri yarışmasında",
      category: "ROV",
    },
    {
      year: "2023",
      title: "Jet Motor Tasarımı Yarışması",
      description: "Türkiye İkinciliği ve En İyi Sunum ödülü",
      category: "Jet Motor",
    },
  ];

  const teams = [
    { name: "Ege Roket Takımı", focus: "Yüksek İrtifa Roketi" },
    { name: "Ege ROV Takımı", focus: "İnsansız Su Altı Sistemleri" },
    { name: "Ege İHA Takımı", focus: "İnsansız Hava Araçları" },
    { name: "Ege İKA Takımı", focus: "İnsansız Kara Araçları" },
    { name: "Ege Vortex Takımı", focus: "Savaşan İHA" },
    { name: "Gökçen Jet Motor Takımı", focus: "Jet Motor Tasarımı" },
  ];

  return (
    <div className="about-page">
      <Navbar />
      {/* Hero Section */}
      <section
        className={`about-page__hero ${
          isVisible ? "about-page__hero--visible" : ""
        }`}
      >
        <div className="about-page__hero-content">
          <div className="about-page__hero-badge">
            <Shield className="about-page__badge-icon" />
            <span>Ege Üniversitesi</span>
          </div>
          <h1 className="about-page__hero-title">
            Ege Savunma Teknolojileri
            <span className="about-page__gradient-text">Topluluğu</span>
          </h1>
          <p className="about-page__hero-subtitle">
            "Birlikte Üretmek, Birlikte Gelişmek İçin"
          </p>
          <div className="about-page__hero-description">
            <p>
              Ege Üniversitesi bünyesinde savunma sanayi alanında faaliyet
              gösteren öğrenci topluluğu olarak, 2020-2021 akademik dönemi
              itibarıyla 166 üyesi ile teknoloji ve inovasyon alanında ülkemize
              değer katmaya devam ediyoruz.
            </p>
          </div>
        </div>
        <div className="about-page__floating-elements">
          <div className="about-page__floating-card about-page__floating-card--1">
            <Rocket className="about-page__floating-icon" />
          </div>
          <div className="about-page__floating-card about-page__floating-card--2">
            <Zap className="about-page__floating-icon" />
          </div>
          <div className="about-page__floating-card about-page__floating-card--3">
            <Star className="about-page__floating-icon" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-page__stats">
        <div className="about-page__stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about-page__stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="about-page__stat-icon">
                <stat.icon />
              </div>
              <div className="stat-content">
                <div className="about-page__stat-value">{stat.value}</div>
                <div className="about-page__stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="about-page__content">
        <div className="about-page__tabs">
          {[
            { id: "mission", label: "Misyon & Vizyon", icon: Target },
            { id: "organization", label: "Organizasyon", icon: Users },
            { id: "achievements", label: "Başarılarımız", icon: Trophy },
            { id: "teams", label: "Takımlarımız", icon: Rocket },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`about-page__tab-button ${
                activeSection === tab.id ? "about-page__tab-button--active" : ""
              }`}
              onClick={() => setActiveSection(tab.id)}
            >
              <tab.icon className="about-page__tab-icon" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="about-page__section-content">
          {activeSection === "mission" && (
            <div className="mission-content">
              <div className="about-page__mission-grid">
                <div className="about-page__mission-card">
                  <div className="about-page__mission-header">
                    <Target className="about-page__mission-icon" />
                    <h3>Misyonumuz</h3>
                  </div>
                  <p>
                    Üniversite öğrencilerimize, savunma teknolojileri alanında
                    farkındalık ve deneyim kazandırmak. Savunma teknolojileri
                    alanında farkındalık oluştururken ulusal ve uluslararası
                    yarışmalarda Ege Üniversitesi'ni temsil etmek ve bu alanda
                    üniversite öğrencilerinin aktifliğini arttırmaktır.
                  </p>
                </div>
                <div className="about-page__mission-card">
                  <div className="about-page__mission-header">
                    <Heart className="about-page__mission-icon" />
                    <h3>Vizyonumuz</h3>
                  </div>
                  <p>
                    Üniversite öğrencilerimizin Türk savunma sanayiinde aranan
                    mühendisler olmasını sağlama vizyonu ile hareket ederek,
                    savunma sanayi alanında yetkinleşmiş ve ülkemizin teknoloji
                    hamlesine katkı sağlayan bireyler yetiştirmek.
                  </p>
                </div>
              </div>
              <div className="about-page__motto-section">
                <div className="about-page__motto-card">
                  <h3>Değerlerimiz</h3>
                  <ul>
                    <li>
                      <strong>İşbirliği:</strong> "Birlikte Üretmek, Birlikte
                      Gelişmek İçin"
                    </li>
                    <li>
                      <strong>İnovasyon:</strong> Savunma teknolojilerinde çığır
                      açan projeler
                    </li>
                    <li>
                      <strong>Mükemmellik:</strong> Her projede en yüksek
                      standartları hedefleme
                    </li>
                    <li>
                      <strong>Vatan Sevgisi:</strong> Ülkemizin savunma gücüne
                      katkı sağlama
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === "organization" && (
            <div className="organization-content">
              <div className="about-page__org-intro">
                <h3>Organizasyon Yapımız</h3>
                <p>
                  Topluluğumuz Ege SAVTEK, kurumsal ve teknik olmak üzere iki
                  ana koordinasyon ekibinden oluşmaktadır.
                </p>
              </div>
              <div className="about-page__org-structure">
                <div className="org-branch">
                  <h4>Kurumsal Ekip</h4>
                  <div className="org-units">
                    <div className="unit-card">
                      <h5>Yayın Birimi</h5>
                      <ul>
                        <li>Blog Çalışma Grubu</li>
                        <li>Dergi Çalışma Grubu</li>
                        <li>Grafik Tasarım Çalışma Grubu</li>
                        <li>Sosyal Medya Çalışma Grubu</li>
                      </ul>
                    </div>
                    <div className="unit-card">
                      <h5>Etkinlik Birimi</h5>
                      <ul>
                        <li>Sponsorluk Çalışma Grubu</li>
                        <li>Organizasyon Çalışma Grubu</li>
                        <li>Eğitim Çalışma Grubu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="org-branch">
                  <h4>Teknik Ekip</h4>
                  <div className="org-units">
                    <div className="unit-card">
                      <h5>Mekanik Birimi</h5>
                      <ul>
                        <li>Başlangıç Çalışma Grubu</li>
                        <li>İleri Düzey Çalışma Grubu</li>
                      </ul>
                    </div>
                    <div className="unit-card">
                      <h5>Elektronik Birimi</h5>
                      <ul>
                        <li>Yazılım Çalışma Grubu</li>
                        <li>Donanım Çalışma Grubu</li>
                      </ul>
                    </div>
                    <div className="unit-card">
                      <h5>Yazılım Birimi</h5>
                      <ul>
                        <li>Yapay Zeka Çalışma Grubu</li>
                        <li>Web Geliştirme Çalışma Grubu</li>
                        <li>Oyun Geliştirme Çalışma Grubu</li>
                        <li>Mobil Uygulama Geliştirme Çalışma Grubu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "achievements" && (
            <div className="achievements-content">
              <h3>Başarı Hikayelerimiz</h3>
              <div className="achievements-timeline">
                {achievements.map((achievement, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <Award className="timeline-icon" />
                    </div>
                    <div className="timeline-content">
                      <div className="achievement-year">{achievement.year}</div>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      <span className="achievement-category">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="impact-section">
                <h4>Etki Alanlarımız</h4>
                <div className="impact-grid">
                  <div className="impact-card">
                    <h5>Hava</h5>
                    <p>İHA, Helikopter ve Jet Motor projeleri</p>
                  </div>
                  <div className="impact-card">
                    <h5>Deniz</h5>
                    <p>ROV ve İnsansız Deniz Araçları</p>
                  </div>
                  <div className="impact-card">
                    <h5>Kara</h5>
                    <p>İKA ve Robotaksi projeleri</p>
                  </div>
                  <div className="impact-card">
                    <h5>Uzay</h5>
                    <p>Yüksek İrtifa Roket sistemleri</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "teams" && (
            <div className="teams-content">
              <h3>Proje Takımlarımız</h3>
              <p>
                Ege SAVTEK TEKNOFEST Takımları topluluğumuzun alt takımlarıdır.
                Her takım kendi alanında uzmanlaşarak TEKNOFEST ve diğer
                yarışmalarda ülkemizi temsil etmektedir.
              </p>
              <div className="teams-grid">
                {teams.map((team, index) => (
                  <div key={index} className="team-card">
                    <div className="team-icon">
                      <Rocket />
                    </div>
                    <h4>{team.name}</h4>
                    <p>{team.focus}</p>
                    <div className="team-status">
                      <span className="status-indicator active"></span>
                      Aktif
                    </div>
                  </div>
                ))}
              </div>
              <div className="activities-section">
                <h4>Faaliyetlerimiz</h4>
                <div className="activities-list">
                  <div className="activity-item">
                    <Star className="activity-icon" />
                    <div>
                      <h5>Eğitim ve Seminerler</h5>
                      <p>
                        Teknik eğitimler ve sektör uzmanlarıyla tecrübe
                        sohbetleri
                      </p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <Users className="activity-icon" />
                    <div>
                      <h5>Teknik Geziler</h5>
                      <p>
                        Savunma sanayi firmalarına düzenlenen teknik geziler
                      </p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <Trophy className="activity-icon" />
                    <div>
                      <h5>Yarışma Katılımları</h5>
                      <p>
                        TEKNOFEST ve ulusal/uluslararası teknoloji yarışmaları
                      </p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <Target className="activity-icon" />
                    <div>
                      <h5>SAVTEK Günleri</h5>
                      <p>Öğrenci-firma iş birliği etkinlikleri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
