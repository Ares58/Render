import "./Benefits.css";

export default function Benefits() {
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
    <div className="benefits" data-animate>
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
            <h2 className="section-title">
              Biz <span className="title-gradient">Kimiz</span>
            </h2>
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
    </div>
  );
}
