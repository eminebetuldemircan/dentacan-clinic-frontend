import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faChevronUp,
  faTooth,
  faCalendarAlt,
  faClock,
  faUserMd
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 180, 216, 0.8), rgba(0, 180, 216, 0.8)), 
              url('/images/hizmetler/beyazlatma-hero.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 40px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 30px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #00b4d8;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContentSection = styled.section`
  display: flex;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContentImage = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ContentText = styled.div`
  flex: 1;

  h2 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;

  h3 {
    color: #00b4d8;
    font-size: 1.5rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;

  .step-number {
    background-color: #00b4d8;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 20px;
    flex-shrink: 0;
  }

  .step-content {
    h4 {
      margin: 0 0 10px 0;
      color: #2c3e50;
    }
    
    p {
      color: #666;
      margin: 0;
    }
  }
`;

const FAQSection = styled.section`
  background-color: #f8f9fa;
  padding: 60px 20px;
  border-radius: 10px;
  margin-bottom: 60px;

  h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
    font-size: 2rem;
  }
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 15px;
`;

const FAQQuestion = styled.div`
  padding: 20px;
  background-color: #00b4d8;
  color: white;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? '20px' : '0 20px'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;

  p {
    margin: 0;
    color: #555;
    line-height: 1.7;
  }
`;

const CtaSection = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #00b4d8, #0096c7);
  color: white;
  border-radius: 10px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
  }
`;

// Component
const DisBeyazlatma = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Diş beyazlatma işlemi ağrılı mıdır?",
      answer: "Beyazlatma işlemi genellikle ağrısızdır. Bazı hassas bünyelerde işlem sonrası geçici bir hassasiyet oluşabilir. Bu durumda hekiminizin önereceği hassasiyet giderici ürünler kullanılabilir."
    },
    {
      question: "Herkes diş beyazlatma yaptırabilir mi?",
      answer: "18 yaş altındaki bireylerde, hamilelerde ve emziren annelerde beyazlatma önerilmez. Ayrıca şiddetli diş eti problemi olanlar, çürük dişleri bulunanlar ve aşırı hassas diş yapısına sahip olanlar önce tedavi edilmelidir."
    },
    {
      question: "Beyazlatma işleminin etkisi ne kadar sürer?",
      answer: "Etki süresi kişinin beslenme alışkanlıklarına ve ağız bakımına bağlı olarak 1-3 yıl arasında değişir. Çay, kahve, sigara gibi leke yapıcı maddelerden uzak durmak ve düzenli diş bakımı yapmak beyazlatmanın etkisini uzatır."
    },
    {
      question: "Beyazlatma dişlere zarar verir mi?",
      answer: "Diş hekimi kontrolünde yapılan profesyonel beyazlatma işlemleri diş minesine zarar vermez. Ancak eczane veya internetten alınan kontrolsüz ürünler diş sağlığını tehdit edebilir."
    }
  ];

  return (
    <MainLayout>
      <Container>
        {/* Hero Section */}
        <HeroSection>
          <h1>Profesyonel Diş Beyazlatma</h1>
          <p>Güvenli ve etkili yöntemlerle 3-4 ton daha beyaz dişlere kavuşun. Kliniğimizde uygulanan profesyonel beyazlatma teknikleri ile doğal görünümlü, sağlıklı bir gülümseme.</p>
          
        </HeroSection>

        {/* Content Section */}
        <ContentSection>
          <ContentImage>
            <img src="/images/Anasayfa/Hizmetler/Beyazlatma.jpg" alt="Diş beyazlatma uygulaması" />
          </ContentImage>
          <ContentText>
            <h2>Neden Profesyonel Diş Beyazlatma?</h2>
            <p>Dişleriniz zamanla çay, kahve, sigara gibi etkenlerden dolayı renk değiştirebilir veya doğal olarak daha sarı/koyu renkli olabilir. Profesyonel diş beyazlatma işlemi ile dişlerinizin doğal rengini 3-4 ton açarak daha beyaz ve canlı bir görünüm kazandırabilirsiniz.</p>
            <p>Kliniğimizde uyguladığımız beyazlatma yöntemleri tamamen güvenlidir ve diş minesine zarar vermez. İşlem sonrası hassasiyet gibi yan etkiler minimum düzeydedir ve geçicidir.</p>
          </ContentText>
        </ContentSection>

        {/* Info Cards */}
        <InfoCard>
          <h3><FontAwesomeIcon icon={faClock} /> İşlem Süresi</h3>
          <p>Ofis tipi beyazlatma işlemi yaklaşık 45-60 dakika sürer. Ev tipi beyazlatmada ise 7-10 günlük bir uygulama periyodu önerilir.</p>
        </InfoCard>

        <InfoCard>
          <h3><FontAwesomeIcon icon={faTooth} /> Etki Süresi</h3>
          <p>Profesyonel beyazlatmanın etkisi 1-3 yıl sürebilir. Bu süre kişinin ağız bakım alışkanlıklarına ve beslenme düzenine göre değişiklik gösterebilir.</p>
        </InfoCard>

        <InfoCard>
          <h3><FontAwesomeIcon icon={faUserMd} /> Uygulanan Yöntemler</h3>
          <div>
            <ProcessStep>
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Ofis Tipi Beyazlatma (Lazerle)</h4>
                <p>Klinik ortamında tek seansta uygulanır. Özel bir ışık veya lazer kaynağı ile aktive edilen beyazlatma jeli kullanılır. Hızlı ve etkili sonuç alınır.</p>
              </div>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Ev Tipi Beyazlatma</h4>
                <p>Diş hekimi tarafından hazırlanan kişiye özel plaklar ve beyazlatma jelleri ile evde uygulanır. 7-10 gün süren bir tedavidir.</p>
              </div>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Kombine Beyazlatma</h4>
                <p>Ofis tipi ve ev tipi beyazlatmanın kombinasyonudur. En etkili sonuçlar bu yöntemle alınır. Önce klinikte uygulama yapılır, sonra ev tedavisi ile desteklenir.</p>
              </div>
            </ProcessStep>
          </div>
        </InfoCard>

        {/* FAQ Section */}
        <FAQSection>
          <h2>Sık Sorulan Sorular</h2>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
              </FAQQuestion>
              <FAQAnswer isOpen={activeIndex === index}>
                <p>{faq.answer}</p>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQSection>

        {/* CTA Section */}
        <CtaSection>
          <h2>Daha Beyaz Bir Gülüş İçin Randevu Alın</h2>
          <p>Uzman diş hekimlerimiz tarafından gerçekleştirilen profesyonel diş beyazlatma işlemi ile güvenle gülümseyin.</p>
          
        </CtaSection>
      </Container>
    </MainLayout>
  );
};

export default DisBeyazlatma;