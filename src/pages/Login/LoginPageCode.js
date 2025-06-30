import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import styled from 'styled-components';
import { FaUserShield, FaLock, FaTooth, FaTimes, FaEnvelope } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f1fe 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const LoginWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  margin: auto;
  padding: 2.5rem 3rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const LogoIcon = styled.div`
  background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(58, 123, 213, 0.3);
`;

const LogoText = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: 0.5px;
  
  span {
    color: #3a7bd5;
  }
`;

const LoginHeader = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: linear-gradient(to right, #3a7bd5, #00d2ff);
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 50px;
  border: 2px solid #e9f0f5;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: #34495e;
  background-color: #f9fbfd;
  
  &:focus {
    border-color: #3a7bd5;
    outline: none;
    box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.2);
    background-color: #fff;
  }
  
  &::placeholder {
    color: #a8b6c4;
    font-weight: 400;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #7f8c8d;
  font-size: 1.1rem;
  z-index: 2;
`;

const Button = styled.button`
  padding: 15px;
  background: linear-gradient(to right, #3a7bd5, #00d2ff);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(58, 123, 213, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(to right, #2c65c4, #00b8e6);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(58, 123, 213, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  
  &:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
`;

const ForgotPassword = styled.a`
  text-align: center;
  color: #7f8c8d;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  transition: color 0.3s ease;
  display: inline-block;
  position: relative;
  cursor: pointer;
  
  &:hover {
    color: #3a7bd5;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #3a7bd5;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const FooterText = styled.p`
  text-align: center;
  color: #95a5a6;
  font-size: 0.85rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ecf0f1;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 1.3rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7f8c8d;
  transition: color 0.2s;
  
  &:hover {
    color: #e74c3c;
  }
`;

const ModalBody = styled.div`
  margin-bottom: 1.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const SecondaryButton = styled.button`
  padding: 10px 20px;
  background: #f5f7fa;
  color: #2c3e50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e4f1fe;
  }
`;

const PrimaryButton = styled(Button)`
  padding: 10px 20px;
  font-size: 0.9rem;
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotUsername, setForgotUsername] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // const response = await axios.post('https://localhost:5001/api/auth/login', {
      //   username,
      //   password
      // });
      
      //localStorage.setItem('adminToken', response.data.token);
      setTimeout(() => { // Simulate API call
        navigate('/admin');
      }, 1000);
    } catch (error) {
      toast.error('Giriş başarısız! Kullanıcı adı veya şifre hatalı.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotUsername) {
      toast.warning('Lütfen kullanıcı adınızı giriniz');
      return;
    }
    
    setIsSendingCode(true);
    try {
      // Simulate API call
      // await axios.post('https://localhost:5001/api/auth/forgot-password', {
      //   username: forgotUsername
      // });
      
      setTimeout(() => {
        toast.success(`Doğrulama kodu ${forgotUsername} adresine gönderildi`);
        setShowForgotPassword(false);
        setForgotUsername('');
      }, 1500);
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSendingCode(false);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LogoContainer>
            <LogoIcon>
              <FaTooth />
            </LogoIcon>
            <LogoText>Denta<span>can</span></LogoText>
          </LogoContainer>
          
          <LoginHeader>Admin Paneli Giriş</LoginHeader>
          
          <LoginForm onSubmit={handleSubmit}>
            <InputGroup>
              <InputIcon><FaUserShield /></InputIcon>
              <Input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </InputGroup>
            
            <InputGroup>
              <InputIcon><FaLock /></InputIcon>
              <Input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>
            
            <div style={{ textAlign: 'center' }}>
              <ForgotPassword onClick={() => setShowForgotPassword(true)}>Şifremi Unuttum?</ForgotPassword>
            </div>
            
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </Button>
          </LoginForm>
          
          <FooterText>© {new Date().getFullYear()} Dentacan - Tüm hakları saklıdır</FooterText>
        </LoginWrapper>
      </LoginContainer>

      {showForgotPassword && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Şifre Sıfırlama</ModalTitle>
              <CloseButton onClick={() => setShowForgotPassword(false)}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <InputGroup style={{ marginBottom: '1.5rem' }}>
                <InputIcon><FaEnvelope /></InputIcon>
                <Input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  value={forgotUsername}
                  onChange={(e) => setForgotUsername(e.target.value)}
                />
              </InputGroup>
              <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                Kullanıcı adınızı girdikten sonra, şifre sıfırlama bağlantısı içeren bir e-posta alacaksınız.
              </p>
            </ModalBody>
            <ModalFooter>
              <SecondaryButton onClick={() => setShowForgotPassword(false)}>
                İptal
              </SecondaryButton>
              <PrimaryButton onClick={handleForgotPassword} disabled={isSendingCode}>
                {isSendingCode ? 'Gönderiliyor...' : 'Kodu Gönder'}
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default LoginPage;