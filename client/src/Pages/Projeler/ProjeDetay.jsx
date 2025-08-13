import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjeDetay.css";

// Resimleri import et
import image1 from "./img/bg1.jpg";
import image2 from "./img/bg2.jpg";
import image3 from "./img/bg3.jpg";
import image4 from "./img/bg4.jpg";
import image5 from "./img/bg5.jpg";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// Örnek proje verileri (gerçek uygulamada API'den gelecek)
const projectsDetailData = {
  1: {
    id: 1,
    name: "ROV Projesi",
    category: "Deniz Teknolojileri",
    status: "Geliştirme Aşamasında",
    startDate: "2023",
    endDate: "2024",
    budget: "2.5M ₺",
    client: "Deniz Kuvvetleri",
    team: [
      { name: "Dr. Ahmet Yılmaz", role: "Proje Yöneticisi", avatar: "👨‍💼" },
      { name: "Mühendis Fatma Demir", role: "Robotik Uzmanı", avatar: "👩‍🔬" },
      { name: "Tekniker Ali Kaya", role: "Sistem Tasarımcısı", avatar: "👨‍💻" },
      { name: "Dr. Zeynep Öztürk", role: "AI Uzmanı", avatar: "👩‍🔬" },
    ],
    images: {
      main: image1,
      gallery: [image1, image2, image3, image4, image5],
      development: [image1, image2, image3],
    },
    description:
      "İnsansız otonom su altı robotu geliştirme projesi. Derin deniz keşfi ve endüstriyel uygulamalar için geliştirilmiş yeni nesil ROV teknolojisi.",
    detailedInfo: {
      overview:
        "Bu proje, Türkiye'nin denizcilik sektöründeki teknolojik kabiliyetlerini artırmak amacıyla başlatılmıştır. ROV sistemi, 500 metre derinliğe kadar çalışabilme kabiliyetine sahiptir.",
      objectives: [
        "Otonom navigasyon sistemi geliştirme",
        "Derin deniz keşif kabiliyeti kazandırma",
        "Gerçek zamanlı veri toplama ve analiz",
        "Çevresel etki değerlendirmesi yapma",
      ],
      technologies: [
        "Artificial Intelligence",
        "Computer Vision",
        "Underwater Robotics",
        "Pressure Resistant Design",
        "Real-time Communication",
        "Sonar Technology",
      ],
      milestones: [
        {
          date: "2023-03",
          title: "Proje Başlatma",
          status: "completed",
          description: "İlk tasarım ve planlama aşaması tamamlandı",
        },
        {
          date: "2023-06",
          title: "Prototip Geliştirme",
          status: "completed",
          description: "İlk prototip başarıyla geliştirildi",
        },
        {
          date: "2023-09",
          title: "Test Aşaması",
          status: "completed",
          description: "Havuz testleri başarıyla tamamlandı",
        },
        {
          date: "2024-01",
          title: "Deniz Testleri",
          status: "in-progress",
          description: "Açık deniz testleri devam ediyor",
        },
        {
          date: "2024-06",
          title: "Final Teslimat",
          status: "pending",
          description: "Nihai ürün teslimi planlanıyor",
        },
      ],
    },
    progress: {
      overall: 75,
      development: 85,
      testing: 62,
      documentation: 45,
    },
    specifications: {
      "Maksimum Derinlik": "500m",
      "Çalışma Süresi": "8 saat",
      "Kamera Çözünürlüğü": "4K",
      Manevrabilite: "6-DOF",
      "İletişim Menzili": "1000m",
    },
  },
  2: {
    id: 2,
    name: "Bars UAV",
    category: "Hava Teknolojileri",
    status: "Test Aşamasında",
    startDate: "2022",
    endDate: "2024",
    budget: "3.8M ₺",
    client: "Hava Kuvvetleri",
    team: [
      { name: "Dr. Mehmet Özkan", role: "Aeronautik Uzmanı", avatar: "👨‍✈️" },
      { name: "Mühendis Ayşe Çelik", role: "Aviyonik Uzmanı", avatar: "👩‍💻" },
      { name: "Pilot Emre Aydın", role: "Test Pilotu", avatar: "👨‍✈️" },
      {
        name: "Tekniker Seda Yıldız",
        role: "Sistem Entegratörü",
        avatar: "👩‍🔧",
      },
    ],
    images: {
      main: image2,
      gallery: [image2, image1, image3, image4, image5],
      development: [image2, image1, image3],
    },
    description:
      "İnsansız hava aracı tasarım ve üretim projesi. Stratejik gözetleme ve keşif misyonları için tasarlanmış yeni nesil UAV.",
    detailedInfo: {
      overview:
        "Bars UAV, uzun menzilli keşif ve gözetleme misyonları için geliştirilmiş ileri teknoloji insansız hava aracıdır.",
      objectives: [
        "24 saat kesintisiz uçuş kabiliyeti",
        "Gelişmiş sensör entegrasyonu",
        "Otonom görev planlama",
        "Gerçek zamanlı veri iletimi",
      ],
      technologies: [
        "Autonomous Flight Control",
        "Advanced Aerodynamics",
        "Composite Materials",
        "Satellite Communication",
        "Thermal Imaging",
        "Electronic Warfare",
      ],
      milestones: [
        { date: "2022-01", title: "Tasarım Başlangıcı", status: "completed" },
        { date: "2022-08", title: "İlk Uçuş", status: "completed" },
        { date: "2023-03", title: "Sistem Entegrasyonu", status: "completed" },
        {
          date: "2023-10",
          title: "Operasyonel Testler",
          status: "in-progress",
        },
        { date: "2024-03", title: "Seri Üretim", status: "pending" },
      ],
    },
    progress: {
      overall: 88,
      development: 92,
      testing: 78,
      documentation: 85,
    },
    specifications: {
      "Maksimum Uçuş Yüksekliği": "15,000m",
      "Uçuş Süresi": "24 saat",
      "Maksimum Hız": "250 km/h",
      "Yük Kapasitesi": "50 kg",
      "Çalışma Sıcaklığı": "-40°C / +60°C",
    },
  },
  3: {
    id: 3,
    name: "Hava Savunma Sistemi",
    category: "Savunma Sistemleri",
    status: "Geliştirme Aşamasında",
    startDate: "2023",
    endDate: "2025",
    budget: "5.2M ₺",
    client: "Milli Savunma Bakanlığı",
    team: [
      { name: "Dr. Kemal Arslan", role: "Sistem Mimarı", avatar: "👨‍💼" },
      { name: "Mühendis Elif Yılmaz", role: "Radar Uzmanı", avatar: "👩‍🔬" },
      {
        name: "Tekniker Burak Çelik",
        role: "Füze Sistem Uzmanı",
        avatar: "👨‍🔧",
      },
      { name: "Dr. Ayşe Kara", role: "AI Algoritma Uzmanı", avatar: "👩‍💻" },
    ],
    images: {
      main: image3,
      gallery: [image3, image1, image2, image4, image5],
      development: [image3, image4, image5],
    },
    description:
      "Otonom hava savunma ve radar sistemi projesi. Gelişmiş radar teknolojisi ve yapay zeka destekli hedef tespiti.",
    detailedInfo: {
      overview:
        "Entegre hava savunma sistemi, çok katmanlı koruma sağlayarak hava tehditlerine karşı etkili savunma sunar.",
      objectives: [
        "360° radar kapsama alanı sağlama",
        "AI destekli hedef tanımlama",
        "Çoklu tehdit yönetimi",
        "Entegre komuta kontrol sistemi",
      ],
      technologies: [
        "AESA Radar",
        "Missile Defense",
        "AI Target Recognition",
        "Electronic Warfare",
        "Command & Control",
        "Multi-layered Defense",
      ],
      milestones: [
        {
          date: "2023-01",
          title: "Sistem Tasarımı",
          status: "completed",
          description: "Temel sistem mimarisi tamamlandı",
        },
        {
          date: "2023-06",
          title: "Radar Geliştirme",
          status: "completed",
          description: "AESA radar sistemi geliştirildi",
        },
        {
          date: "2023-12",
          title: "AI Entegrasyonu",
          status: "in-progress",
          description: "Hedef tanıma algoritmaları geliştiriliyor",
        },
        {
          date: "2024-06",
          title: "Entegrasyon Testleri",
          status: "pending",
          description: "Sistem entegrasyon testleri planlanıyor",
        },
        {
          date: "2025-01",
          title: "Operasyonel Test",
          status: "pending",
          description: "Sahada operasyonel testler yapılacak",
        },
      ],
    },
    progress: {
      overall: 65,
      development: 75,
      testing: 45,
      documentation: 55,
    },
    specifications: {
      "Tespit Menzili": "150 km",
      "Hedef Kapasitesi": "200+ hedef",
      "Tepki Süresi": "< 3 saniye",
      "Çalışma Sıcaklığı": "-30°C / +50°C",
      "Güç Tüketimi": "500 kW",
    },
  },
  4: {
    id: 4,
    name: "Robo Taksi",
    category: "Otonom Araçlar",
    status: "Geliştirme Aşamasında",
    startDate: "2024",
    endDate: "2025",
    budget: "4.1M ₺",
    client: "Ulaştırma Bakanlığı",
    team: [
      { name: "Dr. Murat Özdemir", role: "Otonom Sistem Uzmanı", avatar: "👨‍💻" },
      {
        name: "Mühendis Selin Aktaş",
        role: "Computer Vision Uzmanı",
        avatar: "👩‍💻",
      },
      { name: "Tekniker Cem Yıldırım", role: "Sensör Uzmanı", avatar: "👨‍🔧" },
      { name: "Dr. Burcu Aslan", role: "ML Algoritma Uzmanı", avatar: "👩‍🔬" },
    ],
    images: {
      main: image4,
      gallery: [image4, image1, image2, image3, image5],
      development: [image4, image2, image1],
    },
    description:
      "Otonom sürüş teknolojisi ile akıllı taşıt projesi. Şehir içi ulaşım için geliştirilmiş tam otonom araç.",
    detailedInfo: {
      overview:
        "Şehir içi ulaşımda devrim yaratacak tam otonom sürüş kabiliyetine sahip elektrikli taksi sistemi.",
      objectives: [
        "Level 5 otonom sürüş",
        "Güvenli yolcu taşımacılığı",
        "Trafik akışını optimize etme",
        "Çevre dostu ulaşım çözümü",
      ],
      technologies: [
        "Computer Vision",
        "LiDAR Mapping",
        "Machine Learning",
        "Sensor Fusion",
        "Path Planning",
        "V2X Communication",
      ],
      milestones: [
        {
          date: "2024-01",
          title: "Araç Platformu",
          status: "completed",
          description: "Temel araç platformu hazırlandı",
        },
        {
          date: "2024-04",
          title: "Sensör Entegrasyonu",
          status: "completed",
          description: "Tüm sensörler entegre edildi",
        },
        {
          date: "2024-08",
          title: "AI Algoritmaları",
          status: "in-progress",
          description: "Sürüş algoritmaları geliştiriliyor",
        },
        {
          date: "2024-12",
          title: "Kapalı Alan Testleri",
          status: "pending",
          description: "Test pistinde denemeler yapılacak",
        },
        {
          date: "2025-06",
          title: "Şehir İçi Testler",
          status: "pending",
          description: "Gerçek trafik koşullarında test",
        },
      ],
    },
    progress: {
      overall: 58,
      development: 68,
      testing: 40,
      documentation: 50,
    },
    specifications: {
      "Maksimum Hız": "80 km/h",
      Menzil: "400 km",
      "Yolcu Kapasitesi": "4 kişi",
      "Sensör Sayısı": "12 adet",
      "İşlemci Gücü": "500 TOPS",
    },
  },
  5: {
    id: 5,
    name: "İDA",
    category: "Deniz Teknolojileri",
    status: "Prototip Aşamasında",
    startDate: "2024",
    endDate: "2025",
    budget: "3.2M ₺",
    client: "Sahil Güvenlik Komutanlığı",
    team: [
      { name: "Dr. Onur Deniz", role: "Denizcilik Uzmanı", avatar: "👨‍⚓" },
      { name: "Mühendis Merve Su", role: "Navigasyon Uzmanı", avatar: "👩‍🔬" },
      { name: "Tekniker Kaan Okyanus", role: "İletişim Uzmanı", avatar: "👨‍💻" },
      { name: "Dr. Deniz Balık", role: "Otonom Sistem Uzmanı", avatar: "👩‍💻" },
    ],
    images: {
      main: image5,
      gallery: [image5, image1, image2, image3, image4],
      development: [image5, image3, image2],
    },
    description:
      "İnsansız deniz üstü aracı ve navigasyon sistemi. GPS bağımsız navigasyon ile uzun mesafe kabiliyeti.",
    detailedInfo: {
      overview:
        "Deniz üstü gözetleme ve keşif misyonları için tasarlanmış otonom deniz aracı sistemi.",
      objectives: [
        "GPS-free navigasyon sistemi",
        "Uzun mesafe otonom seyir",
        "Deniz güvenliği sağlama",
        "Çevresel izleme yapabilme",
      ],
      technologies: [
        "Inertial Navigation",
        "Maritime Communication",
        "Weather Resistant Design",
        "Solar Power System",
        "Remote Monitoring",
        "Emergency Systems",
      ],
      milestones: [
        {
          date: "2024-02",
          title: "Tasarım Tamamlama",
          status: "completed",
          description: "Temel tasarım çalışmaları bitti",
        },
        {
          date: "2024-05",
          title: "Prototip İmalat",
          status: "completed",
          description: "İlk prototip imal edildi",
        },
        {
          date: "2024-09",
          title: "İlk Deniz Testleri",
          status: "in-progress",
          description: "Kıyı yakını testler devam ediyor",
        },
        {
          date: "2024-12",
          title: "Navigasyon Testleri",
          status: "pending",
          description: "GPS-free navigasyon testleri",
        },
        {
          date: "2025-04",
          title: "Uzun Mesafe Testleri",
          status: "pending",
          description: "Açık deniz uzun mesafe testleri",
        },
      ],
    },
    progress: {
      overall: 45,
      development: 55,
      testing: 30,
      documentation: 40,
    },
    specifications: {
      "Maksimum Menzil": "500 deniz mili",
      "Çalışma Süresi": "72 saat",
      "Maksimum Hız": "25 knot",
      "Yük Kapasitesi": "200 kg",
      "Deniz Durumu": "4-5 arası",
    },
  },
  // Diğer projeler için benzer yapı...
};

