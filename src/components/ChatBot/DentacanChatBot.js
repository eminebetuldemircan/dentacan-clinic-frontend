import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTooth, faComment, faTimes, faCalendarAlt,
  faMapMarkerAlt, faPhoneAlt, faClock, faUserMd,
  faMoneyBillWave, faTeeth, faTeethOpen, faSmile,
  faSyringe, faXRay, faBaby, faFlask, faProcedures,
  faBars, faEnvelope, faStar as solidStar, faStarHalfAlt,
  faToothbrush, faUser,
  faHospital, faStethoscope, faPrescriptionBottleAlt,
  faShieldAlt, faCreditCard, faHandHoldingMedical
} from '@fortawesome/free-solid-svg-icons'; 
import { faStar as regularStar, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
`;

const ChatbotButton = styled.button`
  background-color: #00b4d8;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0096c7;
    transform: scale(1.1);
  }
`;

const ChatbotWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: ${props => props.isOpen ? 'block' : 'none'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(20px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 90vw;
    right: 5vw;
  }
`;

const ChatbotHeader = styled.div`
  background-color: #00b4d8;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatbotTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
`;

const ChatbotClose = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: rotate(90deg);
  }
`;

const ChatbotBody = styled.div`
  height: 400px;
  overflow-y: auto;
  padding: 15px;
  background-color: #f8f9fa;
`;

const ChatbotFooter = styled.div`
  padding: 15px;
  background-color: white;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
`;

const ChatbotInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 30px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00b4d8;
    box-shadow: 0 0 0 2px rgba(0, 180, 216, 0.2);
  }
`;

const ChatbotSend = styled.button`
  background-color: #00b4d8;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #0096c7;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Message = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isBot ? 'flex-start' : 'flex-end'};
`;

const MessageContent = styled.div`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: ${props => props.isBot ? '15px 15px 15px 5px' : '15px 15px 5px 15px'};
  background-color: ${props => props.isBot ? 'white' : '#00b4d8'};
  color: ${props => props.isBot ? '#333' : 'white'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  font-size: 0.95rem;
  word-break: break-word;
  animation: ${props => props.isBot ? 'fadeInLeft' : 'fadeInRight'} 0.3s ease;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const QuickReplies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const QuickReply = styled.button`
  background-color: #e9f7fe;
  color: #00b4d8;
  border: none;
  border-radius: 15px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #00b4d8;
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.secondary ? '#f8f9fa' : '#00b4d8'};
  color: ${props => props.secondary ? '#333' : 'white'};
  border: ${props => props.secondary ? '1px solid #ddd' : 'none'};
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  gap: 8px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.secondary ? '#e9ecef' : '#0096c7'};
    color: ${props => props.secondary ? '#333' : 'white'};
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const InfoCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  margin-top: 10px;
  border-left: 4px solid #00b4d8;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 0.9rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

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

  return <div style={{ color: '#f1c40f', margin: '5px 0' }}>{stars}</div>;
};

const DentacanChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [askedForName, setAskedForName] = useState(false);
  const messagesEndRef = useRef(null);

  // Dental clinic information database
  const dentalDatabase = {
    treatments: {
      'beyazlatma': {
        title: 'Diş Beyazlatma',
        description: 'Profesyonel beyazlatma teknikleriyle 3-4 ton açık renk sağlayan tedavi yöntemi. Ofis tipi ve ev tipi olmak üzere iki şekilde uygulanır. Güvenli ve etkili bir yöntemle dişlerinizin doğal rengini açıyoruz.',
        duration: '1-2 hafta',
        price: '2000-5000 TL',
        icon: faFlask,
        link: '/dis-beyazlatma',
        benefits: [
          'Sigara, çay, kahve lekelerini giderir',
          'Minimum hassasiyet',
          '1 saatte sonuç alınabilir'
        ]
      },
      'estetik': {
        title: 'Estetik Diş Hekimliği',
        description: 'Laminate veneer, zirkonyum kaplama ve dijital gülüş tasarımı ile mükemmel sonuçlar sunuyoruz. Kişiye özel gülüş tasarımı ile hayalinizdeki gülüşe kavuşun.',
        duration: '2-4 hafta',
        price: '3000-20000 TL',
        icon: faSmile,
        link: '/estetik-dis',
        benefits: [
          'Doğal görünümlü',
          'Uzun ömürlü',
          'Kişiye özel tasarım'
        ]
      },
      'implant': {
        title: 'İmplant Tedavisi',
        description: 'Tek dişten tam ağız implantlara, doğal görünümlü kalıcı çözümler sunuyoruz. All-on-4 ve zygoma implant teknikleri uygulanmaktadır. %98 başarı oranıyla eksik dişlerinize çözüm sunuyoruz.',
        duration: '3-6 ay',
        price: '8000-15000 TL',
        icon: faProcedures,
        link: '/implant-tedavisi',
        benefits: [
          'Doğal diş hissi',
          'Kemik kaybını önler',
          'Uzun ömürlü çözüm'
        ]
      },
      'ortodonti': {
        title: 'Ortodonti (Diş Teli Tedavisi)',
        description: 'Şeffaf plaklar, lingual braketler ve geleneksel tellerle çapraşıklık düzeltme tedavileri. Çocuk ve yetişkinler için özel tedavi planları sunuyoruz.',
        duration: '6-24 ay',
        price: '15000-40000 TL',
        icon: faSmile,
        link: '/ortodonti-tedavisi',
        benefits: [
          'Görünmeyen teller seçeneği',
          'Daha sağlıklı diş etleri',
          'Daha iyi çiğneme fonksiyonu'
        ]
      },
      'cerrahi': {
        title: 'Ağız, Diş ve Çene Cerrahisi',
        description: '20 yaş diş çekimi, kist operasyonları ve ileri cerrahi müdahaleler uzman ekibimizce yapılmaktadır. Ağrısız ve konforlu cerrahi deneyimi sunuyoruz.',
        duration: '1-2 hafta iyileşme',
        price: '1000-10000 TL',
        icon: faSyringe,
        link: '/agiz-dis-cene-cerrahi',
        benefits: [
          'Deneyimli cerrahlar',
          'Hızlı iyileşme',
          'Minimum ağrı'
        ]
      },
      'periodontoloji': {
        title: 'Periodontoloji (Diş Eti Hastalıkları)',
        description: 'Diş eti tedavileri, greftleme işlemleri ve estetik diş eti düzenlemeleri yapılmaktadır. Diş eti çekilmesi ve iltihaplarına kalıcı çözümler sunuyoruz.',
        duration: 'Değişken',
        price: '1000-10000 TL',
        icon: faTooth,
        link: '/periodontoloji',
        benefits: [
          'Diş kaybını önler',
          'Ağız kokusunu giderir',
          'Daha sağlıklı diş etleri'
        ]
      },
      'pedodonti': {
        title: 'Pedodonti (Çocuk Diş Hekimliği)',
        description: 'Çocuklara özel koruyucu uygulamalar ve eğlenceli tedavi ortamı sunuyoruz. Çocuklarınızın diş sağlığını uzman ellerle koruyun.',
        duration: 'Değişken',
        price: '500-3000 TL',
        icon: faBaby,
        link: '/pedodonti',
        benefits: [
          'Çocuklara özel yaklaşım',
          'Koruyucu uygulamalar',
          'Eğlenceli tedavi ortamı'
        ]
      },
      'kanal': {
        title: 'Endodonti (Kanal Tedavi)',
        description: 'Mikroskop altında hassas kanal tedavileri ve kök ucu rezeksiyonları yapılmaktadır. Dişinizi kurtarmak için en etkili yöntemleri uyguluyoruz.',
        duration: '1-3 seans',
        price: '1500-3000 TL',
        icon: faTeethOpen,
        link: '/endodonti',
        benefits: [
          'Diş kurtarma şansı',
          'Ağrısız tedavi',
          'Mikroskop altında detaylı çalışma'
        ]
      },
      'dolgu': {
        title: 'Konservatif Diş Tedavisi (Dolgu Uygulaması)',
        description: 'Kompozit ve porselen dolgularla doğal görünümlü restorasyonlar yapılmaktadır. Çürük dişlerinizi estetik ve sağlam bir şekilde tedavi ediyoruz.',
        duration: '30-60 dakika',
        price: '500-1500 TL',
        icon: faTeeth,
        link: '/konservatif-dis',
        benefits: [
          'Doğal görünüm',
          'Tek seansta tamamlanır',
          'Uzun ömürlü'
        ]
      },
      'radyoloji': {
        title: 'Oral Diagnoz ve Radyoloji',
        description: 'Dijital panoramik ve periapikal röntgenlerle kesin teşhis imkanı sunuyoruz. Düşük radyasyonlu cihazlarla güvenli görüntüleme yapıyoruz.',
        duration: '15-30 dakika',
        price: '200-500 TL',
        icon: faXRay,
        link: '/radyoloji',
        benefits: [
          'Düşük radyasyon',
          'Anında sonuç',
          'Kesin teşhis'
        ]
      },
      'sedasyon': {
        title: 'Genel Anestezi ve Sedasyon',
        description: 'Diş hekimi korkusu olan hastalar için güvenli sedasyon çözümleri sunuyoruz. Hiçbir şey hissetmeden tedavinizi tamamlayın.',
        duration: 'Değişken',
        price: '1500-5000 TL',
        icon: faSyringe,
        link: '/genel-anestezi',
        benefits: [
          'Ağrısız tedavi',
          'Bilinç kapalıyken tüm işlemler',
          'Deneyimli anestezi uzmanı'
        ]
      },
      'acil': {
        title: 'Acil Tedavi Hizmetleri',
        description: 'Ani diş ağrıları ve travmatik yaralanmalarda 7/24 acil müdahale hizmeti veriyoruz. Acil durumlarda hemen bize ulaşın.',
        duration: 'Değişken',
        price: '500-3000 TL',
        icon: faProcedures,
        link: '/acil-tedavi',
        benefits: [
          '7/24 hizmet',
          'Hızlı müdahale',
          'Ağrı kesici çözümler'
        ]
      },
      'protez': {
        title: 'Diş Protezleri',
        description: 'Hareketli ve sabit protezlerle eksik dişlerinizi tamamlıyoruz. Yüksek estetik ve fonksiyon sunan protez çözümleri sunuyoruz.',
        duration: '2-4 hafta',
        price: '3000-15000 TL',
        icon: faTeethOpen,
        link: '/dis-protezleri',
        benefits: [
          'Doğal görünüm',
          'Rahat kullanım',
          'Uzun ömürlü'
        ]
      },
      'bruksizm': {
        title: 'Bruksizm (Diş Gıcırdatma) Tedavisi',
        description: 'Gece plağı uygulamaları ve botoks tedavileri ile diş gıcırdatma sorununuza çözüm sunuyoruz.',
        duration: '1-2 hafta',
        price: '1000-5000 TL',
        icon: faTeeth,
        link: '/bruksizm-tedavisi',
        benefits: [
          'Diş aşınmasını önler',
          'Çene ağrısını giderir',
          'Kişiye özel plaklar'
        ]
      }
    },
    doctors: [
      { 
        name: 'Uzm. Dr. Dt. Ahmet CAN', 
        specialty: 'Çene Cerrahisi Uzmanı', 
        experience: '15 yıl',
        bio: '2002 Hacettepe Üniversitesi mezunu. Cumhuriyet Üniversitesi\'nde uzmanlık eğitimi aldı. İleri çene cerrahisi ve implantoloji alanında İsviçre\'de eğitim gördü. 5000\'den fazla başarılı cerrahi operasyon gerçekleştirdi.',
        education: 'Hacettepe Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Almanca',
        photo: '/doctors/dr-ahmet-can.jpg',
        schedule: 'Pazartesi, Çarşamba, Cuma'
      },
      { 
        name: 'Uzm. Dr. Dt. Ayşe DEMİR', 
        specialty: 'Ortodonti Uzmanı', 
        experience: '12 yıl',
        bio: 'Marmara Üniversitesi Ortodonti mezunu. Invisalign Gold Provider sertifikalı. Lingual ortodonti ve şeffaf plak tedavilerinde uzman. 1000\'den fazla başarılı ortodonti tedavisi uyguladı.',
        education: 'Marmara Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Fransızca',
        photo: '/doctors/dr-ayse-demir.jpg',
        schedule: 'Salı, Perşembe, Cumartesi'
      },
      { 
        name: 'Uzm. Dr. Dt. Mehmet YILMAZ', 
        specialty: 'İmplantoloji Uzmanı', 
        experience: '10 yıl',
        bio: 'Ankara Üniversitesi mezunu. All-on-4 ve zygoma implant tekniklerinde İstanbul\'da uzmanlık eğitimi aldı. 3000+ başarılı implant uygulaması bulunmaktadır.',
        education: 'Ankara Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce',
        photo: '/doctors/dr-mehmet-yilmaz.jpg',
        schedule: 'Pazartesi-Salı-Çarşamba-Perşembe'
      },
      { 
        name: 'Uzm. Dr. Dt. Zeynep KAYA', 
        specialty: 'Pedodonti Uzmanı', 
        experience: '8 yıl',
        bio: 'Gazi Üniversitesi Pedodonti mezunu. Çocuklarda dental anksiyete yönetimi ve sedasyon uygulamalarında uzman. Çocuklarla iletişimde özel teknikler kullanıyor.',
        education: 'Gazi Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, İspanyolca',
        photo: '/doctors/dr-zeynep-kaya.jpg',
        schedule: 'Pazartesi, Çarşamba, Cuma, Cumartesi'
      },
      { 
        name: 'Uzm. Dr. Dt. Ali ŞAHİN', 
        specialty: 'Periodontoloji Uzmanı', 
        experience: '7 yıl',
        bio: 'Ege Üniversitesi Periodontoloji mezunu. Lazer destekli periodontal tedaviler ve diş eti estetiği konusunda ABD\'de eğitim aldı. Diş eti hastalıklarında uzmanlaşmıştır.',
        education: 'Ege Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Almanca',
        photo: '/doctors/dr-ali-sahin.jpg',
        schedule: 'Salı, Perşembe, Cumartesi'
      },
      { 
        name: 'Uzm. Dr. Dt. Fatma ARSLAN', 
        specialty: 'Estetik Diş Hekimi', 
        experience: '6 yıl',
        bio: 'İstanbul Üniversitesi mezunu. Digital Smile Design alanında uzman. Laminate veneer ve zirkonyum kaplamalarda uzman. 500\'den fazla gülüş tasarımı yaptı.',
        education: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Arapça',
        photo: '/doctors/dr-fatma-arslan.jpg',
        schedule: 'Pazartesi-Cuma'
      }
    ],
    clinicInfo: {
      name: 'Dentacan Ağız ve Diş Sağlığı Kliniği',
      address: '1234. Sokak, No:5, Şişli/İstanbul',
      phone: '+90 (216) 123 45 67',
      whatsapp: '+90 (555) 123 45 67',
      email: 'info@dentacan.com',
      mapUrl: 'https://goo.gl/maps/xyz123',
      hours: {
        weekdays: '08:30 - 17:30',
        evening: '17:30 - 23:00 (Nöbetçi Hekim)',
        sunday: '08:30 - 23:00 (Nöbetçi Hekim)'
      },
      paymentOptions: [
        'Nakit',
        'Kredi Kartı (taksit imkanı)',
        'Banka Havalesi',
        'Sigorta anlaşmalı kurumlar (SGK ve özel sigortalar)'
      ],
      facilities: [
        'Dijital görüntüleme sistemleri',
        'Mikroskop altında tedavi',
        'Lazer diş hekimliği',
        'Sterilizasyon ünitesi',
        'Engelli erişimi',
        'Otopark',
        'Wi-Fi',
        'Çocuk oyun alanı'
      ],
      about: `DENTACAN Ağız ve Diş Sağlığı Kliniği, 2010 yılında Dt. Ahmet CAN tarafından, modern diş hekimliği hizmetlerini en üst standartlarda sunmak amacıyla kurulmuştur. Başlangıçta küçük bir klinik olarak hizmet veren merkezimiz, hasta memnuniyeti odaklı yaklaşımımız sayesinde hızla büyüyerek bugünkü konumuna ulaşmıştır.

Kuruluşumuzun temel amacı, ağız ve diş sağlığı alanında bütüncül bir yaklaşım sunarak, hastalarımızın yaşam kalitesini artırmaktır. Bunu yaparken en son teknolojik ekipmanları kullanıyor, sterilizasyon ve hijyen standartlarının en üst seviyede tutulmasına özen gösteriyoruz.

Ekibimiz, alanlarında uzmanlaşmış, deneyimli diş hekimleri ve sağlık personelinden oluşmaktadır. Sürekli eğitim ve gelişime inanan bir anlayışla, mesleki yenilikleri yakından takip ediyor, hastalarımıza en güncel tedavi yöntemlerini sunuyoruz.

Bugün DENTACAN olarak, binlerce hastamızın gülüşüne dokunmanın gururunu yaşıyor, her geçen gün daha fazla insana ulaşmak için çalışmalarımızı sürdürüyoruz.`,
      awards: [
        '2022 Yılın En İyi Diş Kliniği Ödülü',
        'Avrupa Dental Excellence Sertifikası',
        'ISO 9001 Kalite Belgesi',
        'Hasta Memnuniyeti Altın Ödülü'
      ]
    },
    testimonials: [
      {
        name: 'Mehmet Y.',
        treatment: 'İmplant Tedavisi',
        comment: 'Çok profesyonel bir ekip, ağrısız ve konforlu bir tedavi süreci geçirdim. Kesinlikle tavsiye ederim. İmplantlarım artık kendi dişlerim gibi hissediyorum.',
        rating: 5,
        date: '15.03.2023'
      },
      {
        name: 'Ayşe K.',
        treatment: 'Ortodonti Tedavisi',
        comment: 'Kızımın diş telleri için geldik, çocuklarla iletişimleri mükemmel. Çok memnun kaldık. Kızım artık diş hekimine gitmekten korkmuyor.',
        rating: 4.5,
        date: '22.01.2023'
      },
      {
        name: 'Ali V.',
        treatment: 'Diş Beyazlatma',
        comment: 'Hızlı ve etkili bir beyazlatma işlemi oldu. Sonuçlar çok doğal görünüyor. Fiyat/performans olarak çok iyi.',
        rating: 4,
        date: '05.12.2022'
      },
      {
        name: 'Zeynep T.',
        treatment: 'Laminate Veneer',
        comment: 'Gülüş tasarımı için geldim, hayal ettiğimden daha güzel sonuçlar aldım. Çok titiz ve özenli çalışıyorlar.',
        rating: 5,
        date: '30.10.2022'
      },
      {
        name: 'Can D.',
        treatment: '20 Yaş Diş Çekimi',
        comment: 'Çok korkuyordum ama hiç ağrı hissetmedim. Doktorun yatıştırıcı tavrı sayesinde rahat bir operasyon geçirdim.',
        rating: 4.5,
        date: '18.09.2022'
      }
    ],
    faq: [
      {
        question: "Randevu nasıl alabilirim?",
        answer: "Randevunuzu web sitemiz üzerinden online olarak, telefonla arayarak veya WhatsApp üzerinden iletişime geçerek alabilirsiniz."
      },
      {
        question: "Ödeme seçenekleri nelerdir?",
        answer: "Nakit, kredi kartı (taksit imkanı dahil), banka havalesi ve sigorta anlaşmalı kurumlar ile ödeme yapabilirsiniz."
      },
      {
        question: "Acil durumlarda ne yapmalıyım?",
        answer: "Acil durumlarda 7/24 hizmet veren acil hattımızı arayabilirsiniz: 0212 123 45 67"
      },
      {
        question: "Diş beyazlatma kalıcı mıdır?",
        answer: "Diş beyazlatma sonuçları genellikle 1-2 yıl sürer. Sigara, çay, kahve gibi leke yapıcı maddelerden uzak durarak bu süreyi uzatabilirsiniz."
      },
      {
        question: "Çocuklar için ilk diş muayenesi ne zaman yapılmalı?",
        answer: "İlk diş muayenesinin ilk diş çıktıktan sonra veya en geç 1 yaşında yapılması önerilir."
      },
      {
        question: "İmplant tedavisi herkese uygulanabilir mi?",
        answer: "Genel sağlık durumu uygun olan ve yeterli kemik dokusu bulunan herkese implant uygulanabilir. Detaylı muayene sonrası kesin karar verilir."
      },
      {
        question: "Diş gıcırdatma (bruksizm) tedavisi nasıl yapılır?",
        answer: "Gece plağı kullanımı, botoks uygulaması ve stres yönetimi teknikleri ile tedavi edilebilir."
      },
      {
        question: "Diş eti çekilmesi tedavi edilebilir mi?",
        answer: "Evet, diş eti greftleme operasyonları ve lazer destekli tedavilerle diş eti çekilmesi tedavi edilebilir."
      }
    ],
    emergencyInstructions: [
      {
        title: "Şiddetli diş ağrısı",
        steps: [
          "Ağrı kesici alın (aspirin dışında)",
          "Soğuk kompres uygulayın",
          "Sıcak yiyecek/içeceklerden kaçının",
          "En kısa sürede hekime başvurun"
        ]
      },
      {
        title: "Diş kırılması",
        steps: [
          "Kırık parçayı temiz suda saklayın",
          "Keskin kenarları yumuşak mumla kapatın",
          "Ağrı varsa ağrı kesici alın",
          "24 saat içinde hekime başvurun"
        ]
      },
      {
        title: "Dişin tamamen çıkması",
        steps: [
          "Dişi kökünden tutmayın",
          "Temiz su veya süt içinde saklayın",
          "Mümkünse yerine yerleştirin",
          "30 dakika içinde hekime ulaşın"
        ]
      },
      {
        title: "Ağız içi şişlik",
        steps: [
          "Soğuk kompres uygulayın",
          "Yüksek yastıkta yatın",
          "Sıcak yiyecek/içeceklerden kaçının",
          "Acilen hekime başvurun"
        ]
      }
    ]
  };

  // Initial messages
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        text: "Merhaba! Dentacan Diş Kliniği'nin dijital asistanıyım. Size nasıl yardımcı olabilirim?",
        isBot: true,
        quickReplies: [
          "Randevu almak istiyorum",
          "Tedaviler hakkında bilgi",
          "Doktorlarınız kimler?",
          "Kliniğiniz nerede?"
        ]
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setAskedForName(false);
    }
 };

