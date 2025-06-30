import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import LanguageModal from '../Modal/LanguageModal';
import { useTranslation } from 'react-i18next';

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
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToothIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--primary);
  margin-right: 10px;
`;

const NavbarLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 992px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin-left: 30px;

  @media (max-width: 992px) {
    margin: 10px 0;
  }
`;

const NavLink = styled(Link)`
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const LoginButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  margin-left: 20px;

  &:hover {
    background-color: var(--primary);
    color: white;
  }

  @media (max-width: 992px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--dark);
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
`;

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleShowLanguageModal = () => {
    setShowLanguageModal(true);
  };
  const handleCloseLanguageModal = () => {
    setShowLanguageModal(false);
  };
  
  const { t } = useTranslation();
  
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
    closeMenu();
  };

  return (
    <Navbar>
      <NavbarContainer>
        <LogoContainer>
          <ToothIcon icon={faTooth} />
          <NavbarLogo to="/">DENTACAN</NavbarLogo>
        </LogoContainer>

        <MobileMenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuButton>

        <NavbarLinks isOpen={isMenuOpen}>
          <NavItem>
            <NavLink to="/" onClick={() => scrollToSection('home')}>Anasayfa</NavLink>
          </NavItem>

          <NavItem>
            <NavLink as="span" onClick={() => scrollToSection('hizmetler')}>Hizmetler</NavLink>
          </NavItem>
            
          <NavItem>
            <NavLink as="span" onClick={() => scrollToSection('ekip')}>Ekibimiz</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink as="span" onClick={() => scrollToSection('galeri')}>Galeri</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink as="span" onClick={() => scrollToSection('hasta-yorumlari')}>Hasta Görüşleri</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink as="span" onClick={() => scrollToSection('hakkinda')}>Hakkında</NavLink>
          </NavItem> 
          
          <NavItem>
            <NavLink to="/iletisim" onClick={closeMenu}>İletişim</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/randevu-al" onClick={closeMenu}>Randevu Al</NavLink>
          </NavItem>
          
          <div className='ms-4'>
            <i
              className="fa-solid fa-globe me-3 mt-1"
              onClick={handleShowLanguageModal}
            ></i>
            <LanguageModal
              showLanguageModal={showLanguageModal}
              handleCloseLanguageModal={handleCloseLanguageModal}
            />
          </div>
        </NavbarLinks>
      </NavbarContainer>
    </Navbar>
  );
};

export default MainHeader;