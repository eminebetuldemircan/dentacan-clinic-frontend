import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';

const KVKKContainer = styled.div`
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

const KVKK = () => {
  return (
   <MainLayout>
     <KVKKContainer>
      <ContentWrapper>
        <PageHeader>
          <PageTitle>Kişisel Verilerin Korunması</PageTitle>
        </PageHeader>

        <ContentSection>
          <SectionTitle>1. Giriş</SectionTitle>
          <Paragraph>
            DENTACAN olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
            veri sorumlusu sıfatıyla, kişisel verilerinizi işlerken aşağıda açıklanan temel ilkelere 
            uygun hareket etmekteyiz.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>2. Kişisel Verilerin İşlenme Amacı</SectionTitle>
          <Paragraph>
            Kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:
          </Paragraph>
          <List>
            <ListItem>Sağlık hizmetlerinin sunulması ve geliştirilmesi</ListItem>
            <ListItem>Hasta kayıtlarının tutulması ve yönetimi</ListItem>
            <ListItem>Yasal yükümlülüklerin yerine getirilmesi</ListItem>
            <ListItem>Hasta memnuniyetinin ölçülmesi ve geliştirilmesi</ListItem>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>3. Kişisel Verilerin Aktarılması</SectionTitle>
          <Paragraph>
            Kişisel verileriniz, yasal zorunluluklar ve sağlık hizmetlerinin sunulması amacıyla 
            aşağıdaki taraflarla paylaşılabilir:
          </Paragraph>
          <List>
            <ListItem>Sağlık Bakanlığı ve bağlı kuruluşları</ListItem>
            <ListItem>Sigorta şirketleri</ListItem>
            <ListItem>Laboratuvarlar ve tıbbi görüntüleme merkezleri</ListItem>
            <ListItem>Yasal merciler</ListItem>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>4. Kişisel Veri Sahibinin Hakları</SectionTitle>
          <Paragraph>
            KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
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
          <SectionTitle>5. Veri Güvenliği</SectionTitle>
          <Paragraph>
            Kişisel verilerinizin güvenliği için aldığımız önlemler:
          </Paragraph>
          <List>
            <ListItem>SSL şifreleme teknolojisi kullanımı</ListItem>
            <ListItem>Güvenli veri depolama sistemleri</ListItem>
            <ListItem>Düzenli güvenlik güncellemeleri</ListItem>
            <ListItem>Personel eğitimi ve bilinçlendirme</ListItem>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>6. Çerezler</SectionTitle>
          <Paragraph>
            Web sitemizde kullanılan çerezler hakkında bilgi:
          </Paragraph>
          <List>
            <ListItem>Zorunlu çerezler: Web sitesinin temel işlevleri için gerekli</ListItem>
            <ListItem>Analitik çerezler: Kullanıcı deneyimini iyileştirmek için kullanılır</ListItem>
            <ListItem>Fonksiyonel çerezler: Kullanıcı tercihlerini hatırlamak için kullanılır</ListItem>
            <ListItem>Reklam çerezleri: Kişiselleştirilmiş reklamlar için kullanılır</ListItem>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>7. Başvuru Hakkı</SectionTitle>
          <Paragraph>
            KVKK kapsamındaki haklarınızı kullanmak için:
          </Paragraph>
          <List>
            <ListItem>Yazılı başvuru formu ile</ListItem>
            <ListItem>Kayıtlı e-posta adresi ile</ListItem>
            <ListItem>Güvenli elektronik imza ile</ListItem>
            <ListItem>Mobil imza ile</ListItem>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>8. İletişim</SectionTitle>
          <Paragraph>
            KVKK kapsamındaki sorularınız için:
          </Paragraph>
          <List>
            <ListItem>E-posta: kvkk@dentacan.com</ListItem>
            <ListItem>Telefon: 0 (212) 123 45 67</ListItem>
            <ListItem>Adres: 1234. Sokak, No:5, Şişli/İstanbul</ListItem>
          </List>
        </ContentSection>
      </ContentWrapper>
    </KVKKContainer>
   </MainLayout>
  );
};

export default KVKK;