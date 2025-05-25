import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaProcedures, FaSyringe, FaHeartbeat, FaUserMd, FaQuestionCircle, FaClipboardCheck } from 'react-icons/fa';

const GenelAnesteziSedasyon = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Genel anestezi ve sedasyon arasındaki fark nedir?",
      answer: "Genel anestezi tam bilinç kaybı sağlarken, sedasyon hastanın bilincini koruduğu ancak rahatladığı bir yöntemdir. Sedasyonun derinlik seviyesine göre hasta işlem sırasında olanları hatırlamayabilir. Genel anestezi genellikle uzun ve kompleks cerrahi işlemlerde, sedasyon ise daha kısa süreli işlemlerde veya anksiyetesi yüksek hastalarda tercih edilir."
    },
    {
      question: "Diş tedavisinde anestezi/sedasyon kimler için uygundur?",
      answer: "1) Diş hekimi korkusu (dentofobi) olanlar, 2) Özel gereksinimli bireyler, 3) Şiddetli öğürme refleksi olanlar, 4) Uzun süreli tedavi gereken çocuk hastalar, 5) Kompleks cerrahi işlem gerektiren yetişkinler, 6) Lokal anesteziye direnç gösterenler için uygun bir seçenektir."
    },
    {
      question: "Anestezi/sedasyon öncesi hazırlık süreci nasıldır?",
      answer: "İşlemden önce detaylı bir tıbbi öykü alınır ve gerekli tetkikler yapılır. Hastaların işlemden 6-8 saat önce aç kalması gerekir. Kan sulandırıcı ilaç kullanıyorsa hekim bilgisi dahilinde geçici olarak kesilebilir. İşlem günü rahat kıyafetler giyilmeli ve hasta refakatçi eşliğinde kliniğe gelmelidir."
    },
    {
      question: "Anestezi/sedasyon sonrası iyileşme süreci nasıldır?",
      answer: "Hasta işlem sonrası gözlem odasında bir süre dinlenir. Etkiler tamamen geçene kadar (genellikle 24 saat) araç kullanılmamalı, önemli kararlar alınmamalı ve alkol tüketilmemelidir. Hafif baş dönmesi, bulantı veya uyku hali normaldir. Hekimin verdiği talimatlara uyulması ve kontrollere zamanında gelinmesi önemlidir."
    }
  ];

  return (
    <div className="genel-anestezi-sedasyon">
      <Helmet>
        <title>Genel Anestezi ve Sedasyon | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Diş hekimi korkusu (dentofobi) olanlar ve özel gereksinimli bireyler için genel anestezi ve sedasyon altında diş tedavileri. Güvenli ve konforlu bir tedavi deneyimi." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Genel Anestezi ve Sedasyon</h1>
          <p>Diş hekimi korkusu (dentofobi) olanlar ve özel gereksinimli bireyler için güvenli ve konforlu tedavi deneyimi. Uzman anestezi ekibimizle tam donanımlı ameliyathanemizde hizmetinizdeyiz.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/GenelAnestezi.jpg" alt="Genel anestezi altında diş tedavisi" />
            <div className="service-intro-text">
              <h2>Korkusuz ve Ağrısız Diş Tedavisi Deneyimi</h2>
              <p>Diş hekimi koltuğunda yaşadığınız korku ve endişeler artık geçmişte kalsın. Kliniğimizde genel anestezi ve sedasyon altında gerçekleştirdiğimiz diş tedavileri sayesinde, hiçbir şey hissetmeden tüm dental işlemlerinizi tek seansta tamamlıyoruz.</p>
              <p>Deneyimli anestezi uzmanlarımız ve tam donanımlı ameliyathanemizle, yüksek güvenlik standartlarında hizmet veriyoruz. Çocuk hastalar, özel gereksinimli bireyler ve dentofobisi olan yetişkinler için ideal bir çözüm sunuyoruz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Anestezi ve Sedasyon Yöntemlerimiz</h2>
          <div className="info-boxes">
            <div className="info-box">
              <h3>Genel Anestezi</h3>
              <p>Tam bilinç kaybı sağlayan bu yöntemle uzun ve kompleks cerrahi işlemler ağrısız ve konforlu şekilde gerçekleştirilir. İşlem sırasında hasta tamamen uyutulur ve hiçbir şey hatırlamaz.</p>
            </div>
            
            <div className="info-box">
        
              <h3>Derin Sedasyon</h3>
              <p>Hastanın bilinci kapalı olmamakla birlikte derin bir rahatlama halindedir. İşlem sonrası genellikle hatırlanmaz. Orta düzey cerrahi işlemler için uygundur.</p>
            </div>
            
            <div className="info-box">
         
              <h3>Bilinçli Sedasyon</h3>
              <p>Hasta rahatlamış ancak uyanıktır, komutlara yanıt verebilir. Hafif ve orta düzey anksiyetesi olan hastalarda kullanılır. İşlem sonrası çoğunlukla hatırlanır.</p>
            </div>
            
            <div className="info-box">
           
              <h3>Anestezi Uzmanı Eşliğinde</h3>
              <p>Tüm anestezi ve sedasyon işlemlerimiz, deneyimli anestezi uzmanları tarafından yönetilir. Hastanın yaşamsal fonksiyonları sürekli monitorize edilir.</p>
            </div>
            
            <div className="info-box">
          
              <h3>Ön Değerlendirme</h3>
              <p>İşlem öncesi detaylı tıbbi öykü alınır, gerekli tetkikler yapılır ve hasta anestezi açısından değerlendirilir. Risk faktörleri belirlenerek güvenli bir protokol oluşturulur.</p>
            </div>
            
            <div className="info-box">
     
              <h3>Postoperatif Takip</h3>
              <p>İşlem sonrası hasta tamamen ayılana kadar gözlem altında tutulur. Taburculuk sonrası bakım talimatları verilir ve 24 saat içinde kontrol sağlanır.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Tedavi Sürecimiz</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Ön Görüşme ve Değerlendirme</h3>
                <p>Hastanın tıbbi öyküsü alınır, fizik muayene yapılır ve gerekli tetkikler istenir. Anestezi risk sınıflandırması yapılır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Hazırlık ve Bilgilendirme</h3>
                <p>Hastaya işlem öncesi hazırlık talimatları verilir. Aç kalma süresi, ilaç kullanımı gibi konularda bilgilendirme yapılır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Anestezi/Sedasyon Uygulaması</h3>
                <p>İşlem günü anestezi uzmanı tarafından hasta tekrar değerlendirilir. Uygun yöntem belirlenerek anestezi/sedasyon uygulanır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Diş Tedavilerinin Uygulanması</h3>
                <p>Hasta uykuya aldıktan veya sedasyon sağlandıktan sonra planlanan tüm dental işlemler tek seansta gerçekleştirilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Ayılma ve Gözlem</h3>
                <p>İşlem sonrası hasta özel dinlenme odasında gözlem altında tutulur. Tamamen ayıldıktan ve stabil olduktan sonra taburcu edilir.</p>
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
            <h2>Korkusuz ve Ağrısız Diş Tedavisi İçin</h2>
            <p>Genel anestezi ve sedasyon ile diş tedavisi hakkında bilgi almak için uzman ekibimizle iletişime geçin.</p>
          
          </section>
        </div>
      </main>

      <style jsx>{`
        /* Genel Stiller */
        :root {
          --primary-color: #3498db;
          --secondary-color: #2980b9;
          --dark-color: #2c3e50;
          --light-color: #f9f9f9;
          --text-color: #34495e;
          --text-light: #7f8c8d;
        }
        
        .genel-anestezi-sedasyon {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          margin: 0;
          padding: 0;
          background-color: var(--light-color);
        }
        
        .container {
          width: 85%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        /* Header */
        .service-header {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hizmetler/anestezi-sedasyon-header.jpg');
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
          text-align: center;
        }
        
        .info-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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
          background: white;
          padding: 60px 0;
          margin-bottom: 60px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .faq-item {
          margin-bottom: 20px;
          background: var(--light-color);
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
          background: white;
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

export default GenelAnesteziSedasyon;