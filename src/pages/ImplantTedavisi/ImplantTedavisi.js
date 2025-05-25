import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaBone, FaClock, FaTeeth, FaTeethOpen, FaLaptopMedical } from 'react-icons/fa';

const ImplantTedavisi = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "İmplant ağrılı bir işlem midir?",
      answer: "İmplant işlemi lokal anestezi altında yapıldığı için ağrı hissedilmez. İşlem sonrası birkaç gün sürebilen hafif ağrı ve şişlik normaldir, bu durum ağrı kesicilerle kontrol altına alınabilir."
    },
    {
      question: "İmplant herkese uygulanabilir mi?",
      answer: "Kontrolsüz diyabet, kemik erimesi (osteoporoz) gibi sistemik hastalığı olanlar ve yeterli kemik dokusu bulunmayan bazı hastalarda ek tedaviler gerekebilir. Detaylı muayene sonrası uygunluk belirlenir."
    },
    {
      question: "İmplantın ömrü ne kadardır?",
      answer: "Düzenli ağız bakımı ve hekim kontrolleriyle implantlar ömür boyu kullanılabilir. Protez kısımlarının ise 10-15 yılda bir yenilenmesi gerekebilir."
    },
    {
      question: "İmplant sonrası bakım nasıl olmalı?",
      answer: "Doğal dişler gibi düzenli fırçalanmalı, diş ipi ve arayüz fırçası kullanılmalıdır. Yılda en az iki kez diş hekimi kontrolü önerilir. Sigara kullanımı implant başarısını olumsuz etkiler."
    }
  ];

  return (
    <div className="implant-tedavisi">
      <Helmet>
        <title>İmplant Tedavisi | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Kaybettiğiniz dişlerin yerine titanyum vidalarla doğal görünümlü ve işlevsel çözümler. Kemikle bütünleşen implantlar ile sağlıklı ve kalıcı dişlere kavuşun." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>İmplant Tedavisi</h1>
          <p>Kaybettiğiniz dişlerin yerine titanyum vidalarla doğal görünümlü ve işlevsel çözümler. Kemikle bütünleşen implantlar ile sağlıklı ve kalıcı dişlere kavuşun.</p>
      
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/İmplant.jpg" alt="İmplant uygulaması" />
            <div className="service-intro-text">
              <h2>Kalıcı ve Doğal Diş Çözümü</h2>
              <p>İmplant, eksik dişlerin yerine çene kemiğine yerleştirilen titanyum vidalardır. Zamanla kemikle bütünleşerek doğal diş kökü gibi işlev görür ve üzerine yapılan protezlerle estetik ve fonksiyonel bir çözüm sunar.</p>
              <p>Kliniğimizde dijital implant planlaması ile en doğru pozisyonda implant yerleştirilmesini sağlıyor, cerrahi rehberler kullanarak güvenli ve başarılı operasyonlar gerçekleştiriyoruz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">İmplant Tedavisi Hakkında</h2>
          <div className="info-boxes">
            <div className="info-box">
          
              <h3>Doğal Görünüm</h3>
              <p>İmplant üzerine yapılan protezler doğal dişler gibi görünür ve hissettirir. Konuşma ve çiğneme fonksiyonlarınızı geri kazandırır.</p>
            </div>
            
            <div className="info-box">
            
              <h3>Kemik Koruma</h3>
              <p>Diş kaybı sonrası oluşan kemik erimesini önler, yüz şeklinizin korunmasına yardımcı olur.</p>
            </div>
            
            <div className="info-box">
          
              <h3>Uzun Ömürlü</h3>
              <p>Düzenli bakım ve kontrollerle implantlar ömür boyu kullanılabilir. En uzun ömürlü diş tedavi seçeneğidir.</p>
            </div>
          </div>

          {/* Uygulamalar */}
          <h2 className="section-title">İmplant Uygulamalarımız</h2>
          <div className="info-boxes">
            <div className="info-box">
           
              <h3>Standart İmplant</h3>
              <p>Tek diş eksikliklerinde veya birden fazla diş kaybında uygulanan, kemik yapısı uygun hastalar için ideal çözüm.</p>
            </div>
            
            <div className="info-box">
           
              <h3>Zirkonyum İmplant</h3>
              <p>Metal alerjisi olanlar için titanyum yerine zirkonyum kullanılan, yüksek biyouyumlu implant sistemleri.</p>
            </div>
            
            <div className="info-box">
           
              <h3>Kemik Greftli İmplant</h3>
              <p>Yetersiz kemik dokusu olan hastalarda kemik tozu veya blok greftlerle desteklenmiş implant uygulamaları.</p>
            </div>
            
            <div className="info-box">
          
              <h3>Same Day İmplant</h3>
              <p>Uygun vakalarda implant ve geçici dişlerin aynı gün içinde uygulanabildiği hızlı çözüm.</p>
            </div>
            
            <div className="info-box">
              
              <h3>All-on-4/All-on-6</h3>
              <p>Tam dişsiz hastalarda sadece 4 veya 6 implantla tüm çeneye sabit protez uygulaması.</p>
            </div>
            
            <div className="info-box">
            
              <h3>Dijital İmplant</h3>
              <p>3D tomografi ve bilgisayar destekli planlama ile en doğru implant pozisyonunun belirlenmesi.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">İmplant Tedavi Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Muayene ve Planlama</h3>
                <p>Detaylı ağız muayenesi ve 3D tomografi ile kemik yapısı değerlendirilir. Dijital implant planlaması yapılır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Cerrahi İşlem</h3>
                <p>Lokal anestezi altında implantlar çene kemiğine yerleştirilir. İşlem genellikle 30-60 dakika sürer.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>İyileşme Süreci</h3>
                <p>Osteointegrasyon denilen kemikle bütünleşme süreci beklenir (2-6 ay). Bu sürede geçici protez kullanılabilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Protez Uygulaması</h3>
                <p>İmplant kemikle bütünleştikten sonra ölçü alınır ve kişiye özel porselen dişler hazırlanarak uygulanır.</p>
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
            <h2>Eksik Dişleriniz Hayatınızı Kısıtlamasın</h2>
            <p>Uzman cerrahlarımız ve son teknoloji ekipmanlarımızla güvenle gülümsemenin tadını çıkarın.</p>
        
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
        
        .implant-tedavisi {
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
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hizmetler/implant-header.jpg');
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

export default ImplantTedavisi;