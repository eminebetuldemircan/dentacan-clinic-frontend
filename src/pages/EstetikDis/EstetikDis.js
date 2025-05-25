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
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

// Styled Components
const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const ServiceHeader = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('/images/hizmetler/estetik-dis-header.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
  
  h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 30px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: #00b4d8;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #0096c7;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceContent = styled.main`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 3px;
    background: #00b4d8;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ServiceIntro = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceImage = styled.img`
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceIntroText = styled.div`
  width: 50%;
  
  h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 20px;
    color: #7f8c8d;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const InfoBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  h3 {
    color: #00b4d8;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
`;

const ProcessSteps = styled.div`
  counter-reset: step;
  margin-bottom: 60px;
`;

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 30px;
  position: relative;
  padding-left: 100px;
  
  @media (max-width: 768px) {
    padding-left: 80px;
  }
  
  &:before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 60px;
    background: #00b4d8;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const ProcessStepContent = styled.div`
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
  
  h3 {
    margin-top: 0;
    color: #2c3e50;
  }
`;

const FaqSection = styled.section`
  background: #ecf0f1;
  padding: 60px 0;
  margin-bottom: 60px;
`;

const FaqItem = styled.div`
  margin-bottom: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
`;

const FaqQuestion = styled.div`
  padding: 20px;
  background: #00b4d8;
  color: white;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaqAnswer = styled.div`
  padding: ${props => props.isOpen ? '20px' : '0'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const ServiceCta = styled.section`
  text-align: center;
  padding: 60px 0;
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

// FAQ component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FaqItem>
      <FaqQuestion onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </FaqQuestion>
      <FaqAnswer isOpen={isOpen}>
        <p>{answer}</p>
      </FaqAnswer>
    </FaqItem>
  );
};

