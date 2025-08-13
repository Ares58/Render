import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Projeler.css";

import image1 from "./img/bg1.jpg";
import image2 from "./img/bg2.jpg";
import image3 from "./img/bg3.jpg";
import image4 from "./img/bg4.jpg";
import image5 from "./img/bg5.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const projectsData = [
  {
    id: 1,
    name: "ROV Projesi",
    src: image1,
    ozet: "İnsansız otonom su altı robotu geliştirme projesi",
    detailedDescription:
      "Derin deniz keşfi ve endüstriyel uygulamalar için geliştirilmiş yeni nesil ROV teknolojisi. Gelişmiş sensör sistemleri ve yapay zeka entegrasyonu ile donatılmış.",
    developmentProgress: 85,
    testingProgress: 62,
    developmentLabel: "Geliştirme",
    testingLabel: "Test & Doğrulama",
    category: "Deniz Teknolojileri",
    startDate: "2023",
    team: "12 Kişi",
    technologies: [
      "AI/ML",
      "Robotik",
      "Suya Dayanıklı Sistemler",
      "Sensör Teknolojisi",
    ],
    status: "Geliştirme Aşamasında",
  },
  {
    id: 2,
    name: "Bars UAV",
    src: image2,
    ozet: "İnsansız hava aracı tasarım ve üretim projesi",
    detailedDescription:
      "Stratejik gözetleme ve keşif misyonları için tasarlanmış yeni nesil insansız hava aracı. Uzun menzil ve yüksek dayanıklılık özellikleri.",
    developmentProgress: 92,
    testingProgress: 78,
    developmentLabel: "Tasarım & Üretim",
    testingLabel: "Uçuş Testleri",
    category: "Hava Teknolojileri",
    startDate: "2022",
    team: "18 Kişi",
    technologies: ["Aerodinamik", "Kompozit Malzeme", "Autopilot", "Telemetri"],
    status: "Test Aşamasında",
  },
  {
    id: 3,
    name: "Hava Savunma Sistemi",
    src: image3,
    ozet: "Otonom hava savunma ve radar sistemi projesi",
    detailedDescription:
      "Gelişmiş radar teknolojisi ve yapay zeka destekli hedef tespiti ile donatılmış entegre hava savunma sistemi. Çok katmanlı koruma sağlar.",
    developmentProgress: 75,
    testingProgress: 45,
    developmentLabel: "Sistem Geliştirme",
    testingLabel: "Entegrasyon",
    category: "Savunma Sistemleri",
    startDate: "2023",
    team: "25 Kişi",
    technologies: [
      "Radar",
      "Füze Teknolojisi",
      "AI Hedef Tespiti",
      "Entegre Sistemler",
    ],
    status: "Geliştirme Aşamasında",
  },
  {
    id: 4,
    name: "Robo Taksi",
    src: image4,
    ozet: "Otonom sürüş teknolojisi ile akıllı taşıt projesi",
    detailedDescription:
      "Şehir içi ulaşım için geliştirilmiş tam otonom sürüş kabiliyetine sahip elektrikli araç. Gelişmiş sensör füzyonu ve AI algoritmaları.",
    developmentProgress: 68,
    testingProgress: 40,
    developmentLabel: "AI Geliştirme",
    testingLabel: "Yol Testleri",
    category: "Otonom Araçlar",
    startDate: "2024",
    team: "20 Kişi",
    technologies: [
      "Computer Vision",
      "LiDAR",
      "Machine Learning",
      "Sensör Füzyonu",
    ],
    status: "Geliştirme Aşamasında",
  },
  {
    id: 5,
    name: "İDA",
    src: image5,
    ozet: "İnsansız deniz üstü aracı ve navigasyon sistemi",
    detailedDescription:
      "Deniz üstü gözetleme ve keşif misyonları için tasarlanmış otonom deniz aracı. GPS bağımsız navigasyon ve uzun mesafe kabiliyeti.",
    developmentProgress: 55,
    testingProgress: 30,
    developmentLabel: "Prototip",
    testingLabel: "Deniz Testleri",
    category: "Deniz Teknolojileri",
    startDate: "2024",
    team: "15 Kişi",
    technologies: [
      "GPS-Free Navigation",
      "Maritime Systems",
      "Remote Control",
      "Weather Resistance",
    ],
    status: "Prototip Aşamasında",
  },
];

const Projeler = () => {
  const [filter, setFilter] = useState("Tümü");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const navigate = useNavigate();

  const categories = [
    "Tümü",
    "Deniz Teknolojileri",
    "Hava Teknolojileri",
    "Savunma Sistemleri",
    "Otonom Araçlar",
  ];

  useEffect(() => {
    if (filter === "Tümü") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === filter)
      );
    }
  }, [filter]);

  const getStatusColor = (progress1, progress2) => {
    const avgProgress = (progress1 + progress2) / 2;
    if (avgProgress >= 80) return "status-success";
    if (avgProgress >= 60) return "status-warning";
    return "status-info";
  };

  const handleProjectClick = (projectId) => {
    navigate(`/proje/${projectId}`);
  };

  return (
    <div className="projeler-container">
      <Navbar />
      {/* Header Section */}
      <div className="projeler-header">
        <div className="container">
          <div className="header-content">
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
              <span>Portfolio</span>
            </div>
            <h1 className="main-title">
              Tüm <span className="title-gradient">Projelerimiz</span>
            </h1>
            <p className="main-description">
              Savunma teknolojileri alanında geliştirdiğimiz inovatif çözümler
              ve projelerimizin detayları
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="project-image">
                  <img src={project.src} alt={project.name} />
                  <div className="image-overlay">
                    <div
                      className={`status-badge ${getStatusColor(
                        project.developmentProgress,
                        project.testingProgress
                      )}`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.name}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <p className="project-description">{project.ozet}</p>

                  <div className="project-stats">
                    <div className="stat-item">
                      <span className="stat-label">Başlangıç</span>
                      <span className="stat-value">{project.startDate}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Ekip</span>
                      <span className="stat-value">{project.team}</span>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-item">
                      <div className="progress-header">
                        <span className="progress-label">
                          {project.developmentLabel}
                        </span>
                        <span className="progress-percentage">
                          {project.developmentProgress}%
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill development"
                          style={{ width: `${project.developmentProgress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress-item">
                      <div className="progress-header">
                        <span className="progress-label">
                          {project.testingLabel}
                        </span>
                        <span className="progress-percentage">
                          {project.testingProgress}%
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill testing"
                          style={{ width: `${project.testingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    className="project-btn primary"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    Detaylı İncele
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projeler;
