import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaSmile, FaToothbrush, FaShieldAlt, FaFlask, FaMedal } from 'react-icons/fa';

const KonservatifDisTedavisi = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Dolgu tedavisi acı verir mi?",
      answer: "Modern diş hekimliğinde dolgu işlemleri lokal anestezi altında yapıldığı için acı hissetmezsiniz. İşlem sonrasında hafif bir hassasiyet normaldir ve genellikle birkaç gün içinde geçer."
    },
    {
      question: "Amalgam dolgular mı yoksa kompozit dolgular mı daha iyi?",
      answer: "Kompozit dolgular günümüzde daha çok tercih edilmektedir çünkü diş renginde oldukları için estetiktirler ve dişe daha iyi yapışırlar. Amalgam dolgular ise dayanıklı olmasına rağmen içerdiği civa nedeniyle giderek daha az kullanılmaktadır."
    },
    {
      question: "Dolgu ne kadar süre dayanır?",
      answer: "Dolgunun ömrü kullanılan malzemeye, ağız bakımına ve kişinin alışkanlıklarına göre değişir. Ortalama 5-10 yıl dayanır. İyi bakılan kompozit dolgular 10 yıldan fazla dayanabilir."
    },
    {
      question: "Dolgu yaptırdıktan sonra nelere dikkat etmeliyim?",
      answer: "İlk 24 saat çok sıcak ve soğuk yiyeceklerden kaçının. Dolgu tam sertleşene kadar (özellikle kompozitler) 24 saat sert ve yapışkan gıdalar tüketmeyin. Düzenli fırçalama ve diş ipi kullanımına devam edin."
    }
  ];

  return (
    <div className="konservatif-dis-tedavisi">
      <Helmet>
        <title>Konservatif Diş Tedavisi (Dolgu) | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Çürük dişlerin koruyucu tedavisi, estetik dolgular, inley-onley uygulamaları. Dişin doğal yapısını koruyarak yapılan modern dolgu tedavileri." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Konservatif Diş Tedavisi (Dolgu Uygulaması)</h1>
          <p>Dişin doğal yapısını koruyarak çürüklerin temizlenmesi ve estetik dolgularla restore edilmesi. Gülüşünüzü sağlıkla koruyoruz.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/DişDolgusu.jpg" alt="Diş dolgu tedavisi uygulaması" />
            <div className="service-intro-text">
              <h2>Dişinizi Kaybetmeden Çürüklerden Kurtulun</h2>
              <p>Konservatif Diş Tedavisi, diş çürüklerinin temizlenerek dişin doğal yapısının korunması ve dolgu malzemeleri ile restore edilmesini içeren tedavilerdir. Amacımız, dişin mümkün olduğunca fazla doğal dokusunu koruyarak uzun ömürlü ve fonksiyonel bir restorasyon sağlamaktır.</p>
              <p>Kliniğimizde güncel teknolojiler ve yüksek kaliteli dolgu malzemeleri kullanılarak yapılan dolgu tedavileri sayesinde dişlerinizi kaybetmeden sağlıklı bir ağıza kavuşabilirsiniz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Dolgu Tedavisi Çeşitlerimiz</h2>
          <div className="info-boxes">
            <div className="info-box">
           
              <h3>Kompozit Dolgular</h3>
              <p>Diş rengindeki bu dolgular ön ve arka dişlerde mükemmel estetik sonuçlar verir. Tek seansta uygulanabilir.</p>
            </div>
            
            <div className="info-box">
       
              <h3>Inley-Onley Dolgular</h3>
              <p>Laboratuvarda özel olarak hazırlanan porselen dolgular. Büyük çürüklerde dişin dayanıklılığını artırır.</p>
            </div>
            
            <div className="info-box">
      
              <h3>Amalgam Dolgular</h3>
              <p>Yüksek dayanıklılık istenen arka dişlerde kullanılan metal alaşımlı dolgular (tercih edilme oranı azalmıştır).</p>
            </div>
            
            <div className="info-box">
          
              <h3>Cam İyonomer Dolgular</h3>
              <p>Flor salınımı yapabilen bu dolgular çocuk dişlerinde ve kök yüzeyi çürüklerinde tercih edilir.</p>
            </div>
            
            <div className="info-box">
 
              <h3>Kompomer Dolgular</h3>
              <p>Kompozit ve cam iyonomer karışımı dolgular. Çocuk dişlerinde ve geçici restorasyonlarda kullanılır.</p>
            </div>
            
            <div className="info-box">
  
              <h3>Estetik Dolgular</h3>
              <p>Ön dişlerde mükemmel renk uyumu sağlayan, gülüş hattını doğal şekilde tamamlayan dolgular.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Dolgu Tedavi Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Muayene ve Teşhis</h3>
                <p>Detaylı klinik muayene ve gerekirse radyografik inceleme ile çürüğün boyutu değerlendirilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Anestezi ve Çürük Temizliği</h3>
                <p>Lokal anestezi altında çürük dokular özel aletlerle temizlenir, sağlam diş dokusu korunur.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Kavite Hazırlığı</h3>
                <p>Dolgu için uygun şekilde boşluk hazırlanır, gerekirse dişe bağlantı elemanları yerleştirilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Dolgu Uygulaması</h3>
                <p>Seçilen dolgu malzemesi katmanlar halinde uygulanır, özel ışıkla sertleştirilir ve şekillendirilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Bitim İşlemleri</h3>
                <p>Dolgu düzeltilir, ısırma kontrolü yapılır ve cilalanarak son şekli verilir.</p>
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
            <h2>Sağlıklı Dişler İçin Uzman Hekimlerimizle Tanışın</h2>
            <p>Çürüklerinizden kurtulun, doğal dişlerinizi koruyun ve gülüşünüzü güvenle sergileyin.</p>

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
        
        .konservatif-dis-tedavisi {
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
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hizmetler/dolgu-header.jpg');
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

export default KonservatifDisTedavisi;