import React from 'react';
import DentacanChatBot from '../../components/ChatBot/DentacanChatBot';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTooth, 
  faBars,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faStar as solidStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import MainLayout from '../../layouts/MainLayout';

// Main container with padding to account for fixed navbar
const HomePageContainer = styled.div`
  padding-top: 70px;
`;

// Header section
const Header = styled.header`
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), 
              url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: #212529;
  margin-top: 70px;

  @media (max-width: 768px) {
    height: auto;
    padding: 100px 20px;
    margin-top: 60px;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const HeaderToothIcon = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  color: #00b4d8;
  margin-right: 15px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #00b4d8;

  span {
    color: #212529;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Slogan = styled.p`
  font-size: 2rem;
  font-family: 'Poppins', cursive;
  margin-bottom: 40px;
  color: var(--dark);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Common button styles
const Button = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  background-color: #00b4d8;
  color: white;

  &:hover {
    background-color: #0096c7;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 180, 216, 0.2);
    color: white;
  }
`;

const LoginButton = styled(Link)`
  display: inline-block;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  background-color: transparent;
  color: #00b4d8;
  border: 2px solid #00b4d8;
  margin-left: 20px;

  &:hover {
    background-color: #00b4d8;
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

// Section styles
const Section = styled.section`
  padding: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #00b4d8;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #666;
  margin-bottom: 50px;
  font-size: 1.1rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// Services section
const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.1);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ServiceCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin: 20px 20px 10px;
  color: #333;
`;

const ServiceDesc = styled.p`
  color: #666;
  margin: 0 20px 20px;
  line-height: 1.6;
  font-size: 0.95rem;
`;

// Team section
const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 180, 216, 0.15);
  }
`;

const MemberImageContainer = styled.div`
  height: 380px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 320px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${TeamMember}:hover & img {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  padding: 25px;
`;

const MemberName = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 5px;
`;

const MemberTitle = styled.p`
  color: #00b4d8;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const MemberBio = styled.div`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

// Gallery section
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
  }

  &:hover:before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const GalleryCaption = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  padding: 20px;
  color: white;
  z-index: 2;
  transition: bottom 0.3s;

  h3 {
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
  }

  ${GalleryItem}:hover & {
    bottom: 0;
  }
`;

// Testimonials section
const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 25px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const PatientAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 3px solid #e6f2ff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PatientInfo = styled.div`
  h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  p {
    margin: 5px 0 0;
    color: #7f8c8d;
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  margin-bottom: 15px;
  color: #f1c40f;
  font-size: 1.2rem;
`;

const TestimonialBody = styled.div`
  p {
    color: #555;
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 15px;
  }
`;

const TestimonialDate = styled.div`
  text-align: right;
  color: #95a5a6;
  font-size: 0.85rem;
`;

// About section
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #00b4d8;
  }

  p {
    margin-bottom: 15px;
    color: #555;
  }
`;

const AboutImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 992px) {
    order: -1;
  }
`;



// Navbar component
const Navbar = styled.nav`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToothIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #00b4d8;
  margin-right: 10px;
`;

const NavbarLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #00b4d8;
  text-decoration: none;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    &.active {
      display: flex;
    }
  }
`;

const NavbarLinkItem = styled.li`
  margin-left: 30px;

  @media (max-width: 992px) {
    margin: 10px 0;
  }
`;

const NavbarLink = styled(Link)`
  color: #212529;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;

  &:hover {
    color: #00b4d8;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #00b4d8;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #212529;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
`;

// Star rating component
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
    }
  }

  return <Rating>{stars}</Rating>;
};