const ProjeDetay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Proje verilerini yükle (gerçek uygulamada API çağrısı)
    const projectData = projectsDetailData[id];
    if (projectData) {
      setProject(projectData);
      // İlk açılışta seçili resim olmasın
      setSelectedImage(null);
    }
    setLoading(false);
  }, [id]);

  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [selectedImage]);

  if (loading) {
    return (
      <div className="proje-detay-container">
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Proje yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="proje-detay-container">
        <Navbar />
        <div className="not-found-container">
          <h2>Proje bulunamadı</h2>
          <button onClick={() => navigate("/projeler")} className="back-btn">
            Projelere Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="proje-detay-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="breadcrumb">
            <span onClick={() => navigate("/projeler")}>Projeler</span>
            <span className="separator">›</span>
            <span>{project.name}</span>
          </div>

          <div className="hero-info">
            <div className="project-badge">{project.category}</div>
            <h1 className="hero-title">{project.name}</h1>
            <p className="hero-description">{project.description}</p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-label">Durum</span>
                <span className="stat-value">{project.status}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Başlangıç</span>
                <span className="stat-value">{project.startDate}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Bütçe</span>
                <span className="stat-value">{project.budget}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">İstemci</span>
                <span className="stat-value">{project.client}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={project.images.main} alt={project.name} />
          <div className="image-overlay"></div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            {[
              { id: "overview", label: "Genel Bakış" },
              { id: "gallery", label: "Galeri" },
              { id: "development", label: "Geliştirme Süreci" },
              { id: "team", label: "Ekip" },
              { id: "progress", label: "İlerleme" },
              { id: "specs", label: "Teknik Özellikler" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="tab-content overview-content">
              <div className="content-grid">
                <div className="main-content">
                  <h2>Proje Hakkında</h2>
                  <p className="overview-text">
                    {project.detailedInfo.overview}
                  </p>

                  <h3>Proje Hedefleri</h3>
                  <div className="objectives-list">
                    {project.detailedInfo.objectives.map((objective, index) => (
                      <div key={index} className="objective-item">
                        <div className="objective-icon">✓</div>
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>

                  <h3>Kilometre Taşları</h3>
                  <div className="milestones">
                    {project.detailedInfo.milestones.map((milestone, index) => (
                      <div
                        key={index}
                        className={`milestone-item ${milestone.status}`}
                      >
                        <div className="milestone-date">{milestone.date}</div>
                        <div className="milestone-content">
                          <h4>{milestone.title}</h4>
                          <p>{milestone.description}</p>
                        </div>
                        <div
                          className={`milestone-status ${milestone.status}`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-content">
                  <div className="info-card">
                    <h3>Teknolojiler</h3>
                    <div className="tech-grid">
                      {project.detailedInfo.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="tab-content gallery-content">
              <h2>Proje Görselleri</h2>
              <div className="gallery-grid">
                {project.images.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`${project.name} ${index + 1}`} />
                    <div className="gallery-overlay">
                      <span>🔍</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Development Process Tab */}
          {activeTab === "development" && (
            <div className="tab-content development-content">
              <h2>Geliştirme Süreci</h2>
              <p>Proje geliştirme sürecinden kareler ve önemli anlar.</p>
              <div className="development-grid">
                {project.images.development.map((image, index) => (
                  <div key={index} className="development-item">
                    <img src={image} alt={`Geliştirme ${index + 1}`} />
                    <div className="development-info">
                      <h4>Geliştirme Aşama {index + 1}</h4>
                      <p>Proje geliştirme sürecinin önemli bir aşaması.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <div className="tab-content team-content">
              <h2>Proje Ekibi</h2>
              <p>Bu projeyi hayata geçiren uzman ekibimiz.</p>
              <div className="team-grid">
                {project.team.map((member, index) => (
                  <div key={index} className="team-member">
                    <div className="member-avatar">{member.avatar}</div>
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                    <div className="member-contact">
                      <button className="contact-btn">İletişim</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === "progress" && (
            <div className="tab-content progress-content">
              <h2>Proje İlerlemesi</h2>
              <div className="progress-overview">
                <div className="overall-progress">
                  <h3>Genel İlerleme</h3>
                  <div className="circular-progress">
                    <div className="progress-circle">
                      <span>{project.progress.overall}%</span>
                    </div>
                  </div>
                </div>

                <div className="detailed-progress">
                  {Object.entries(project.progress)
                    .filter(([key]) => key !== "overall")
                    .map(([key, value]) => (
                      <div key={key} className="progress-item">
                        <div className="progress-header">
                          <span className="progress-label">
                            {key === "development"
                              ? "Geliştirme"
                              : key === "testing"
                              ? "Test & Doğrulama"
                              : key === "documentation"
                              ? "Dokümantasyon"
                              : key}
                          </span>
                          <span className="progress-percentage">{value}%</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specs" && (
            <div className="tab-content specs-content">
              <h2>Teknik Özellikler</h2>
              <div className="specs-grid">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">{key}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="Büyük görsel" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjeDetay;
