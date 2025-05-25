import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaTeeth, FaTeethOpen, FaSmile, FaFlask, FaSyringe } from 'react-icons/fa';

const Periodontoloji = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Diş eti çekilmesi tedavi edilebilir mi?",
      answer: "Evet, diş eti çekilmesinin erken evrelerinde profesyonel temizlik ve iyi ağız hijyeni ile durdurulabilir. İleri vakalarda ise greftleme yöntemleriyle çekilmiş diş etleri tedavi edilebilmektedir."
    },
    {
      question: "Diş eti hastalığı nasıl anlaşılır?",
      answer: "Diş etlerinde kanama, kızarıklık, şişlik, hassasiyet, dişlerde sallanma veya uzama hissi, ağız kokusu gibi belirtiler diş eti hastalığını gösterebilir. Kesin teşhis için periodontolog muayenesi şarttır."
    },
    {
      question: "Diş taşı temizliği dişlere zarar verir mi?",
      answer: "Hayır, diş taşı temizliği dişlere zarar vermez. Aksine, diş taşlarının temizlenmemesi diş eti hastalıklarına ve kemik kaybına yol açar. Ultrasonik cihazlarla yapılan profesyonel temizlik güvenlidir."
    },
    {
      question: "Lazerle diş eti tedavisi nedir?",
      answer: "Lazer teknolojisi, diş eti tedavilerinde daha az kanama, daha az ağrı ve daha hızlı iyileşme sağlar. Diş eti küretajı, greftleme ve estetik diş eti düzeltmelerinde kullanılan modern bir yöntemdir."
    }
  ];

  return (
    <div className="periodontoloji-tedavisi">
      <Helmet>
        <title>Periodontoloji (Diş Eti Hastalıkları) | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Diş eti hastalıklarının teşhis ve tedavisi. Diş eti çekilmesi, periodontitis ve gingivitis tedavilerinde uzman yaklaşım. Sağlıklı diş etleri için özel çözümler." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Periodontoloji (Diş Eti Hastalıkları)</h1>
          <p>Sağlıklı dişler için sağlıklı diş etleri şart! Diş eti çekilmesi, periodontitis ve gingivitis tedavilerinde uzman yaklaşım. Erken teşhisle diş kaybını önleyin.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/disetiuygulama.png" alt="Diş eti tedavisi uygulaması" />
            <div className="service-intro-text">
              <h2>Diş Eti Sağlığınızı Koruyun</h2>
              <p>Periodontoloji, dişleri çevreleyen yumuşak (diş eti) ve sert (kemik) dokuların hastalıklarının teşhisi, tedavisi ve önlenmesi ile ilgilenen diş hekimliği dalıdır. Kliniğimizde diş eti hastalıklarının her aşamasına yönelik modern tedavi yöntemleri uygulanmaktadır.</p>
              <p>Diş eti sağlığı genel ağız sağlığının temel taşıdır. Erken teşhis ve doğru tedavi yöntemleriyle diş kayıplarının önüne geçebilirsiniz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Periodontal Tedavilerimiz</h2>
          <div className="info-boxes">
            <div className="info-box">

              <h3>Diş Taşı Temizliği (Detertraj)</h3>
              <p>Profesyonel diş taşı temizliği ile diş eti iltihabının önlenmesi. Ultrasonik ve el aletleriyle yapılan derin temizlik işlemi.</p>
            </div>
            
            <div className="info-box">

              <h3>Küretaj ve Kök Yüzeyi Düzleştirme</h3>
              <p>Diş eti ceplerindeki iltihaplı dokuların temizlenmesi ve kök yüzeylerinin düzleştirilmesi işlemi.</p>
            </div>
            
            <div className="info-box">

              <h3>Lazerle Diş Eti Tedavisi</h3>
              <p>Diş eti hastalıklarının tedavisinde minimal invaziv lazer uygulamaları. Daha az ağrı, daha hızlı iyileşme.</p>
            </div>
            
            <div className="info-box">
   
              <h3>Gingivektomi ve Gingivoplasti</h3>
              <p>Büyümüş veya deforme olmuş diş etlerinin şekillendirilmesi. Estetik ve fonksiyonel diş eti düzeltmeleri.</p>
            </div>
            
            <div className="info-box">

              <h3>Diş Eti Greftleme</h3>
              <p>Çekilmiş diş etlerinin tedavisi için yumuşak doku greftleri. Açığa çıkmış kök yüzeylerinin kapatılması.</p>
            </div>
            
            <div className="info-box">

              <h3>Periodontal Estetik</h3>
              <p>Gülüş estetiğini bozan diş eti problemlerinin düzeltilmesi. Pembe estetik uygulamaları.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Tedavi Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Detaylı Periodontal Muayene</h3>
                <p>Diş eti cep ölçümleri, kemik kaybı değerlendirmesi ve radyografik incelemelerle kapsamlı teşhis.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Başlangıç Tedavisi</h3>
                <p>Diş taşı temizliği, kök yüzeyi düzleştirme ve ağız hijyeni eğitimi ile iltihabın kontrol altına alınması.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Cerrahi Tedavi (Gerekirse)</h3>
                <p>İleri vakalarda flep operasyonu, greftleme veya rejeneratif yöntemlerin uygulanması.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Idame Tedavisi</h3>
                <p>Düzenli kontroller ve profesyonel temizliklerle tedavi sonuçlarının korunması.</p>
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
            <h2>Diş Eti Problemleriniz İçin Uzman Ekibimizle Görüşün</h2>
            <p>Sağlıklı diş etleri, sağlıklı bir gülüşün temelidir. Erken teşhis ve doğru tedavi yöntemleriyle dişlerinizi koruyun.</p>
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
        .periodontoloji-tedavisi {
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
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hizmetler/disetitedavisi-header.jpg');
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

export default Periodontoloji;