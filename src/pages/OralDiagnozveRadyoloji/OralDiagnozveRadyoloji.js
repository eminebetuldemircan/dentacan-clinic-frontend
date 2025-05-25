import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaXRay, FaTeeth, FaTeethOpen, FaClinicMedical, FaTooth, FaSearch, FaProcedures } from 'react-icons/fa';

const OralDiagnozRadyoloji = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Diş röntgeni ne sıklıkla çekilmelidir?",
      answer: "Rutin kontrollerde genellikle yılda bir kez panoramik röntgen önerilir. Ancak tedavi planlamasına bağlı olarak bu sıklık değişebilir. Periapikal veya bite-wing röntgenler ise 6-12 ayda bir çekilebilir. Hekiminiz ihtiyaca göre en uygun sıklığı belirleyecektir."
    },
    {
      question: "Diş röntgenlerinin radyasyon riski var mıdır?",
      answer: "Modern dijital radyografi sistemleriyle çekilen diş röntgenlerinde radyasyon dozu son derece düşüktür. Tek bir dijital panoramik röntgenle alınan radyasyon, doğal çevreden bir günde alınan radyasyona eşdeğerdir. Hamilelerde koruyucu önlemler alınarak gerekli durumlarda röntgen çekilebilir."
    },
    {
      question: "Oral diagnoz nedir ve neden önemlidir?",
      answer: "Oral diagnoz, ağız ve diş sağlığı problemlerinin klinik ve radyolojik yöntemlerle teşhis edilmesi sürecidir. Doğru teşhis, etkili tedavi planlaması için kritik öneme sahiptir. Gizli çürükler, kemik kaybı, gömük dişler gibi klinik muayenede görülemeyen problemler ancak radyolojik görüntüleme ile tespit edilebilir."
    },
    {
      question: "CBCT (3D tomografi) hangi durumlarda çekilir?",
      answer: "Dental tomografi (CBCT); implant planlaması, gömük dişlerin konumunun belirlenmesi, çene kist/tümörlerinin değerlendirilmesi, karmaşık kök kanal vakaları ve ortodontik tedavi planlaması gibi durumlarda kullanılır. Geleneksel röntgenlerden farklı olarak üç boyutlu görüntüleme sağlar."
    }
  ];

  return (
    <div className="oral-diagnoz-radyoloji">
      <Helmet>
        <title>Oral Diagnoz ve Radyoloji | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Dijital panoramik röntgen, periapikal görüntüleme, dental tomografi (CBCT) ile kesin teşhis. Gelişmiş görüntüleme teknolojileriyle ağız ve diş sağlığı problemlerinin doğru teşhisi." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Oral Diagnoz ve Radyoloji</h1>
          <p>Gelişmiş görüntüleme teknolojileriyle ağız ve diş sağlığı problemlerinin kesin teşhisi. Dijital röntgen, panoramik görüntüleme ve dental tomografi (CBCT) ile güvenilir tanı.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/OralDiagnozveRadyoloji.jpg" alt="Dijital diş röntgeni uygulaması" />
            <div className="service-intro-text">
              <h2>Doğru Teşhis, Başarılı Tedavinin İlk Adımıdır</h2>
              <p>Oral diagnoz ve radyoloji, diş hekimliğinde doğru teşhis koymanın temel taşıdır. Kliniğimizde dijital görüntüleme sistemleri kullanılarak yapılan radyolojik incelemeler, klinik muayene bulgularıyla birleştirilerek hastalarımıza en doğru tanı ve tedavi planlaması sunulmaktadır.</p>
              <p>Düşük radyasyonlu dijital sistemlerimizle güvenli, hızlı ve yüksek çözünürlüklü görüntüleme yapıyoruz. Panoramik röntgenden dental tomografiye (CBCT) kadar geniş bir görüntüleme yelpazesi sunuyoruz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Radyolojik Görüntüleme Yöntemlerimiz</h2>
          <div className="info-boxes">
            <div className="info-box">
     
              <h3>Dijital Panoramik Röntgen</h3>
              <p>Tüm dişlerin, çene kemiklerinin ve çene ekleminin tek bir görüntüde değerlendirilmesini sağlar. Gömük dişler, kistler ve genel diş yapısının incelenmesi için idealdir.</p>
            </div>
            
            <div className="info-box">
        
              <h3>Periapikal Röntgen</h3>
              <p>Tek diş ve kök çevresi kemik dokusunun detaylı incelenmesi için kullanılır. Kök ucu lezyonları ve diş eti hastalıklarının teşhisinde önemlidir.</p>
            </div>
            
            <div className="info-box">
              <h3>Bite-Wing Röntgen</h3>
              <p>Üst ve alt dişlerin bir arada görüldüğü bu röntgen tipi, dişler arası gizli çürüklerin ve dolguların değerlendirilmesinde kullanılır.</p>
            </div>
            
            <div className="info-box">
             
              <h3>Dental Tomografi (CBCT)</h3>
              <p>Üç boyutlu görüntüleme sağlayan bu sistem, implant planlaması ve karmaşık cerrahi işlemler öncesinde kritik bilgiler sunar.</p>
            </div>
            
            <div className="info-box">
        
              <h3>Sefalometrik Röntgen</h3>
              <p>Ortodontik tedavi planlamasında kullanılan, kafa ve çene yapısını analiz etmeye yarayan özel bir röntgen tekniğidir.</p>
            </div>
            
            <div className="info-box">
            
              <h3>İntraoral Kamera</h3>
              <p>Yüksek çözünürlüklü dijital kameralarla dişlerin ve ağız dokularının detaylı görüntülenmesini sağlar.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Teşhis Sürecimiz</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Klinik Muayene</h3>
                <p>Hastanın şikayetleri dinlenir, ağız içi ve dışı detaylı bir klinik muayene yapılır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Görüntüleme İhtiyacının Belirlenmesi</h3>
                <p>Muayene bulgularına göre hangi radyolojik yöntemin gerekli olduğuna karar verilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Radyolojik İnceleme</h3>
                <p>Dijital görüntüleme sistemleriyle yüksek kaliteli görüntüler elde edilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Bilgisayarlı Analiz</h3>
                <p>Görüntüler bilgisayar ortamında detaylı olarak incelenir, ölçümler yapılır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Teşhis ve Tedavi Planlaması</h3>
                <p>Klinik ve radyolojik bulgular birleştirilerek kesin teşhis konur ve tedavi planı oluşturulur.</p>
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
            <h2>Kesin Teşhis İçin Gelişmiş Görüntüleme Teknolojileri</h2>
            <p>Diş ve çene problemlerinizin doğru teşhisi için uzman radyoloji ekibimizle hizmetinizdeyiz.</p>
    
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
        .oral-diagnoz-radyoloji {
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
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hizmetler/oral-diagnoz-header.jpg');
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

export default OralDiagnozRadyoloji;