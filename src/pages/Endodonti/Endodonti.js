import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaTeeth, FaTeethOpen, FaSyringe, FaXRay, FaMedal, FaClock } from 'react-icons/fa';

const Endodonti = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Kanal tedavisi nedir ve neden yapılır?",
      answer: "Kanal tedavisi, dişin pulpa (sinir) dokusunun enfekte olduğu veya hasar gördüğü durumlarda uygulanan bir tedavi yöntemidir. Dişin içindeki enfekte dokular temizlenir, kanallar şekillendirilir ve doldurulur. Böylece doğal diş kurtarılır ve çekim önlenir."
    },
    {
      question: "Kanal tedavisi ağrılı bir işlem midir?",
      answer: "Modern diş hekimliği teknikleri ve lokal anestezi sayesinde kanal tedavisi artık ağrısız bir işlemdir. Tedavi sırasında hasta genellikle rahatsızlık hissetmez. Tedavi sonrası oluşabilecek hafif hassasiyet ise birkaç gün içinde geçer."
    },
    {
      question: "Kanal tedavisi yapılan diş ömrü ne kadardır?",
      answer: "Uygun şekilde yapılmış bir kanal tedavisi ve sonrasında iyi bir ağız bakımı ile diş ömür boyu kullanılabilir. Ancak kanal tedavisi görmüş dişler kırılmaya daha yatkın olduğundan genellikle kaplama (kuron) ile korunmaları önerilir."
    },
    {
      question: "Kanal tedavisi kaç seans sürer?",
      answer: "Çoğu kanal tedavisi 1-2 seansta tamamlanır. Ancak enfeksiyonun şiddetine, dişin durumuna ve tedaviye verdiği yanıta göre bu süre değişebilir. Kliniğimizde tek seanslık kanal tedavisi de mümkündür."
    }
  ];

  return (
    <div className="endodonti-tedavisi">
      <Helmet>
        <title>Endodonti (Kanal Tedavisi) | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Ağrısız ve etkili kanal tedavisi uygulamaları. Dişlerinizi kaybetmeden kurtarma şansı. Mikroskop altında modern kanal tedavisi teknikleri." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Endodonti (Kanal Tedavisi)</h1>
          <p>Doğal dişlerinizi korumak için son şans: Ağrısız ve etkili kanal tedavisi uygulamaları. Mikroskop altında modern tekniklerle dişlerinizi kurtarma şansı.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/KanalTedavi.jpg" alt="Kanal tedavisi uygulaması" />
            <div className="service-intro-text">
              <h2>Dişlerinizi Kaybetmeden Kurtarma Şansı</h2>
              <p>Endodonti, dişin pulpa (sinir) dokusunu ve diş köklerini içeren hastalıkların teşhis ve tedavisi ile ilgilenen diş hekimliği dalıdır. Kanal tedavisi, enfekte olmuş veya hasar görmüş diş pulpasının çıkarılarak dişin kurtarılması işlemidir.</p>
              <p>Kliniğimizde dental mikroskop ve modern endodonti ekipmanları kullanılarak, yüksek başarı oranıyla kanal tedavileri gerçekleştirilmektedir.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Endodonti Uygulamalarımız</h2>
          <div className="info-boxes">
            <div className="info-box">

              <h3>Rutin Kanal Tedavisi</h3>
              <p>Enfekte diş pulpasının çıkarılması, kanalların temizlenmesi ve doldurulması işlemi. Çoğu diş 1-2 seansta tedavi edilir.</p>
            </div>
            
            <div className="info-box">

              <h3>Retreatment (Yeniden Kanal Tedavisi)</h3>
              <p>Başarısız olmuş eski kanal tedavilerinin mikroskop altında yeniden yapılması. Kök ucundaki enfeksiyonların tedavisi.</p>
            </div>
            
            <div className="info-box">

              <h3>Apikal Rezeksiyon</h3>
              <p>Kök ucu enfeksiyonlarında cerrahi müdahale. Dişin kök ucunun küçük bir kısmının çıkarılması işlemi.</p>
            </div>
            
            <div className="info-box">

              <h3>Mikroskop Altında Kanal Tedavisi</h3>
              <p>Dental mikroskop ile yüksek büyütme altında detaylı kanal tedavisi. Özellikle dar ve kıvrımlı kanallar için ideal.</p>
            </div>
            
            <div className="info-box">

              <h3>Vital Pulpa Tedavileri</h3>
              <p>Erken dönemdeki pulpa hasarlarında dişin canlılığını koruyarak yapılan tedaviler. Parsiyal pulpa tedavisi gibi yöntemler.</p>
            </div>
            
            <div className="info-box">
       
              <h3>Kanal İçi Post Uygulamaları</h3>
              <p>Madde kaybı fazla olan dişlerde kanal içine post yerleştirilerek dişin restorasyonu için destek oluşturulması.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Tedavi Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Teşhis ve Radyografik İnceleme</h3>
                <p>Dişin durumunun klinik muayene ve dijital röntgenlerle değerlendirilmesi. Tedavi planının oluşturulması.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Anestezi ve İzolasyon</h3>
                <p>Dişin uyuşturulması ve çalışma alanının lastik örtü (rubber dam) ile izole edilmesi.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Pulpa Odasının Açılması</h3>
                <p>Dişin üst kısmından pulpa odasına ulaşım sağlanması. Enfekte dokunun çıkarılması.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Kanal Temizliği ve Şekillendirme</h3>
                <p>Kök kanallarının özel aletlerle temizlenmesi, genişletilmesi ve dezenfekte edilmesi.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Kanal Doldurma ve Restorasyon</h3>
                <p>Kök kanallarının özel dolgu maddeleri ile doldurulması ve dişin üst kısmının restore edilmesi.</p>
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
            <h2>Diş Ağrınız mı Var? Kanal Tedavisi ile Dişinizi Kurtarabiliriz</h2>
            <p>Modern tekniklerle ağrısız kanal tedavisi deneyimi için uzman endodontistlerimizle tanışın.</p>

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
        
        .endodonti-tedavisi {
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
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hizmetler/kanal-tedavisi-header.jpg');
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

export default Endodonti;