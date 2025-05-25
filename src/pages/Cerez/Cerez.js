import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';

const CookieContainer = styled.div`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #3498db;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
`;

const TableCell = styled.td`
  padding: 15px;
  border: 1px solid #e0e6ed;
  color: #555;
  font-size: 1rem;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8fafc;
  }
  
  &:hover {
    background-color: #f1f8fe;
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

const Cerez = () => {
  return (
    <MainLayout>
      <CookieContainer>
        <ContentWrapper>
          <PageHeader>
            <PageTitle>Çerez Politikası</PageTitle>
          </PageHeader>

          <ContentSection>
            <SectionTitle>1. Giriş</SectionTitle>
            <Paragraph>
              DENTACAN olarak, web sitemizde çerezler kullanmaktayız. Bu çerez politikası, 
              web sitemizde kullanılan çerezlerin türleri, kullanım amaçları ve yönetimi 
              hakkında sizleri bilgilendirmek amacıyla hazırlanmıştır.
            </Paragraph>
          </ContentSection>

          <ContentSection>
            <SectionTitle>2. Çerez Nedir?</SectionTitle>
            <Paragraph>
              Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza 
              yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitemizi daha etkili 
              kullanmanızı sağlar ve size daha iyi bir kullanıcı deneyimi sunar.
            </Paragraph>
          </ContentSection>

          <ContentSection>
            <SectionTitle>3. Çerez Türleri</SectionTitle>
            <Paragraph>
              Web sitemizde kullanılan çerezler ve amaçları:
            </Paragraph>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Çerez Türü</TableHeader>
                  <TableHeader>Açıklama</TableHeader>
                  <TableHeader>Süre</TableHeader>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>Zorunlu Çerezler</TableCell>
                  <TableCell>Web sitesinin temel işlevleri için gerekli</TableCell>
                  <TableCell>Oturum süresi</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Analitik Çerezler</TableCell>
                  <TableCell>Kullanıcı deneyimini iyileştirmek için kullanılır</TableCell>
                  <TableCell>2 yıl</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fonksiyonel Çerezler</TableCell>
                  <TableCell>Kullanıcı tercihlerini hatırlamak için kullanılır</TableCell>
                  <TableCell>1 yıl</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reklam Çerezleri</TableCell>
                  <TableCell>Kişiselleştirilmiş reklamlar için kullanılır</TableCell>
                  <TableCell>6 ay</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </ContentSection>

          <ContentSection>
            <SectionTitle>4. Çerezlerin Kullanım Amaçları</SectionTitle>
            <Paragraph>
              Çerezleri aşağıdaki amaçlar için kullanıyoruz:
            </Paragraph>
            <List>
              <ListItem>Web sitesinin düzgün çalışmasını sağlamak</ListItem>
              <ListItem>Kullanıcı deneyimini iyileştirmek</ListItem>
              <ListItem>Web sitesi performansını analiz etmek</ListItem>
              <ListItem>Güvenliği sağlamak</ListItem>
              <ListItem>Kişiselleştirilmiş içerik sunmak</ListItem>
            </List>
          </ContentSection>

          <ContentSection>
            <SectionTitle>5. Çerez Yönetimi</SectionTitle>
            <Paragraph>
              Çerez tercihlerinizi yönetmek için:
            </Paragraph>
            <List>
              <ListItem>Tarayıcı ayarlarınızdan çerezleri silebilirsiniz</ListItem>
              <ListItem>Çerez kabulünü reddedebilirsiniz</ListItem>
              <ListItem>Belirli çerezleri engelleyebilirsiniz</ListItem>
              <ListItem>Çerez bildirimlerini yönetebilirsiniz</ListItem>
            </List>
            
            <HighlightBox>
              <Paragraph>
                <strong>Not:</strong> Çerezleri devre dışı bırakmanız web sitemizin bazı işlevlerinin düzgün çalışmamasına neden olabilir.
              </Paragraph>
            </HighlightBox>
          </ContentSection>

          <ContentSection>
            <SectionTitle>6. Üçüncü Taraf Çerezleri</SectionTitle>
            <Paragraph>
              Web sitemizde üçüncü taraf çerezleri de kullanılmaktadır:
            </Paragraph>
            <List>
              <ListItem>Google Analytics</ListItem>
              <ListItem>Google Ads</ListItem>
              <ListItem>Sosyal medya platformları</ListItem>
              <ListItem>Reklam ağları</ListItem>
            </List>
          </ContentSection>

          <ContentSection>
            <SectionTitle>7. Gizlilik ve Güvenlik</SectionTitle>
            <Paragraph>
              Çerezler aracılığıyla toplanan bilgiler:
            </Paragraph>
            <List>
              <ListItem>Güvenli bir şekilde saklanır</ListItem>
              <ListItem>Üçüncü taraflarla paylaşılmaz</ListItem>
              <ListItem>Yasal zorunluluklar dışında kullanılmaz</ListItem>
              <ListItem>Düzenli olarak güncellenir</ListItem>
            </List>
          </ContentSection>

          <ContentSection>
            <SectionTitle>8. İletişim</SectionTitle>
            <Paragraph>
              Çerez politikamız hakkında sorularınız için:
            </Paragraph>
            
            <ContactInfo>
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <strong>E-posta</strong>
                  <div>cerez@dentacan.com</div>
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
      </CookieContainer>
    </MainLayout>
  );
};

export default Cerez;