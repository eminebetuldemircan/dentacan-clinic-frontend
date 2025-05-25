import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp, FaTooth, FaBone, FaClock, FaTeeth, FaTeethOpen, FaLaptopMedical } from 'react-icons/fa';

const OrtodontiTedavisi = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Ortodontik tedavi ne kadar sürer?",
      answer: "Tedavi süresi hastanın yaşına, dişlerindeki çapraşıklık derecesine ve kullanılan tedavi yöntemine göre değişir. Genellikle 6 ay ile 2,5 yıl arasında sürebilir. Yetişkinlerde tedavi süresi biraz daha uzun olabilir."
    },
    {
      question: "Yetişkinler de ortodontik tedavi görebilir mi?",
      answer: "Evet, dişleri ve çevre dokuları sağlıklı olan her yaştaki birey ortodontik tedavi görebilir. Yetişkinlerde tedavi süreci daha uzun sürebilir ancak sonuçlar çocuklardaki kadar başarılı olur."
    },
    {
      question: "Şeffaf plaklar (Invisalign) herkese uygun mudur?",
      answer: "Şeffaf plaklar hafif ve orta dereceli çapraşıklıklarda etkilidir. Ciddi ortodontik problemlerde geleneksel braketler daha uygun olabilir. Hekiminiz size en uygun yöntemi belirleyecektir."
    },
    {
      question: "Braketler dişlerime zarar verir mi?",
      answer: "Doğru uygulandığında ve hasta tarafından iyi bakım yapıldığında braketler dişlere zarar vermez. Ancak kötü ağız hijyeni durumunda diş eti problemleri ve çürükler oluşabilir."
    }
  ];

  return (
    <div className="ortodonti-tedavisi">
      <Helmet>
        <title>Ortodonti Tedavisi | Dentacan Ağız ve Diş Sağlığı Kliniği</title>
        <meta name="description" content="Çapraşık dişler ve çene problemlerine yönelik tedaviler. Görünmeyen braketler ve şeffaf plaklarla estetik çözümler. Profesyonel ortodontik tedavilerle sağlıklı ve düzgün dişlere kavuşun." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="service-header">
        <div className="container">
          <h1>Ortodonti Tedavisi</h1>
          <p>Çapraşık dişler ve çene problemlerine yönelik tedaviler. Görünmeyen braketler ve şeffaf plaklarla estetik çözümler. Profesyonel ortodontik tedavilerle sağlıklı ve düzgün dişlere kavuşun.</p>
        </div>
      </header>

      {/* İçerik */}
      <main className="service-content">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="service-intro">
            <img src="/images/Anasayfa/Hizmetler/Ortodonti.jpg" alt="Ortodonti tedavisi" />
            <div className="service-intro-text">
              <h2>Düzgün Dişler, Sağlıklı Gülüşler</h2>
              <p>Ortodonti, dişlerdeki çapraşıklıkların ve çene kemiklerindeki uyumsuzlukların teşhis ve tedavisi ile ilgilenen diş hekimliği dalıdır. Sadece estetik kaygılarla değil, aynı zamanda çiğneme fonksiyonlarının iyileştirilmesi ve ağız sağlığının korunması için de önemlidir.</p>
              <p>Kliniğimizde geleneksel metal braketlerden şeffaf plaklara (Invisalign), lingual (dil tarafına takılan) braketlerden seramik braketlere kadar geniş bir yelpazede ortodontik tedavi seçenekleri sunuyoruz.</p>
            </div>
          </section>

          {/* Bilgi Kutuları */}
          <h2 className="section-title">Ortodonti Tedavisi Hakkında</h2>
          <div className="info-boxes">
            <div className="info-box">
              <h3>Estetik Görünüm</h3>
              <p>Düzgün sıralanmış dişler özgüveninizi artırır ve daha çekici bir gülüşe kavuşmanızı sağlar.</p>
            </div>
            
            <div className="info-box">
              <h3>Diş Sağlığı</h3>
              <p>Çapraşık dişlerin temizlenmesi zordur. Düzgün dişler daha iyi ağız hijyeni sağlar.</p>
            </div>
            
            <div className="info-box">
              <h3>Çiğneme Fonksiyonu</h3>
              <p>Doğru kapanış, besinlerin daha iyi çiğnenmesini ve sindirim sisteminin daha sağlıklı çalışmasını sağlar.</p>
            </div>
          </div>

          {/* Uygulamalar */}
          <h2 className="section-title">Ortodonti Uygulamalarımız</h2>
          <div className="info-boxes">
            <div className="info-box">
              <h3>Metal Braketler</h3>
              <p>Geleneksel ve en etkili ortodontik tedavi yöntemi. Özellikle karmaşık vakalarda tercih edilir.</p>
            </div>
            
            <div className="info-box">
              <h3>Seramik Braketler</h3>
              <p>Diş renginde olduğu için metal braketlere göre daha az görünür. Estetik kaygısı olan hastalar için idealdir.</p>
            </div>
            
            <div className="info-box">
              <h3>Lingual Ortodonti</h3>
              <p>Braketler dişlerin arka yüzeyine uygulanır. Dışarıdan hiçbir şekilde görünmez.</p>
            </div>
            
            <div className="info-box">
              <h3>Şeffaf Plaklar (Invisalign)</h3>
              <p>Çıkarılabilir şeffaf plaklarla yapılan tedavi. Neredeyse görünmez ve yemek yerken çıkarılabilir.</p>
            </div>
            
            <div className="info-box">
              <h3>Erken Dönem Tedavileri</h3>
              <p>Çocuklarda çene gelişimini yönlendirerek ileride oluşabilecek ciddi problemleri önler.</p>
            </div>
            
            <div className="info-box">
              <h3>Ortognatik Cerrahi</h3>
              <p>Ciddi çene uyumsuzluklarında ortodonti ve cerrahi işbirliği ile yapılan tedaviler.</p>
            </div>
          </div>

          {/* Süreç Adımları */}
          <h2 className="section-title">Ortodonti Tedavi Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-content">
                <h3>Muayene ve Teşhis</h3>
                <p>Detaylı klinik muayene, fotoğraflar, ölçüler ve röntgenlerle problemler belirlenir. Kişiye özel tedavi planı oluşturulur.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Hazırlık Aşaması</h3>
                <p>Gerekirse diş çekimi veya dolgu gibi ön tedaviler yapılır. Ağız hijyeni kontrol edilir ve braketler hazırlanır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Braketlerin Yerleştirilmesi</h3>
                <p>Braketler dişlere özel yapıştırıcılarla sabitlenir. İlk birkaç gün alışma süreci olabilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Düzenli Kontroller</h3>
                <p>4-6 haftada bir kontroller yapılır. Teller ayarlanır ve tedavi ilerlemesi takip edilir.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Braketlerin Çıkarılması</h3>
                <p>Dişler istenen konuma geldiğinde braketler çıkarılır. Dişler temizlenir ve cilalanır.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-step-content">
                <h3>Pekiştirme Tedavisi</h3>
                <p>Dişlerin yeni pozisyonlarında kalması için pekiştirme apareyleri kullanılır. Bu süreç tedavi kadar önemlidir.</p>
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
            <h2>Güzel Bir Gülüş İçin İlk Adımı Atın</h2>
            <p>Uzman ortodontistlerimizle tanışın ve size özel tedavi planınızı oluşturalım.</p>
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
        
        .ortodonti-tedavisi {
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
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hizmetler/ortodonti-header.jpg');
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

export default OrtodontiTedavisi;