// Main component
const HomePage = () => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuActive(false);
  };

  return (
    <MainLayout>
      <HomePageContainer>
       
        {/* Header */}
        <Header>
          <div className="container">
            <HeaderLogo>
              <HeaderToothIcon icon={faTooth} />
              <LogoText>DENTA<span>CAN</span></LogoText>
            </HeaderLogo>
            <Slogan>Gülümsemek İçin Bir Neden Daha</Slogan>
            <Button to="/randevu-al">Randevu Al</Button>
          </div>
        </Header>

        {/* Services Section */}
        <Section id="hizmetler" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <SectionTitle>Sunduğumuz Hizmetler</SectionTitle>
            
            <ServicesContainer>
              {/* Service 1 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/Beyazlatma.jpg" alt="Beyazlatma" />
                </ServiceImage>
                <ServiceTitle>Diş Beyazlatma</ServiceTitle>
                <ServiceDesc>Profesyonel beyazlatma teknikleriyle 3-4 ton açık renk</ServiceDesc>
               <Button to="/dis-beyazlatma">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 2 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/EstetikDiş.jpg" alt="Estetik diş uygulaması" />
                </ServiceImage>
                <ServiceTitle>Estetik Diş Hekimliği</ServiceTitle>
                <ServiceDesc>Laminate veneer, zirkonyum kaplama ve dijital gülüş tasarımı ile mükemmel sonuçlar</ServiceDesc>
                <Button to="/estetik-dis">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 3 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/İmplant.jpg" alt="Diş implantı uygulaması" />
                </ServiceImage>
                <ServiceTitle>İmplant Tedavisi</ServiceTitle>
                <ServiceDesc>Tek dişten tam ağız implantlara, doğal görünümlü kalıcı çözümler</ServiceDesc>
                <Button to="/implant-tedavisi">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 4 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/Ortodonti.jpg" alt="Ortodonti tedavisi" />
                </ServiceImage>
                <ServiceTitle>Ortodonti (Diş Teli Tedavisi)</ServiceTitle>
                <ServiceDesc>Şeffaf plaklar, lingual braketler ve geleneksel tellerle çapraşıklık düzeltme</ServiceDesc>
                <Button to="/ortodonti-tedavisi">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 5 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/AğızCerrahi.jpg" alt="Ağız, Diş ve Çene Cerrahisi" />
                </ServiceImage>
                <ServiceTitle>Ağız, Diş ve Çene Cerrahisi</ServiceTitle>
                <ServiceDesc>20 yaş diş çekimi, kist operasyonları ve ileri cerrahi müdahaleler</ServiceDesc>
                <Button to="/agiz-dis-cene-cerrahi">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 6 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/disetiuygulama.png" alt="ÇDiş Eti Hastalıkları" />
                </ServiceImage>
                <ServiceTitle>Periodontoloji (Diş Eti Hastalıkları)</ServiceTitle>
                <ServiceDesc>Diş eti tedavileri, greftleme işlemleri ve estetik diş eti düzenlemeleri</ServiceDesc>
                <Button to="/periodontoloji">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 7 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/Pedodonti.jpg" alt="Çocuk Diş Hekimliği" />
                </ServiceImage>
                <ServiceTitle>Pedodonti (Çocuk Diş Hekimliği)</ServiceTitle>
                <ServiceDesc>Çocuklara özel koruyucu uygulamalar ve eğlenceli tedavi ortamı</ServiceDesc>
                <Button to="/pedodonti">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 8 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/KanalTedavi.jpg" alt="Kanal Tedavi" />
                </ServiceImage>
                <ServiceTitle>Endodonti (Kanal Tedavi)</ServiceTitle>
                <ServiceDesc>Mikroskop altında hassas kanal tedavileri ve kök ucu rezeksiyonları</ServiceDesc>
                <Button to="/endodonti">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 9 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/DişDolgusu.jpg" alt="Dolgu Uygulaması" />
                </ServiceImage>
                <ServiceTitle>Konservatif Diş Tedavisi (Dolgu Uygulaması)</ServiceTitle>
                <ServiceDesc>Kompozit ve porselen dolgularla doğal görünümlü restorasyonlar</ServiceDesc>
                <Button to="/konservatif-dis">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 10 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/OralDiagnozveRadyoloji.jpg" alt="Oral diagnoz ve radyoloji görüntüsü" />
                </ServiceImage>
                <ServiceTitle>Oral Diagnoz ve Radyoloji</ServiceTitle>
                <ServiceDesc>Dijital panoramik ve periapikal röntgenlerle kesin teşhis imkanı</ServiceDesc>
                <Button to="/radyoloji">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 11 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/GenelAnestezi.jpg" alt="Sedasyon uygulaması" />
                </ServiceImage>
                <ServiceTitle>Genel Anestezi ve Sedasyon</ServiceTitle>
                <ServiceDesc>Diş hekimi korkusu olan hastalar için güvenli sedasyon çözümleri</ServiceDesc>
                <Button to="/genel-anestezi">Detaylı Bilgi</Button>
              </ServiceCard>
              
              {/* Service 12 */}
              <ServiceCard>
                <ServiceImage>
                  <img src="/images/Anasayfa/Hizmetler/AcilTedavi.jpg" alt="Acil diş tedavisi" />
                </ServiceImage>
                <ServiceTitle>Acil Tedavi Hizmetleri</ServiceTitle>
                <ServiceDesc>Ani diş ağrıları ve travmatik yaralanmalarda 7/24 acil müdahale</ServiceDesc>
                <Button to="/acil-tedavi">Detaylı Bilgi</Button>
              </ServiceCard>
            </ServicesContainer>
          </div>
        </Section>

        {/* Team Section */}
        <Section id="ekip" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container">
            <SectionTitle>Uzman Ekibimiz</SectionTitle>
            <SectionSubtitle>Alanlarında uzmanlaşmış deneyimli kadromuzla, sağlıklı gülüşleriniz için buradayız!</SectionSubtitle>
            
            <TeamContainer>
              {/* Doctor 1 */}
              <TeamMember>
                <MemberImageContainer>
                  <img src="/images/Anasayfa/Hizmetler/AhmetCan.jpg" alt="Çene Cerrahisi Uzmanı Dr. Ahmet Can" />
                </MemberImageContainer>
                <MemberInfo>
                  <MemberName>Uzm. Dr. Dt. Ahmet CAN</MemberName>
                  <MemberTitle>Çene Cerrahisi Uzmanı</MemberTitle>
                  <MemberBio>
                    <p>2002 Hacettepe Üniversitesi mezunu. Cumhuriyet Üniversitesi'nde uzmanlık eğitimi aldı. İleri çene cerrahisi ve implantoloji alanında İsviçre'de eğitim gördü. 1000+ başarılı cerrahi operasyon deneyimi bulunmaktadır.</p>
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
              
              {/* Doctor 2 */}
              <TeamMember>
                <MemberImageContainer>
                  <img src="/images/Anasayfa/Hizmetler/AyşeDemir.jpg" alt="Ortodonti Uzmanı Dr. Ayşe Demir" />
                </MemberImageContainer>
                <MemberInfo>
                  <MemberName>Uzm. Dr. Dt. Ayşe DEMİR</MemberName>
                  <MemberTitle>Ortodonti Uzmanı</MemberTitle>
                  <MemberBio>
                    <p>Marmara Üniversitesi Ortodonti mezunu. Invisalign Gold Provider sertifikalı. Lingual ortodonti ve şeffaf plak tedavilerinde uzman. İtalya'da 6 aylık ileri eğitim programını tamamladı.</p>
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
              
              {/* Doctor 3 */}
              <TeamMember>
                <MemberImageContainer>
                  <img src="/images/Anasayfa/Hizmetler/MehmetYılmaz.jpg" alt="İmplantoloji Uzmanı Dr. Mehmet Yılmaz" />
                </MemberImageContainer>
                <MemberInfo>
                  <MemberName>Uzm. Dr. Dt. Mehmet YILMAZ</MemberName>
                  <MemberTitle>İmplantoloji Uzmanı</MemberTitle>
                  <MemberBio>
                    <p>Ankara Üniversitesi mezunu. All-on-4 ve zygoma implant tekniklerinde İstanbul'da uzmanlık eğitimi aldı. 3000+ başarılı implant uygulaması bulunmaktadır.</p>
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
              
              {/* Doctor 4 */}
              <TeamMember>
                <MemberImageContainer>
                  <img src="/images/Anasayfa/Hizmetler/ZeynepKaya.jpg" alt="Pedodonti Uzmanı Dr. Zeynep Kaya" />
                </MemberImageContainer>
                <MemberInfo>
                  <MemberName>Uzm. Dr. Dt. Zeynep KAYA</MemberName>
                  <MemberTitle>Pedodonti Uzmanı</MemberTitle>
                  <MemberBio>
                    <p>Gazi Üniversitesi Pedodonti mezunu. Çocuklarda dental anksiyete yönetimi ve sedasyon uygulamalarında uzman. Ankara'da yüksek lisans eğitimi aldı. "Minik Dişler" kitabının yazarı.</p>
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
              
              {/* Doctor 5 */}
              <TeamMember>
                <MemberImageContainer>
                  <img src="/images/Anasayfa/Hizmetler/AliŞahin.jpg" alt="Periodontoloji Uzmanı Dr. Ali Şahin" />
                </MemberImageContainer>
                <MemberInfo>
                  <MemberName>Uzm. Dr. Dt. Ali ŞAHİN</MemberName>
                  <MemberTitle>Periodontoloji Uzmanı</MemberTitle>
                  <MemberBio>
                    <p>Ege Üniversitesi Periodontoloji mezunu. Lazer destekli periodontal tedaviler ve diş eti estetiği konusunda ABD'de eğitim aldı. 2 uluslararası bilimsel yayını bulunmaktadır.</p>
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
              
              {/* Doctor 6 */}
              <TeamMember>
                <MemberImageContainer>
                  <img src="/images/Anasayfa/Hizmetler/FatmaArslan.jpg" alt="Estetik Diş Hekimi Dr. Fatma Arslan" />
                </MemberImageContainer>
                <MemberInfo>
                  <MemberName>Uzm. Dr. Dt. Fatma ARSLAN</MemberName>
                  <MemberTitle>Estetik Diş Hekimi</MemberTitle>
                  <MemberBio>
                    <p>İstanbul Üniversitesi mezunu. Digital Smile Design alanında İstanbul'da uzmanlık eğitimi aldı. Laminate veneer ve zirkonyum kaplamalarda uzman. 800+ Hollywood Smile tasarımı gerçekleştirdi.</p>
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
            </TeamContainer>
          </div>
        </Section>
        
        {/* Gallery Section */}
        <Section id="galeri" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <SectionTitle>Kliniğimizden Görüntüler</SectionTitle>
            
            <GalleryContainer>
              <GalleryItem>
                <img src="/images/Anasayfa/Hizmetler/MuayeneOdasi.png" alt="Modern Muayene Odası" />
                <GalleryCaption>
                  <h3>Modern Muayene Odası</h3>
                  <p>Son teknoloji ekipmanlarla donatılmış</p>
                </GalleryCaption>
              </GalleryItem>
              <GalleryItem>
                <img src="/images/Anasayfa/Hizmetler/BeklemeAlani.png" alt="Bekleme Alanı" />
                <GalleryCaption>
                  <h3>Konforlu Bekleme Alanı</h3>
                  <p>Rahat ve huzurlu bir ortam</p>
                </GalleryCaption>
              </GalleryItem>
              <GalleryItem>
                <img src="/images/Anasayfa/Hizmetler/Sterilizasyon.jpg" alt="Sterilizasyon" />
                <GalleryCaption>
                  <h3>Sterilizasyon Ünitesi</h3>
                  <p>En yüksek hijyen standartları</p>
                </GalleryCaption>
              </GalleryItem>
              <GalleryItem>
                <img src="/images/Anasayfa/Hizmetler/ÇocukMuayene.jpg" alt="Çocuk Muayene Odası" />
                <GalleryCaption>
                  <h3>Çocuk Muayene Odası</h3>
                  <p>Minik hastalarımız için özel tasarım</p>
                </GalleryCaption>
              </GalleryItem>
              <GalleryItem>
                <img src="/images/Anasayfa/Hizmetler/Radyoloji.jpg" alt="Radyoloji Ünitesi" />
                <GalleryCaption>
                  <h3>Dijital Radyoloji Ünitesi</h3>
                  <p>Düşük radyasyonlu görüntüleme</p>
                </GalleryCaption>
              </GalleryItem>
              <GalleryItem>
                <img src="/images/Anasayfa/Hizmetler/Ameliyahane.jpg" alt="Ameliyathane" />
                <GalleryCaption>
                  <h3>Ameliyathane</h3>
                  <p>Cerrahî işlemler için özel alan</p>
                </GalleryCaption>
              </GalleryItem>
            </GalleryContainer>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="hasta-yorumlari" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container">
            <SectionTitle>Hasta Görüşleri</SectionTitle>
            <SectionSubtitle>Hastalarımızın Deneyimleri ve Memnuniyetleri</SectionSubtitle>
            
            <TestimonialsContainer>
              {/* Testimonial 1 */}
              <TestimonialCard>
                <TestimonialHeader>
                  <PatientAvatar>
                    <img src="/images/Anasayfa/Hizmetler/E.png" alt="Elif K." />
                  </PatientAvatar>
                  <PatientInfo>
                    <h3>Elif K.</h3>
                    <p>İmplant Tedavisi</p>
                  </PatientInfo>
                </TestimonialHeader>
                <StarRating rating={5} />
                <TestimonialBody>
                  <p>"Yaptırdığım implant tedavisinden çok memnun kaldım. Mehmet Bey'in ilgisi ve titiz çalışması sayesinde hiç ağrı hissetmeden tedavimi tamamladım. Kliniğin hijyen standartları çok yüksek, personel ise son derece güler yüzlü. Kesinlikle tavsiye ederim."</p>
                </TestimonialBody>
                <TestimonialDate>15 Eylül 2023</TestimonialDate>
              </TestimonialCard>
              
              {/* Testimonial 2 */}
              <TestimonialCard>
                <TestimonialHeader>
                  <PatientAvatar>
                    <img src="/images/Anasayfa/Hizmetler/B.png" alt="Burak E." />
                  </PatientAvatar>
                  <PatientInfo>
                    <h3>Burak E.</h3>
                    <p>Ortodonti Tedavisi</p>
                  </PatientInfo>
                </TestimonialHeader>
                <StarRating rating={4.5} />
                <TestimonialBody>
                  <p>"2 yıldır devam eden ortodonti tedavim Dentacan'da mükemmel sonuçlandı. Başlangıçta diş teli taktırmaya çekiniyordum ancak doktorumun sabırlı ve bilgilendirici yaklaşımı sayesinde tüm süreci rahat atlattım. Kliniğin modern teknolojileri sayesinde tedavim planlandığı gibi ilerledi."</p>
                </TestimonialBody>
                <TestimonialDate>3 Ağustos 2024</TestimonialDate>
              </TestimonialCard>
              
              {/* Testimonial 3 */}
              <TestimonialCard>
                <TestimonialHeader>
                  <PatientAvatar>
                    <img src="/images/Anasayfa/Hizmetler/K.png" alt="Kaya T." />
                  </PatientAvatar>
                  <PatientInfo>
                    <h3>Kaya T.</h3>
                    <p>Çocuk Diş Hekimliği</p>
                  </PatientInfo>
                </TestimonialHeader>
                <StarRating rating={5} />
                <TestimonialBody>
                  <p>"5 yaşındaki oğlum diş hekiminden çok korkuyordu ancak Zeynep Hanım sayesinde bu korkusunu yendi. Renkli ve oyun odası gibi tasarlanmış muayene odası, sevimli aletler ve sabırlı yaklaşım için çok teşekkür ederiz. Artık diş kontrolüne severek geliyor!"</p>
                </TestimonialBody>
                <TestimonialDate>22 Temmuz 2024</TestimonialDate>
              </TestimonialCard>
            </TestimonialsContainer>
          </div>
        </Section>

        {/* About Section */}
        <Section id="hakkinda">
          <div className="container">
            <SectionTitle>Hakkımızda</SectionTitle>
            
            <AboutContainer>
              <AboutText>
                <h2>DENTACAN Hikayesi</h2>
                <p>DENTACAN Ağız ve Diş Sağlığı Kliniği, 2010 yılında Dt. Ahmet CAN tarafından, modern diş hekimliği hizmetlerini en üst standartlarda sunmak amacıyla kurulmuştur. Başlangıçta küçük bir klinik olarak hizmet veren merkezimiz, hasta memnuniyeti odaklı yaklaşımımız sayesinde hızla büyüyerek bugünkü konumuna ulaşmıştır.</p>
                <p>Kuruluşumuzun temel amacı, ağız ve diş sağlığı alanında bütüncül bir yaklaşım sunarak, hastalarımızın yaşam kalitesini artırmaktır. Bunu yaparken en son teknolojik ekipmanları kullanıyor, sterilizasyon ve hijyen standartlarının en üst seviyede tutulmasına özen gösteriyoruz.</p>
                <p>Ekibimiz, alanlarında uzmanlaşmış, deneyimli diş hekimleri ve sağlık personelinden oluşmaktadır. Sürekli eğitim ve gelişime inanan bir anlayışla, mesleki yenilikleri yakından takip ediyor, hastalarımıza en güncel tedavi yöntemlerini sunuyoruz.</p>
                <p>Bugün DENTACAN olarak, binlerce hastamızın gülüşüne dokunmanın gururunu yaşıyor, her geçen gün daha fazla insana ulaşmak için çalışmalarımızı sürdürüyoruz.</p>
              </AboutText>
              <AboutImage>
                <img src="/images/Anasayfa/Hizmetler/Klinik.jpg" alt="DENTACAN Kliniği" />
              </AboutImage>
            </AboutContainer>
          </div>
        </Section>

       <DentacanChatBot />
      </HomePageContainer>
    </MainLayout>
  );
};

export default HomePage;