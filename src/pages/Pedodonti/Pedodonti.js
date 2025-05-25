import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaChild, FaSmile, FaToothbrush, FaSnowflake, FaShieldAlt } from 'react-icons/fa';

const Pedodonti = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Çocuğumun ilk diş muayenesi ne zaman olmalı?",
      answer: "İlk diş muayenesinin ilk diş çıktıktan sonra (genellikle 6-12 ay arası) yapılması önerilir. En geç 1 yaşına kadar ilk muayene yapılmalıdır. Bu erken muayene, olası problemlerin önlenmesi ve doğru ağız bakımı konusunda ebeveynlere rehberlik sağlar."
    },
    {
      question: "Süt dişleri neden önemlidir?",
      answer: "Süt dişleri; çocuğun beslenmesi, konuşması ve kalıcı dişler için yer tutucu görevi görür. Erken kaybedilen süt dişleri, kalıcı dişlerde çapraşıklığa ve çene gelişim problemlerine yol açabilir. Bu nedenle süt dişlerinin sağlığı çok önemlidir."
    },
    {
      question: "Çocuklarda diş çürüğü nasıl önlenir?",
      answer: "Düzenli fırçalama (günde 2 kez), florürlü diş macunu kullanımı, dengeli beslenme (şekerli gıdaların sınırlandırılması), düzenli diş hekimi kontrolleri ve fissür örtücü/flor uygulamaları ile çürükler önlenebilir."
    },
    {
      question: "Çocuklarda diş hekimi korkusu nasıl yenilir?",
      answer: "Pozitif bir dil kullanın ('iğne', 'acı' gibi korkutucu kelimelerden kaçının), oyun terapisi ile tanıştırın, ilk ziyaretleri tedavi gerektirmeyen basit kontrollerle yapın ve hekimin pedodonti uzmanı olmasına özen gösterin. Kliniğimizde çocuk dostu yaklaşımlar sayesinde korkusuz tedaviler mümkün."
    }
  ];

  return (
    <div className="pedodonti-tedavisi">
      <Helmet>
        <title>Pedodonti (Çocuk Diş Hekimliği) | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Çocuk diş sağlığında uzman yaklaşım. Süt dişlerinden genç sürekli dişlere, çocuklara özel diş tedavileri. Korkusuz ve eğlenceli diş hekimi deneyimi." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Pedodonti (Çocuk Diş Hekimliği)</h1>
          <p>Minik hastalarımız için özel tasarlanmış korkusuz diş hekimi deneyimi. Süt dişlerinden genç sürekli dişlere, çocuklara özel diş tedavileri.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/ÇocukMuayene.jpg" alt="Çocuk diş tedavisi uygulaması" />
            <div className="service-intro-text">
              <h2>Çocuklar İçin Özel Diş Bakımı</h2>
              <p>Pedodonti (Çocuk Diş Hekimliği), 0-14 yaş arası çocukların süt ve kalıcı dişlerinin sağlığını korumayı, oluşan problemleri çocuk psikolojisine uygun yöntemlerle tedavi etmeyi ve çocuklara ömür boyu sürecek iyi ağız bakım alışkanlıkları kazandırmayı hedefler.</p>
              <p>Kliniğimizde çocuklara özel tasarlanmış renkli ve eğlenceli bir ortamda, deneyimli pedodonti uzmanlarımızla hizmet veriyoruz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Pedodonti Uygulamalarımız</h2>
          <div className="info-boxes">
            <div className="info-box">

              <h3>Koruyucu Diş Hekimliği</h3>
              <p>Düzenli kontroller, flor uygulamaları, fissür örtücüler ve ağız hijyeni eğitimi ile çürüklerin önlenmesi.</p>
            </div>
            
            <div className="info-box">

              <h3>Süt Dişi Dolguları</h3>
              <p>Çürük süt dişlerinin çocuklara özel dolgu malzemeleri ile tedavisi. Renkli dolgu seçenekleri.</p>
            </div>
            
            <div className="info-box">
      
              <h3>Çocuklarda Kanal Tedavisi</h3>
              <p>Derin çürüklerde süt dişlerinin korunması için pulpa tedavileri (kök kanal tedavisi).</p>
            </div>
            
            <div className="info-box">
    
              <h3>Yer Tutucular</h3>
              <p>Erken kaybedilen süt dişleri için sabit veya hareketli yer tutucu apareyler.</p>
            </div>
            
            <div className="info-box">

              <h3>Ağız Hijyeni Eğitimi</h3>
              <p>Çocuklara yaşlarına uygun eğlenceli yöntemlerle doğru fırçalama tekniklerinin öğretilmesi.</p>
            </div>
            
            <div className="info-box">
     
              <h3>Çocuklarda Ortodontik Muayene</h3>
              <p>Erken dönem çene ve diş yapısı bozukluklarının tespiti ve yönlendirilmesi.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Tedavi Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Tanışma ve Adaptasyon</h3>
                <p>Çocuğun diş hekimi koltuğuna ve ortama alışması için oyun terapisi ve eğlenceli tanışma süreci.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Kapsamlı Muayene</h3>
                <p>Diş, çene ve ağız dokularının detaylı incelenmesi, gerekiyorsa radyografik değerlendirme.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Koruyucu Uygulamalar</h3>
                <p>Flor uygulaması, fissür örtücü gibi çürük önleyici işlemlerin yapılması.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Gerekiyorsa Tedavi</h3>
                <p>Çocuk psikolojisine uygun yöntemlerle (sedasyon veya genel anestezi gerekirse) tedavi uygulanması.</p>
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
            <h2>Çocuğunuzun Diş Sağlığı İçin Uzman Pedodontistlerimizle Tanışın</h2>
            <p>Eğlenceli ve korkusuz bir diş hekimi deneyimi ile çocuğunuza sağlıklı bir gülüş hediye edin.</p>
   
          </section>
        </div>
      </main>

      <style jsx>{`
        /* Genel Stiller */
        :root {
          --primary-color: #f39c12;
          --secondary-color: #e67e22;
          --dark-color: #2c3e50;
          --light-color: #f9f9f9;
          --text-color: #34495e;
          --text-light: #7f8c8d;
        }
        
        .pedodonti-tedavisi {
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
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hizmetler/cocukdis-header.jpg');
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

export default Pedodonti;