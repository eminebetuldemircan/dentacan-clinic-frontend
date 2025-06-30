import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTooth,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const FooterContainer = styled.footer`
  background-color: var(--dark);
  color: white;
  padding: 60px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FooterToothIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: white;
  margin-right: 10px;
`;

const FooterLogo = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

const FooterAbout = styled.div`
  p {
    margin-bottom: 20px;
    color: #aaa;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  color: white;
  transition: all 0.3s;

  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
  }
`;

const FooterLinks = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #aaa;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--primary);
    }
  }
`;

const FooterLegal = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px 30px;
  margin: 30px 0;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  a {
    color: #aaa;
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.3s;
    position: relative;
    padding: 0 5px;

    &:hover {
      color: var(--primary);
    }

    &:not(:last-child):after {
      content: '|';
      position: absolute;
      right: -18px;
      color: #555;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;

    a:not(:last-child):after {
      display: none;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
  color: #aaa;
  font-size: 0.9rem;
`;

const MainFooter = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterAbout>
            <FooterLogoContainer>
              <FooterToothIcon icon={faTooth} />
              <FooterLogo>DENTACAN</FooterLogo>
            </FooterLogoContainer>
            <p>
              "Gülümsemek İçin Bir Neden Daha" mottosuyla hizmet veren
              kliniğimiz, modern teknolojilerle ağız ve diş sağlığınızı korumayı
              amaçlar.
            </p>
            <SocialLinks>
              <SocialLink href="#"><FontAwesomeIcon icon={faFacebookF} /></SocialLink>
              <SocialLink href="#"><FontAwesomeIcon icon={faInstagram} /></SocialLink>
              <SocialLink href="#"><FontAwesomeIcon icon={faTwitter} /></SocialLink>
              <SocialLink href="#"><FontAwesomeIcon icon={faYoutube} /></SocialLink>
            </SocialLinks>
          </FooterAbout>

          <FooterLinks>
            <h3>Hızlı Linkler</h3>
            <ul>
              <li><ScrollLink to="hero" smooth={true} duration={500} offset={-80}>Anasayfa</ScrollLink></li>
              <li><ScrollLink to="hizmetler" smooth={true} duration={500} offset={-80}>Hizmetlerimiz</ScrollLink></li>
              <li><ScrollLink to="ekip" smooth={true} duration={500} offset={-80}>Ekibimiz</ScrollLink></li>
              <li><ScrollLink to="galeri" smooth={true} duration={500} offset={-80}>Galeri</ScrollLink></li>
              <li><ScrollLink to="hasta-yorumlari" smooth={true} duration={500} offset={-80}>Hasta Görüşleri</ScrollLink></li>
              <li><ScrollLink to="hakkinda" smooth={true} duration={500} offset={-80}>Hakkında</ScrollLink></li>
              <li><ScrollLink to="iletisim" smooth={true} duration={500} offset={-80}>İletişim</ScrollLink></li>
            </ul>
          </FooterLinks>

          <FooterLinks>
            <h3>Hizmetlerimiz</h3>
            <ul>
              <li><Link to="/dis-beyazlatma">Diş Beyazlatma</Link></li>
              <li><Link to="/estetik-dis">Estetik Diş Hekimliği</Link></li>
              <li><Link to="/implant-tedavisi">İmplant Tedavisi</Link></li>
              <li><Link to="/ortodonti-tedavisi">Ortodonti</Link></li>
              <li><Link to="/agiz-dis-cene-cerrahi">Ağız Cerrahisi</Link></li>
              <li><Link to="/periodontoloji">Periodontoloji</Link></li>
              <li><Link to="/pedodonti">Pedodonti</Link></li>
              <li><Link to="/endodonti">Endodonti</Link></li>
              <li><Link to="/konservatif-dis">Konservatif Diş Tedavisi</Link></li>
              <li><Link to="/radyoloji">Oral Diagnoz ve Radyoloji</Link></li>
              <li><Link to="/genel-anestezi">Genel Anestezi ve Sedasyon</Link></li>
              <li><Link to="/acil-tedavi">Acil Tedavi</Link></li>
            </ul>
          </FooterLinks>

          <FooterLinks>
            <h3>İletişim</h3>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps?q=1234.+Sokak,+No:5,+Şişli/İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px', color: 'var(--primary)' }} />
                  1234. Sokak, No:5, Şişli/İstanbul
                </a>
              </li>
              <li>
                <a href="tel:+902121234567">
                  <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px', color: 'var(--primary)' }} />
                  0 (212) 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:info@dentacan.com">
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: 'var(--primary)' }} />
                  info@dentacan.com
                </a>
              </li>
            </ul>
          </FooterLinks>
        </FooterGrid>

        <FooterLegal>
          <Link to="/kvkk">Kişisel Verilerin Korunması</Link>
          <Link to="/gizlilik">Gizlilik Politikası</Link>
          <Link to="/cerez">Çerez Politikası</Link>
          <Link to="/etik">Etik Politikamız</Link>
        </FooterLegal>

        <Copyright>
          <p>&copy; 2025 DENTACAN Ağız ve Diş Sağlığı Kliniği. Tüm hakları saklıdır.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default MainFooter;