const handleSendMessage = () => {
if (inputValue.trim() === '') return;

// Add user message to chat
const userMessage = { text: inputValue, isBot: false };
setMessages(prev => [...prev, userMessage]);
setInputValue('');

// Process the message and generate bot response
setTimeout(() => {
  generateBotResponse(inputValue);
}, 500);
};

const handleQuickReply = (reply) => {
const userMessage = { text: reply, isBot: false };
setMessages(prev => [...prev, userMessage]);

setTimeout(() => {
  generateBotResponse(reply);
}, 500);
};

const generateBotResponse = (userInput) => {
let response = { text: '', isBot: true, quickReplies: [] };
const lowerInput = userInput.toLowerCase();

if (!askedForName && messages.length === 1) {
  response.text = `Size daha iyi yardımcı olabilmemiz için adınızı öğrenebilir miyim?`;
  setAskedForName(true);
} 
else if (askedForName && userName === '') {
  setUserName(userInput);
  response.text = `Hoş geldiniz ${userInput}! Size nasıl yardımcı olabilirim?`;
  response.quickReplies = [
    "Randevu almak istiyorum",
    "Tedaviler hakkında bilgi",
    "Doktorlarınız kimler?",
    "Kliniğiniz nerede?"
  ];
}
else if (lowerInput.includes('randevu') || lowerInput.includes('rezervasyon')) {
  response.text = `Randevu almak için aşağıdaki seçeneklerden birini seçebilirsiniz:`;
  response.quickReplies = [
    "Online randevu almak istiyorum",
    "Telefonla randevu almak istiyorum",
    "Hangi günler randevu alabilirim?",
    "Randevu ücretleri nedir?"
  ];
}
else if (lowerInput.includes('online randevu')) {
  response.text = `Online randevu sistemimize aşağıdaki butondan ulaşabilirsiniz. Randevu almak için uygun gün ve saati seçebilirsiniz.`;
  response.action = {
    text: "Online Randevu Al",
    link: "/randevu",
    icon: faCalendarCheck
  };
}
else if (lowerInput.includes('telefonla randevu')) {
  response.text = `Randevu için bizi arayabilirsiniz. Telefon numaramız: ${dentalDatabase.clinicInfo.phone}\n\nÇalışma saatlerimiz:\nHafta içi: ${dentalDatabase.clinicInfo.hours.weekdays}\nAkşam: ${dentalDatabase.clinicInfo.hours.evening}\nPazar: ${dentalDatabase.clinicInfo.hours.sunday}`;
}
else if (lowerInput.includes('hangi günler') || lowerInput.includes('randevu günleri')) {
  response.text = `Kliniğimizin çalışma saatleri:\n\nHafta içi: ${dentalDatabase.clinicInfo.hours.weekdays}\nAkşam: ${dentalDatabase.clinicInfo.hours.evening}\nPazar: ${dentalDatabase.clinicInfo.hours.sunday}\n\nNöbetçi hekimimiz her zaman hizmetinizdedir.`;
}
else if (lowerInput.includes('ücret') || lowerInput.includes('fiyat')) {
  response.text = `Tedavi ücretleri tedavinin türüne ve kapsamına göre değişiklik göstermektedir. Aşağıdaki seçeneklerden hangi tedavi ile ilgili fiyat bilgisi almak istersiniz?`;
  response.quickReplies = Object.keys(dentalDatabase.treatments).slice(0, 5).map(key => dentalDatabase.treatments[key].title);
}
else if (lowerInput.includes('tedavi') || lowerInput.includes('hizmet')) {
  response.text = `Kliniğimizde verdiğimiz başlıca tedavi hizmetleri şunlardır. Detaylı bilgi almak istediğiniz tedaviyi seçebilirsiniz:`;
  response.quickReplies = Object.keys(dentalDatabase.treatments).slice(0, 5).map(key => dentalDatabase.treatments[key].title);
}
else if (Object.keys(dentalDatabase.treatments).some(key => lowerInput.includes(key) || lowerInput.includes(dentalDatabase.treatments[key].title.toLowerCase()))) {
  const treatmentKey = Object.keys(dentalDatabase.treatments).find(key => 
    lowerInput.includes(key) || lowerInput.includes(dentalDatabase.treatments[key].title.toLowerCase())
  );
  const treatment = dentalDatabase.treatments[treatmentKey];
  
  response.text = `${treatment.title} hakkında bilgiler:\n\n${treatment.description}\n\nSüre: ${treatment.duration}\nFiyat Aralığı: ${treatment.price}\n\nFaydaları:\n${treatment.benefits.map(b => `• ${b}`).join('\n')}`;
  
  response.action = {
    text: `Daha fazla bilgi için ${treatment.title} sayfasını ziyaret edin`,
    link: treatment.link,
    icon: treatment.icon
  };
}
else if (lowerInput.includes('doktor') || lowerInput.includes('hekim')) {
  response.text = `Kliniğimizde görev yapan uzman diş hekimlerimiz şunlardır:\n\n${dentalDatabase.doctors.map(d => `• ${d.name} - ${d.specialty}`).join('\n')}\n\nHangi doktorumuz hakkında bilgi almak istersiniz?`;
  response.quickReplies = dentalDatabase.doctors.slice(0, 4).map(d => d.name);
}
else if (dentalDatabase.doctors.some(d => lowerInput.includes(d.name.toLowerCase()))) {
  const doctor = dentalDatabase.doctors.find(d => lowerInput.includes(d.name.toLowerCase()));
  response.text = `${doctor.name} - ${doctor.specialty}\n\nDeneyim: ${doctor.experience}\nEğitim: ${doctor.education}\nÇalışma Günleri: ${doctor.schedule}\n\n${doctor.bio}`;
  
  response.action = {
    text: `${doctor.name} ile randevu al`,
    link: `/randevu?doctor=${encodeURIComponent(doctor.name)}`,
    icon: faUserMd
  };
}
else if (lowerInput.includes('konum') || lowerInput.includes('nerede') || lowerInput.includes('adres')) {
  response.text = `Kliniğimizin adresi:\n\n${dentalDatabase.clinicInfo.address}\n\nTelefon: ${dentalDatabase.clinicInfo.phone}\n\nÇalışma saatlerimiz:\nHafta içi: ${dentalDatabase.clinicInfo.hours.weekdays}\nAkşam: ${dentalDatabase.clinicInfo.hours.evening}\nPazar: ${dentalDatabase.clinicInfo.hours.sunday}`;
  
  response.action = {
    text: "Haritada görüntüle",
    link: dentalDatabase.clinicInfo.mapUrl,
    icon: faMapMarkerAlt
  };
}
else if (lowerInput.includes('saat') || lowerInput.includes('açık')) {
  response.text = `Çalışma saatlerimiz:\n\nHafta içi: ${dentalDatabase.clinicInfo.hours.weekdays}\nAkşam: ${dentalDatabase.clinicInfo.hours.evening}\nPazar: ${dentalDatabase.clinicInfo.hours.sunday}\n\nNöbetçi hekimimiz her zaman hizmetinizdedir.`;
}
else if (lowerInput.includes('iletişim') || lowerInput.includes('telefon') || lowerInput.includes('numara')) {
  response.text = `Bize aşağıdaki iletişim bilgilerinden ulaşabilirsiniz:\n\nTelefon: ${dentalDatabase.clinicInfo.phone}\nWhatsApp: ${dentalDatabase.clinicInfo.whatsapp}\nE-posta: ${dentalDatabase.clinicInfo.email}\nAdres: ${dentalDatabase.clinicInfo.address}`;
  
  response.actions = [
    {
      text: "Ara",
      link: `tel:${dentalDatabase.clinicInfo.phone.replace(/[^0-9]/g, '')}`,
      icon: faPhoneAlt,
      secondary: false
    },
    {
      text: "WhatsApp",
      link: `https://wa.me/${dentalDatabase.clinicInfo.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: faComment,
      secondary: true
    }
  ];
}
else if (lowerInput.includes('acil') || lowerInput.includes('yaralanma') || lowerInput.includes('ağrı')) {
  response.text = `Acil durumlarda 7/24 hizmet veren acil hattımızı arayabilirsiniz: ${dentalDatabase.clinicInfo.phone}\n\nAşağıdaki acil durum talimatlarını inceleyebilirsiniz:`;
  
  response.quickReplies = dentalDatabase.emergencyInstructions.map(e => e.title);
}
else if (dentalDatabase.emergencyInstructions.some(e => lowerInput.includes(e.title.toLowerCase()))) {
  const emergency = dentalDatabase.emergencyInstructions.find(e => lowerInput.includes(e.title.toLowerCase()));
  response.text = `${emergency.title} durumunda yapılması gerekenler:\n\n${emergency.steps.map((s, i) => `${i+1}. ${s}`).join('\n')}\n\nLütfen en kısa sürede hekiminize başvurun.`;
}
else if (lowerInput.includes('yorum') || lowerInput.includes('memnuniyet') || lowerInput.includes('değerlendirme')) {
  response.text = `Hastalarımızın yorumları:\n\n${dentalDatabase.testimonials.slice(0, 3).map(t => `"${t.comment}" - ${t.name} (${t.treatment})`).join('\n\n')}`;
  
  response.action = {
    text: "Tüm yorumları gör",
    link: "/hasta-yorumlari",
    icon: faComment
  };
}
else if (lowerInput.includes('ödeme') || lowerInput.includes('fiyat') || lowerInput.includes('taksit')) {
  response.text = `Ödeme seçeneklerimiz:\n\n${dentalDatabase.clinicInfo.paymentOptions.map((p, i) => `${i+1}. ${p}`).join('\n')}\n\nSigorta anlaşmalı kurumlar için lütfen iletişime geçiniz.`;
}
else if (lowerInput.includes('sss') || lowerInput.includes('sık sorulan')) {
  response.text = `Sık sorulan sorulardan bazıları:\n\n${dentalDatabase.faq.slice(0, 3).map((q, i) => `${i+1}. ${q.question}`).join('\n')}\n\nHangisi hakkında bilgi almak istersiniz?`;
  response.quickReplies = dentalDatabase.faq.slice(0, 5).map(q => q.question);
}
else if (dentalDatabase.faq.some(q => lowerInput.includes(q.question.toLowerCase()))) {
  const faq = dentalDatabase.faq.find(q => lowerInput.includes(q.question.toLowerCase()));
  response.text = `Soru: ${faq.question}\n\nCevap: ${faq.answer}`;
}
else {
  response.text = `Anlayamadım, lütfen başka şekilde ifade edebilir misiniz? Size şu konularda yardımcı olabilirim:`;
  response.quickReplies = [
    "Randevu almak istiyorum",
    "Tedaviler hakkında bilgi",
    "Doktorlarınız kimler?",
    "Kliniğiniz nerede?"
  ];
}

setMessages(prev => [...prev, response]);
};

const handleKeyPress = (e) => {
if (e.key === 'Enter') {
handleSendMessage();
}
};

return (
<ChatbotContainer>
<ChatbotButton onClick={toggleChatbot}>
<FontAwesomeIcon icon={isOpen ? faTimes : faComment} />
</ChatbotButton>

  <ChatbotWindow isOpen={isOpen}>
    <ChatbotHeader>
      <ChatbotTitle>
        <FontAwesomeIcon icon={faTooth} />
        Dentacan Asistanı
      </ChatbotTitle>
      <ChatbotClose onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faTimes} />
      </ChatbotClose>
    </ChatbotHeader>

    <ChatbotBody>
      {messages.map((message, index) => (
        <Message key={index} isBot={message.isBot}>
          <MessageContent isBot={message.isBot}>
            {message.text}
            
            {message.quickReplies && (
              <QuickReplies>
                {message.quickReplies.map((reply, i) => (
                  <QuickReply key={i} onClick={() => handleQuickReply(reply)}>
                    {reply}
                  </QuickReply>
                ))}
              </QuickReplies>
            )}

            {message.action && (
              <ActionButton to={message.action.link}>
                <FontAwesomeIcon icon={message.action.icon} />
                {message.action.text}
              </ActionButton>
            )}

            {message.actions && message.actions.map((action, i) => (
              <ActionButton 
                key={i} 
                to={action.link} 
                secondary={action.secondary}
                target="_blank"
              >
                <FontAwesomeIcon icon={action.icon} />
                {action.text}
              </ActionButton>
            ))}

            {message.infoCard && (
              <InfoCard>
                {message.infoCard.items.map((item, i) => (
                  <InfoItem key={i}>
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </InfoItem>
                ))}
              </InfoCard>
            )}
          </MessageContent>
        </Message>
      ))}
      <div ref={messagesEndRef} />
    </ChatbotBody>

    <ChatbotFooter>
      <ChatbotInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Mesajınızı yazın..."
      />
      <ChatbotSend onClick={handleSendMessage}>
        <FontAwesomeIcon icon={faComment} />
      </ChatbotSend>
    </ChatbotFooter>
  </ChatbotWindow>
</ChatbotContainer>
);
};

export default DentacanChatBot;

