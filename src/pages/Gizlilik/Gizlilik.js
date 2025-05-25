import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';

const PrivacyContainer = styled.div`
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f4f8 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 2px;
  }
`;

const ContentSection = styled.section`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  border-left: 5px solid #3498db;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 25px;
  font-weight: 600;
  position: relative;
  padding-left: 25px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: #3498db;
    border-radius: 50%;
  }
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 25px;
`;

const ListItem = styled.li`
  color: #555;
  line-height: 1.8;
  margin-bottom: 12px;
  font-size: 1.1rem;
  padding-left: 30px;
  position: relative;
  
  &::before {
    content: '→';
    position: absolute;
    left: 10px;
    color: #3498db;
    font-weight: bold;
  }
`;

const HighlightBox = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #e74c3c;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  margin: 25px 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const ContactItem = styled.div`
  flex: 1;
  min-width: 200px;
  background: #f1f8fe;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 15px;
    color: #3498db;
    font-size: 1.5rem;
  }
`;

const Gizlilik = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <PrivacyContainer>
        <ContentWrapper>
          <PageHeader>
            <PageTitle>Gizlilik Politikası</PageTitle>
          </PageHeader>

          <ContentSection>
            <SectionTitle>1. Giriş</SectionTitle>
            <Paragraph>
              DENTACAN olarak, kişisel verilerinizin güvenliği konusunda büyük önem taşıyoruz. 
              Bu gizlilik politikası, web sitemizi kullanırken kişisel verilerinizin nasıl toplandığını, 
              kullanıldığını ve korunduğunu açıklamaktadır.
            </Paragraph>
          </ContentSection>

          <ContentSection>
            <SectionTitle>2. Toplanan Bilgiler</SectionTitle>
            <Paragraph>
              Web sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:
            </Paragraph>
            <List>
              <ListItem>Ad, soyad ve iletişim bilgileri</ListItem>
              <ListItem>Randevu talepleri ve sağlık bilgileri</ListItem>
              <ListItem>IP adresi ve tarayıcı bilgileri</ListItem>
              <ListItem>Çerezler aracılığıyla toplanan bilgiler</ListItem>
            </List>
          </ContentSection>

          <ContentSection>
            <SectionTitle>3. Bilgilerin Kullanımı</SectionTitle>
            <Paragraph>
              Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:
            </Paragraph>
            <List>
              <ListItem>Randevu yönetimi ve hasta takibi</ListItem>
              <ListItem>Hizmet kalitemizi artırmak</ListItem>
              <ListItem>Yasal yükümlülüklerimizi yerine getirmek</ListItem>
              <ListItem>Güvenlik ve dolandırıcılık önleme</ListItem>
            </List>
          </ContentSection>

          <ContentSection>
            <SectionTitle>4. Bilgi Güvenliği</SectionTitle>
            <Paragraph>
              Kişisel verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:
            </Paragraph>
            <List>
              <ListItem>SSL şifreleme teknolojisi kullanımı</ListItem>
              <ListItem>Düzenli güvenlik güncellemeleri</ListItem>
              <ListItem>Erişim kontrolü ve yetkilendirme</ListItem>
              <ListItem>Düzenli güvenlik denetimleri</ListItem>
            </List>
            
            <HighlightBox>
              <Paragraph>
                <strong>Önemli:</strong> Tüm veri işleme süreçlerimiz KVKK ve ilgili mevzuata uygun olarak yürütülmektedir.
              </Paragraph>
            </HighlightBox>
          </ContentSection>

          <ContentSection>
            <SectionTitle>5. Çerezler</SectionTitle>
            <Paragraph>
              Web sitemizde çerezler kullanılmaktadır. Çerezler, web sitemizi daha iyi bir deneyim 
              sunmak ve kullanımını analiz etmek için kullanılır.
            </Paragraph>
            <List>
              <ListItem><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevleri için gereklidir</ListItem>
              <ListItem><strong>Performans Çerezleri:</strong> Kullanıcı deneyimini iyileştirmek için kullanılır</ListItem>
              <ListItem><strong>Fonksiyonel Çerezler:</strong> Tercihlerinizi hatırlamak için kullanılır</ListItem>
            </List>
            <Paragraph>
              Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilirsiniz.
            </Paragraph>
          </ContentSection>

          <ContentSection>
            <SectionTitle>6. Haklarınız</SectionTitle>
            <Paragraph>
              KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </Paragraph>
            <List>
              <ListItem>Kişisel verilerinizin işlenip işlenmediğini öğrenme</ListItem>
              <ListItem>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</ListItem>
              <ListItem>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</ListItem>
              <ListItem>Kişisel verilerinizin düzeltilmesini veya silinmesini isteme</ListItem>
              <ListItem>Kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</ListItem>
            </List>
          </ContentSection>

          <ContentSection>
            <SectionTitle>7. İletişim</SectionTitle>
            <Paragraph>
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </Paragraph>
            
            <ContactInfo>
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <strong>E-posta</strong>
                  <div>info@dentacan.com</div>
                </div>
              </ContactItem>
              
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <strong>Telefon</strong>
                  <div>0 (212) 123 45 67</div>
                </div>
              </ContactItem>
              
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <strong>Adres</strong>
                  <div>1234. Sokak, No:5, Şişli/İstanbul</div>
                </div>
              </ContactItem>
            </ContactInfo>
          </ContentSection>
        </ContentWrapper>
      </PrivacyContainer>
    </MainLayout>
  );
};

export default Gizlilik;