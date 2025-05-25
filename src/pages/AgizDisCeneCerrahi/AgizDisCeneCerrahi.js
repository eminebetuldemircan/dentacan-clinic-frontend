import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaBone, FaClock, FaTeeth, FaTeethOpen, FaLaptopMedical } from 'react-icons/fa';

const AgizDisCeneCerrahisi = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Gömülü diş çekimi ne kadar sürer?",
      answer: "Basit gömülü diş çekimleri 15-30 dakika sürerken, kompleks vakalarda bu süre 1 saate kadar uzayabilir. İşlem süresi dişin pozisyonuna ve kök yapısına göre değişir."
    },
    {
      question: "Cerrahi sonrası ağrı olur mu?",
      answer: "İşlem sonrası 2-3 gün sürebilen hafif-orta şiddette ağrı normaldir. Reçete edilen ağrı kesicilerle bu ağrı kontrol altına alınabilir. Şiddetli ağrı durumunda hekiminize başvurmalısınız."
    },
    {
      question: "Çene cerrahisi sonrası beslenme nasıl olmalı?",
      answer: "İlk 24 saat soğuk ve sıvı gıdalar (yoğurt, püre, dondurma), sonraki 3-5 gün yumuşak gıdalar (çorba, makarna, yumurta) önerilir. Sıcak, baharatlı ve sert gıdalardan kaçınılmalıdır."
    },
    {
      question: "Sinüs lifting sonrası nelere dikkat etmeliyim?",
      answer: "İlk 2 hafta şiddetli hapşırma, öksürme, uçak yolculuğu ve dalış yapmaktan kaçının. Sigara kullanmayın, burnunuzu sümkürmeyin. Hekiminizin verdiği burun damlalarını düzenli kullanın."
    }
  ];

  return (
    <div className="cerrahi-tedavisi">
      <Helmet>
        <title>Ağız, Diş ve Çene Cerrahisi | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Uzman cerrahlarımızla güvenli ve konforlu cerrahi müdahaleler. Gömülü diş çekimlerinden çene kırıklarına, tüm cerrahi işlemlerde son teknoloji yaklaşımlar." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Ağız, Diş ve Çene Cerrahisi</h1>
          <p>Uzman cerrahlarımızla güvenli ve konforlu cerrahi müdahaleler. Gömülü diş çekimlerinden çene kırıklarına, tüm cerrahi işlemlerde son teknoloji yaklaşımlar.</p>

        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/AğızCerrahi.jpg" alt="Ağız cerrahisi uygulaması" />
            <div className="service-intro-text">
              <h2>Uzman Cerrahi Müdahaleler</h2>
              <p>Ağız, diş ve çene cerrahisi, diş hekimliğinin cerrahi yönünü oluşturan uzmanlık dalıdır. Kliniğimizde deneyimli cerrahlarımız tarafından gömülü diş çekimleri, çene kistleri, çene kırıkları, implant uygulamaları ve diğer cerrahi işlemler güvenle gerçekleştirilmektedir.</p>
              <p>Modern cerrahi teknikler ve konforlu anestezi yöntemleri sayesinde ağrısız ve hızlı iyileşme süreci sunuyoruz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Cerrahi Uygulamalarımız</h2>
          <div className="info-boxes">
            <div className="info-box">
              <h3>Gömülü Diş Çekimi</h3>
              <p>20 yaş dişleri ve diğer gömülü dişlerin çekimi, komplikasyonsuz iyileşme süreci için özel cerrahi teknikler.</p>
            </div>
            
            <div className="info-box">
              <h3>Kist ve Tümör Cerrahisi</h3>
              <p>Ağız içi kistlerin ve iyi huylu tümörlerin cerrahi olarak çıkarılması, patolojik inceleme.</p>
            </div>
            
            <div className="info-box">
              <h3>Çene Kırığı Tedavisi</h3>
              <p>Travma sonucu oluşan çene kırıklarının cerrahi tedavisi, plak ve vida uygulamaları.</p>
            </div>
            
            <div className="info-box">
              <h3>Sinüs Lifting</h3>
              <p>Üst çene implantları için yetersiz kemik yüksekliği durumlarında sinüs kaldırma operasyonları.</p>
            </div>
            
            <div className="info-box">
              <h3>Kemik Greftleme</h3>
              <p>İmplant uygulamaları öncesi kemik kaybı olan bölgelere kemik tozu veya blok greft uygulamaları.</p>
            </div>
            
            <div className="info-box">
              <h3>Frenulum Operasyonları</h3>
              <p>Anormal dudak/dil bağı (frenulum) durumlarında konuşma ve fonksiyonu düzeltmeye yönelik cerrahi müdahaleler.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Cerrahi Süreç</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Detaylı Muayene</h3>
                <p>3D tomografi ve klinik muayene ile cerrahi alan değerlendirilir, risk faktörleri belirlenir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Anestezi Planlaması</h3>
                <p>Hastanın durumuna göre lokal anestezi, sedasyon veya genel anestezi seçenekleri değerlendirilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Cerrahi İşlem</h3>
                <p>Steril koşullarda, minimal invaziv tekniklerle cerrahi müdahale gerçekleştirilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>İyileşme Süreci</h3>
                <p>Postoperatif bakım talimatları verilir, kontroller planlanır, gerekli ilaçlar reçete edilir.</p>
              </div>
            </div>
          </div>

          {/* SSS */}
          <section className="faq-section">
            <div className="container">
              <h2 className="section-title">Sık Sorulan Sorular</h2>
              
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <span>{faq.question}</span>
                    {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`faq-answer ${activeFaq === index ? 'show' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta">
            <h2>Cerrahi İşlemleriniz İçin Uzman Ekibimizle Tanışın</h2>
            <p>Deneyimli cerrahlarımız ve modern tekniklerimizle güvenli cerrahi çözümler sunuyoruz.</p>
          </section>
        </div>
      </main>

      <style jsx>{`
        /* Genel Stiller */
        :root {
          --primary-color: #3498db;
          --secondary-color: #2980b9;
          --dark-color: #2c3e50;
          --light-color: #ecf0f1;
          --text-color: #34495e;
          --text-light: #7f8c8d;
        }
        
        .cerrahi-tedavisi {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          margin: 0;
          padding: 0;
        }
        
        .container {
          width: 85%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        /* Header */
        .service-header {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hizmetler/cerrahi-header.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 100px 0;
          text-align: center;
        }
        
        .service-header h1 {
          font-size: 2.8rem;
          margin-bottom: 20px;
        }
        
        .service-header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 30px;
        }
        
        .btn {
          display: inline-block;
          padding: 12px 30px;
          background-color: var(--primary-color);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn:hover {
          background-color: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* İçerik Bölümü */
        .service-content {
          padding: 80px 0;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.2rem;
          color: var(--dark-color);
          margin-bottom: 50px;
          position: relative;
        }
        
        .section-title:after {
          content: '';
          position: absolute;
          width: 80px;
          height: 3px;
          background: var(--primary-color);
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .service-intro {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .service-intro img {
          width: 50%;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .service-intro-text {
          width: 50%;
        }
        
        .service-intro-text h2 {
          font-size: 1.8rem;
          color: var(--dark-color);
          margin-bottom: 20px;
        }
        
        .service-intro-text p {
          margin-bottom: 20px;
          color: var(--text-light);
        }
        
        /* Bilgi Kutuları */
        .info-boxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .info-box {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        
        .info-box:hover {
          transform: translateY(-10px);
        }
        
        .info-box h3 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-size: 1.4rem;
        }
        
        .info-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        /* Süreç Adımları */
        .process-steps {
          counter-reset: step;
          margin-bottom: 60px;
        }
        
        .process-step {
          display: flex;
          margin-bottom: 30px;
          position: relative;
          padding-left: 100px;
        }
        
        .process-step:before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 0;
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .process-step-content {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          flex: 1;
        }
        
        .process-step h3 {
          margin-top: 0;
          color: var(--dark-color);
        }
        
        /* SSS */
        .faq-section {
          background: var(--light-color);
          padding: 60px 0;
          margin-bottom: 60px;
        }
        
        .faq-item {
          margin-bottom: 20px;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }
        
        .faq-question {
          padding: 20px;
          background: var(--primary-color);
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .faq-answer {
          padding: 20px;
          display: none;
        }
        
        .faq-answer.show {
          display: block;
        }
        
        /* CTA */
        .service-cta {
          text-align: center;
          padding: 60px 0;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border-radius: 10px;
        }
        
        .service-cta h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        
        .service-cta p {
          max-width: 700px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .service-intro {
            flex-direction: column;
          }
          
          .service-intro img,
          .service-intro-text {
            width: 100%;
          }
          
          .process-step {
            padding-left: 80px;
          }
          
          .process-step:before {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default AgizDisCeneCerrahisi;