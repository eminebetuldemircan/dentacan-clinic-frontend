import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaPhoneAlt, 
  FaExclamationTriangle, 
  FaClock, 
  FaTooth, 
  FaTeeth, 
  FaTeethOpen, 
  FaBandAid, 
  FaSyringe,
  FaProcedures,
  FaClinicMedical
} from 'react-icons/fa';

const AcilTedavi = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Veri yapıları
  const faqData = [
    {
      question: "Gece yarısı diş ağrısı için ne yapmalıyım?",
      answer: "Ilık tuzlu su gargarası yapın, diş ipiyle temizleyin, ağrı kesici alın (aspirin hariç). Ağrıyan dişe aspirin veya alkol uygulamayın. Şiddetli ağrı ve şişlik varsa hemen arayın."
    },
    {
      question: "Yerinden çıkan diş nasıl korunmalı?",
      answer: "Dişi kökünden tutmayın. Süt içinde veya ağızda saklayın. Temizlemeye çalışmayın. En geç 1 saat içinde kliniğe ulaşın."
    },
    {
      question: "Acil servis ücretleri farklı mı?",
      answer: "Acil müdahaleler normal ücretlendirmeye tabidir. SGK anlaşmalı hastalar için acil tedaviler kapsam dahilindedir."
    }
  ];

  const emergencyData = [
    {
    
      title: "Şiddetli Diş Ağrısı",
      desc: "Ani başlayan dayanılmaz ağrılara acil müdahale"
    },
    {
     
      title: "Diş Kırılması",
      desc: "Travma sonucu kırılan dişler için acil tedavi"
    },
    {
   
      title: "Diş Enfeksiyonu",
      desc: "Apse ve enfeksiyonlarda acil müdahale"
    },
    {
     
      title: "Kanama Kontrolü",
      desc: "Diş çekimi sonrası uzun süren kanamalar"
    },
    {
      
      title: "Protez Sorunları",
      desc: "Kırık protez ve vuruk yaraları tedavisi"
    },
    {
      
      title: "Ortodontik Aciller",
      desc: "Braket kopması ve tel batmaları"
    }
  ];

  const procedureData = [
    {
      durum: "Diş Kırılması",
      yapilacak: "Kırık parçaları saklayın, gazlı bezle basınç uygulayın",
      yapilmayacak: "Kırık parçaları atmayın, köke dokunmayın"
    },
    {
      durum: "Dişin Çıkması",
      yapilacak: "Dişi süt/tükürükte saklayın, 1 saat içinde gelin",
      yapilmayacak: "Dişi kökünden tutmayın, temizlemeyin"
    },
    {
      durum: "Şiddetli Ağrı",
      yapilacak: "Tuzlu su gargarası, ağrı kesici (aspirin hariç)",
      yapilmayacak: "Aspirin kullanmayın, sıcak uygulamayın"
    }
  ];

  const workingHours = [
    { gun: "Pzt-Cuma", saat: "08:30 - 17:30" },
    { gun: "Pzt-Cuma Akşam", saat: "17:30 - 23:00", not: "Nöbetçi" },
    { gun: "Hafta Sonu", saat: "08:30 - 23:00", not: "Nöbetçi" }
  ];

  return (
    <div className="acil-tedavi">
      <Helmet>
        <title>Acil Diş Tedavisi | Dentacan Diş Kliniği</title>
        <meta name="description" content="7/24 acil diş tedavisi hizmeti. Şiddetli ağrı, diş kırılması, enfeksiyon gibi acil durumlarda hemen yardım." />
      </Helmet>

      {/* Hero Banner */}
      <section className="acil-hero">
        <div className="container">
          <h1>Acil Diş Tedavi Hizmeti</h1>
          <p>Ani diş ağrıları ve acil müdahale gerektiren durumlarda 7/24 hizmetinizdeyiz</p>
          <a href="tel:+905551234567" className="acil-buton">
            <FaPhoneAlt /> ACİL ÇAĞRI: 0555 123 45 67
          </a>
        </div>
      </section>

      {/* Ana İçerik */}
      <main className="acil-icerik">
        <div className="container">
          {/* Giriş Bölümü */}
          <section className="acil-giris">
            <div className="acil-giris-resim">
              <img src="/images/Anasayfa/Hizmetler/AcilTedavi.jpg" alt="Acil diş tedavisi" />
            </div>
            <div className="acil-giris-yazi">
              <h2>Acil Diş Problemleriniz İçin Nöbetçi Hekimlerimizle Hizmetinizdeyiz</h2>
              <p>Dentacan Kliniği olarak, normal çalışma saatleri dışında da acil dental problemleriniz için nöbetçi diş hekimi hizmeti sunuyoruz. Ani diş ağrıları, travma sonucu diş kırılmaları, enfeksiyonlar ve diğer acil durumlarda hemen müdahale ediyoruz.</p>
              <div className="acil-uyari">
                <FaExclamationTriangle />
                <p><strong>Acil durumlarda lütfen önce telefonla bilgi veriniz.</strong></p>
              </div>
            </div>
          </section>

          {/* Uyarı Kutusu */}
          <div className="acil-uyari-kutu">
            <h3><FaExclamationTriangle /> Acil Müdahale Gerektiren Durumlar</h3>
            <ul>
              <li>Şiddetli ve geçmeyen diş ağrısı</li>
              <li>Yüzde/diş etinde şişlik</li>
              <li>Travma sonucu diş kırılması/çıkması</li>
              <li>Kontrol edilemeyen kanama</li>
              <li>Dental abse ve enfeksiyonlar</li>
            </ul>
          </div>

          {/* Hizmetler */}
          <section className="acil-hizmetler">
            <h2>Acil Diş Tedavi Hizmetlerimiz</h2>
            <div className="hizmet-grid">
              {emergencyData.map((hizmet, index) => (
                <div className="hizmet-kart" key={index}>
                  <div className="hizmet-icon">{hizmet.icon}</div>
                  <h3>{hizmet.title}</h3>
                  <p>{hizmet.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Çalışma Saatleri */}
          <section className="calisma-saatleri">
            <h2><FaClock /> Acil Servis Çalışma Saatleri</h2>
            <div className="saatler-grid">
              {workingHours.map((saat, index) => (
                <div className="saat-kutu" key={index}>
                  <h4>{saat.gun}</h4>
                  <p>{saat.saat} {saat.not && <span>{saat.not}</span>}</p>
                </div>
              ))}
            </div>
            <p className="not">* Nöbetçi hekim hizmeti sadece acil durumlar içindir</p>
          </section>

          {/* Acil Prosedürler */}
          <section className="acil-prosedur">
            <h2>Acil Durumlarda Yapılması Gerekenler</h2>
            <div className="prosedur-tablo">
              <table>
                <thead>
                  <tr>
                    <th>Durum</th>
                    <th>Yapılacaklar</th>
                    <th>Yapılmayacaklar</th>
                  </tr>
                </thead>
                <tbody>
                  {procedureData.map((prosedur, index) => (
                    <tr key={index}>
                      <td>{prosedur.durum}</td>
                      <td>{prosedur.yapilacak}</td>
                      <td>{prosedur.yapilmayacak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SSS */}
          <section className="acil-sss">
            <h2>Sık Sorulan Sorular</h2>
            <div className="sss-listesi">
              {faqData.map((sss, index) => (
                <div className={`sss-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                  <div className="sss-soru" onClick={() => toggleFaq(index)}>
                    <h3>{sss.question}</h3>
                    {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {activeFaq === index && (
                    <div className="sss-cevap">
                      <p>{sss.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="acil-cta">
            <h2>Acil Diş Probleminiz Mi Var?</h2>
            <p>Hemen kliniğimizi arayın, nöbetçi diş hekimlerimiz size yardımcı olsun</p>
          </section>
        </div>
      </main>

      <style jsx>{`
        /* Temel Stiller */
        :root {
          --kirmizi: #e74c3c;
          --kirmizi-koyu: #c0392b;
          --mavi: #3498db;
          --koyu: #2c3e50;
          --acik: #ecf0f1;
          --gri: #95a5a6;
        }
        
        .acil-tedavi {
          font-family: 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background: #f9f9f9;
        }
        
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        /* Hero Bölümü */
        .acil-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('/images/hizmetler/acil-dis-banner.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          padding: 100px 0;
        }
        
        .acil-hero h1 {
          font-size: 2.8rem;
          margin-bottom: 20px;
        }
        
        .acil-hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 30px;
        }
        
        .acil-buton {
          display: inline-block;
          padding: 15px 30px;
          background-color: var(--kirmizi);
          color: white;
          font-weight: bold;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid white;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .acil-buton:hover {
          background-color: var(--kirmizi-koyu);
        }
        
        /* Giriş Bölümü */
        .acil-giris {
          display: flex;
          gap: 40px;
          margin: 60px 0;
          align-items: center;
        }
        
        .acil-giris-resim {
          flex: 1;
        }
        
        .acil-giris-resim img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .acil-giris-yazi {
          flex: 1;
        }
        
        .acil-giris-yazi h2 {
          color: var(--koyu);
          font-size: 1.8rem;
          margin-bottom: 20px;
        }
        
        .acil-uyari {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--kirmizi);
          margin-top: 30px;
        }
        
        /* Uyarı Kutusu */
        .acil-uyari-kutu {
          background: #ffebee;
          border-left: 5px solid var(--kirmizi);
          padding: 25px;
          margin: 40px 0;
          border-radius: 0 8px 8px 0;
        }
        
        .acil-uyari-kutu h3 {
          color: var(--kirmizi);
          margin-top: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .acil-uyari-kutu ul {
          padding-left: 20px;
        }
        
        .acil-uyari-kutu li {
          margin-bottom: 10px;
        }
        
        /* Hizmetler */
        .acil-hizmetler {
          margin: 60px 0;
        }
        
        .acil-hizmetler h2 {
          text-align: center;
          color: var(--koyu);
          margin-bottom: 40px;
          position: relative;
        }
        
        .acil-hizmetler h2:after {
          content: '';
          position: absolute;
          width: 80px;
          height: 3px;
          background: var(--kirmizi);
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .hizmet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .hizmet-kart {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s;
          text-align: center;
        }
        
        .hizmet-kart:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .hizmet-icon {
          font-size: 2.5rem;
          color: var(--kirmizi);
          margin-bottom: 20px;
        }
        
        .hizmet-kart h3 {
          color: var(--kirmizi);
          margin-bottom: 15px;
        }
        
        /* Çalışma Saatleri */
        .calisma-saatleri {
          background: white;
          padding: 40px;
          border-radius: 10px;
          margin: 60px 0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .calisma-saatleri h2 {
          text-align: center;
          color: var(--koyu);
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        
        .saatler-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .saat-kutu {
          background: var(--acik);
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        
        .saat-kutu h4 {
          color: var(--kirmizi);
          margin-top: 0;
        }
        
        .saat-kutu span {
          background: var(--kirmizi);
          color: white;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .not {
          text-align: center;
          color: var(--gri);
          margin-top: 30px;
          font-size: 0.9rem;
        }
        
        /* Prosedür Tablosu */
        .acil-prosedur {
          margin: 60px 0;
        }
        
        .acil-prosedur h2 {
          text-align: center;
          color: var(--koyu);
          margin-bottom: 40px;
        }
        
        .prosedur-tablo table {
          width: 100%;
          border-collapse: collapse;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .prosedur-tablo th {
          background: var(--kirmizi);
          color: white;
          padding: 15px;
          text-align: left;
        }
        
        .prosedur-tablo td {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .prosedur-tablo tr:nth-child(even) {
          background: #f9f9f9;
        }
        
        /* SSS */
        .acil-sss {
  background: #fff7f7;
  padding: 60px 40px;
  border-radius: 16px;
  margin: 60px 0;
  box-shadow: 0 8px 24px rgba(255, 0, 0, 0.08);
  border-left: 8px solid var(--kirmizi);
  transition: all 0.3s ease;
}

.acil-sss h2 {
  text-align: center;
  color: var(--kirmizi);
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 700;
}

.sss-listesi {
  max-width: 800px;
  margin: 0 auto;
}

.sss-item {
  margin-bottom: 16px;
  border: 1px solid #ffe5e5;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #fff;
}

.sss-item.active {
  border-color: var(--kirmizi);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.1);
}

.sss-soru {
  padding: 20px 24px;
  background: #fff0f0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}

.sss-soru:hover {
  background: #ffecec;
}

.sss-soru h3 {
  margin: 0;
  font-size: 18px;
  color: var(--koyu);
}

.sss-cevap {
  padding: 20px 24px;
  background: white;
  border-top: 1px solid #ffe5e5;
  animation: fadeIn 0.3s ease-in-out;
  color: #444;
  line-height: 1.6;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

        
        /* CTA */
        .acil-cta {
          text-align: center;
          padding: 80px 0;
          background: linear-gradient(135deg, var(--kirmizi), var(--kirmizi-koyu));
          color: white;
          border-radius: 10px;
          margin-bottom: 60px;
        }
        
        .acil-cta h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        
        .acil-cta p {
          max-width: 700px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
        }
        
        .cta-buton {
          display: inline-block;
          padding: 15px 40px;
          background: white;
          color: var(--kirmizi);
          font-weight: bold;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s;
        }
        
        .cta-buton:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .acil-giris {
            flex-direction: column;
          }
          
          .acil-hero h1 {
            font-size: 2.2rem;
          }
          
          .hizmet-grid {
            grid-template-columns: 1fr;
          }
          
          .acil-sss {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default AcilTedavi;