// Main component
const EstetikDis = () => {
  const faqs = [
    {
      question: "Estetik diş uygulamaları ağrılı mıdır?",
      answer: "Estetik diş uygulamaları genellikle minimal invaziv yöntemlerle yapıldığı için ağrısızdır. Bazı işlemlerde lokal anestezi uygulanır ve hasta herhangi bir rahatsızlık hissetmez."
    },
    {
      question: "Lamina yaptırdıktan sonra dişlerim doğal görünür mü?",
      answer: "Evet, modern lamina (yaprak porselen) uygulamalarında dişlerin doğal yapısı ve ışık geçirgenliği birebir taklit edilir. Uzman hekimlerimiz tarafından uygulanan lamineler doğal dişlerden ayırt edilemeyecek kadar gerçekçi görünür."
    },
    {
      question: "Estetik diş uygulamalarının ömrü ne kadardır?",
      answer: "Uygulamanın türüne göre değişmekle birlikte, iyi bakıldığında lamineler 10-15 yıl, bonding uygulamaları 5-7 yıl, zirkonyum kaplamalar ise 15 yıla kadar dayanabilir. Düzenli diş hekimi kontrolleri ve iyi bir ağız hijyeni uygulamanın ömrünü uzatır."
    },
    {
      question: "Estetik diş tedavileri sigara ve kahve lekelerine karşı dayanıklı mıdır?",
      answer: "Porselen yüzeyler oldukça düzgün ve sıkı bir yapıya sahip olduğundan lekelenmeye karşı doğal dişlerden daha dayanıklıdır. Ancak yine de sigara kullanımı ve aşırı kahve tüketimi uzun vadede renk değişimine neden olabilir."
    }
  ];

  return (
    <MainLayout>
      <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: 1.6, color: '#34495e' }}>
        <ServiceHeader>
          <Container>
            <h1>Estetik Diş Hekimliği</h1>
            <p>Gülüş tasarımından lamina uygulamalarına kadar estetik diş hekimliğinin tüm hizmetleri. Doğal ve sağlıklı bir gülümseme için uzman diş hekimlerimizle tanışın.</p>
        
          </Container>
        </ServiceHeader>

        <ServiceContent>
          <Container>
            {/* Giriş Bölümü */}
            <ServiceIntro>
              <ServiceImage src="/images/Anasayfa/Hizmetler/EstetikDiş.jpg" alt="Estetik diş uygulaması" />
              <ServiceIntroText>
                <h2>Estetik Diş Hekimliği Nedir?</h2>
                <p>Estetik diş hekimliği, dişlerin görünümünü iyileştirmeye yönelik tüm tedavi ve uygulamaları kapsar. Gülüş tasarımı, diş rengi, şekli, boyutu ve dizilimindeki kusurlar estetik diş hekimliği yöntemleriyle düzeltilebilir.</p>
                <p>Kliniğimizde uyguladığımız modern teknikler sayesinde doğal görünümlü, kişiye özel tasarlanmış ve uzun ömürlü estetik çözümler sunuyoruz.</p>
              </ServiceIntroText>
            </ServiceIntro>

            {/* Bilgi Kutuları */}
            <SectionTitle>Estetik Diş Uygulamaları</SectionTitle>
            <InfoBoxes>
              <InfoBox>
                <h3>Lamina (Yaprak Porselen)</h3>
                <p>Dişlerin ön yüzeyine uygulanan ince porselen yapraklardır. Dişlerin rengini, şeklini ve boyutunu değiştirerek mükemmel bir gülüş sağlar.</p>
              </InfoBox>
              
              <InfoBox>
                <h3>Zirkonyum Kaplama</h3>
                <p>Dayanıklı ve doğal görünümlü zirkonyum kaplamalar ile hem estetik hem de fonksiyonel dişlere kavuşabilirsiniz.</p>
              </InfoBox>
              
              <InfoBox>
                <h3>Gülüş Tasarımı</h3>
                <p>Dijital gülüş tasarımı ile hayalinizdeki gülümsemeye kavuşun. Önce bilgisayar ortamında tasarımınızı görün, sonra uygulamaya geçelim.</p>
              </InfoBox>
            </InfoBoxes>

            {/* Diğer Uygulamalar */}
            <SectionTitle>Diğer Estetik Uygulamalar</SectionTitle>
            <InfoBoxes>
              <InfoBox>
                <h3>Bonding (Kompozit Dolgu)</h3>
                <p>Kompozit reçine malzemesi kullanılarak dişlerin şekli ve rengi düzeltilebilir. Tek seansta uygulanabilen ekonomik bir çözümdür.</p>
              </InfoBox>
              
              <InfoBox>
                <h3>Diş Eti Estetiği</h3>
                <p>Gingivoplasti ve gingivektomi gibi yöntemlerle diş eti seviyeleri düzeltilerek daha dengeli bir gülüş elde edilir.</p>
              </InfoBox>
              
              <InfoBox>
                <h3>Invisalign (Şeffaf Plak)</h3>
                <p>Tel kullanmadan, neredeyse görünmeyen şeffaf plaklarla dişlerinizi düzeltebilirsiniz.</p>
              </InfoBox>
            </InfoBoxes>

            {/* Süreç Adımları */}
            <SectionTitle>Estetik Diş Tedavi Süreci</SectionTitle>
            <ProcessSteps>
              <ProcessStep>
                <ProcessStepContent>
                  <h3>Muayene ve Analiz</h3>
                  <p>Dişleriniz ve yüz hatlarınız detaylı şekilde incelenir. Fotoğraf ve ölçümler alınarak dijital analiz yapılır.</p>
                </ProcessStepContent>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepContent>
                  <h3>Dijital Gülüş Tasarımı</h3>
                  <p>Bilgisayar destekli tasarım programları ile hayalinizdeki gülüş oluşturulur ve size ön izleme sunulur.</p>
                </ProcessStepContent>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepContent>
                  <h3>Geçici Uygulama</h3>
                  <p>Belirlenen tasarım geçici malzemelerle ağzınıza uygulanır ve bir süre bu şekilde yaşamanız istenir.</p>
                </ProcessStepContent>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepContent>
                  <h3>Son Uygulama</h3>
                  <p>Geçici uygulamadan memnun kalınması durumunda, kalıcı estetik restorasyonlar yapılır.</p>
                </ProcessStepContent>
              </ProcessStep>
            </ProcessSteps>

            {/* SSS */}
            <FaqSection>
              <Container>
                <SectionTitle>Sık Sorulan Sorular</SectionTitle>
                
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </Container>
            </FaqSection>

            {/* CTA */}
            <ServiceCta>
              <h2>Hayalinizdeki Gülüş İçin Hemen Randevu Alın</h2>
              <p>Estetik diş hekimliğinde uzman ekibimizle doğal ve sağlıklı bir gülümsemeye kavuşun.</p>
         
            </ServiceCta>
          </Container>
        </ServiceContent>
      </div>
    </MainLayout>
  );
};

export default EstetikDis;