import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTooth, faComment, faTimes, faCalendarAlt,
  faMapMarkerAlt, faPhoneAlt, faClock, faUserMd,
  faMoneyBillWave, faTeeth, faTeethOpen, faSmile,
  faSyringe, faXRay, faBaby, faFlask, faProcedures,
  faBars, faEnvelope, faStar as solidStar, faStarHalfAlt,
  faUser, faParking,
  faHospital, faStethoscope, faPrescriptionBottleAlt,
  faShieldAlt, faCreditCard, faHandHoldingMedical, faWheelchair,
  faWifi, faChild, faCar, faToilet, faCoffee
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
  const [askedForAppointment, setAskedForAppointment] = useState(false);
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
      },
      'çürük': {
        title: 'Diş Çürüğü Tedavisi',
        description: 'Erken teşhis ve modern dolgu teknikleriyle çürük dişlerinizi kurtarıyoruz. Ağrısız ve konforlu tedavi yöntemleri uyguluyoruz.',
        duration: '30-60 dakika',
        price: '500-2000 TL',
        icon: faTeeth,
        link: '/dis-curugu',
        benefits: [
          'Erken müdahale imkanı',
          'Doğal görünümlü dolgular',
          'Çürük ilerlemesini durdurma'
        ]
      },
      'ağız kokusu': {
        title: 'Ağız Kokusu Tedavisi',
        description: 'Ağız kokusunun nedenlerini tespit ederek kalıcı çözümler sunuyoruz. Profesyonel temizlik ve kişiye özel bakım önerileri ile rahatsız edici kokulardan kurtulun.',
        duration: '1-3 seans',
        price: '1000-3000 TL',
        icon: faTooth,
        link: '/agiz-kokusu',
        benefits: [
          'Nedenin tespiti',
          'Profesyonel temizlik',
          'Kişiye özel bakım planı'
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
        photo: '/images/Anasayfa/Hizmetler/AhmetCan.jpg',
        schedule: 'Pazartesi, Çarşamba, Cuma'
      },
      { 
        name: 'Uzm. Dr. Dt. Ayşe DEMİR', 
        specialty: 'Ortodonti Uzmanı', 
        experience: '12 yıl',
        bio: 'Marmara Üniversitesi Ortodonti mezunu. Invisalign Gold Provider sertifikalı. Lingual ortodonti ve şeffaf plak tedavilerinde uzman. 1000\'den fazla başarılı ortodonti tedavisi uyguladı.',
        education: 'Marmara Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Fransızca',
        photo: '/images/Anasayfa/Hizmetler/AyşeDemir.jpg',
        schedule: 'Salı, Perşembe, Cumartesi'
      },
      { 
        name: 'Uzm. Dr. Dt. Mehmet YILMAZ', 
        specialty: 'İmplantoloji Uzmanı', 
        experience: '10 yıl',
        bio: 'Ankara Üniversitesi mezunu. All-on-4 ve zygoma implant tekniklerinde İstanbul\'da uzmanlık eğitimi aldı. 3000+ başarılı implant uygulaması bulunmaktadır.',
        education: 'Ankara Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce',
        photo: '/images/Anasayfa/Hizmetler/MehmetYılmaz.jpg',
        schedule: 'Pazartesi-Salı-Çarşamba-Perşembe'
      },
      { 
        name: 'Uzm. Dr. Dt. Zeynep KAYA', 
        specialty: 'Pedodonti Uzmanı', 
        experience: '8 yıl',
        bio: 'Gazi Üniversitesi Pedodonti mezunu. Çocuklarda dental anksiyete yönetimi ve sedasyon uygulamalarında uzman. Çocuklarla iletişimde özel teknikler kullanıyor.',
        education: 'Gazi Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, İspanyolca',
        photo: '/images/Anasayfa/Hizmetler/ZeynepKaya.jpg',
        schedule: 'Pazartesi, Çarşamba, Cuma, Cumartesi'
      },
      { 
        name: 'Uzm. Dr. Dt. Ali ŞAHİN', 
        specialty: 'Periodontoloji Uzmanı', 
        experience: '7 yıl',
        bio: 'Ege Üniversitesi Periodontoloji mezunu. Lazer destekli periodontal tedaviler ve diş eti estetiği konusunda ABD\'de eğitim aldı. Diş eti hastalıklarında uzmanlaşmıştır.',
        education: 'Ege Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Almanca',
        photo: '/images/Anasayfa/Hizmetler/AliŞahin.jpg',
        schedule: 'Salı, Perşembe, Cumartesi'
      },
      { 
        name: 'Uzm. Dr. Dt. Fatma ARSLAN', 
        specialty: 'Estetik Diş Hekimi', 
        experience: '6 yıl',
        bio: 'İstanbul Üniversitesi mezunu. Digital Smile Design alanında uzman. Laminate veneer ve zirkonyum kaplamalarda uzman. 500\'den fazla gülüş tasarımı yaptı.',
        education: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi',
        languages: 'İngilizce, Arapça',
        photo: '/images/Anasayfa/Hizmetler/FatmaArslan.jpg',
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
        {name: 'Dijital görüntüleme sistemleri', icon: faXRay},
        {name: 'Mikroskop altında tedavi', icon: faStethoscope},
        {name: 'Lazer diş hekimliği', icon: faShieldAlt},
        {name: 'Sterilizasyon ünitesi', icon: faHandHoldingMedical},
        {name: 'Engelli erişimi', icon: faWheelchair},
        {name: 'Otopark', icon: faParking},
        {name: 'Wi-Fi', icon: faWifi},
        {name: 'Çocuk oyun alanı', icon: faChild},
        {name: 'Bekleme salonu', icon: faCoffee},
        {name: 'Ücretsiz otopark', icon: faCar}
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
      ],
      cancellationPolicy: `Randevu iptal politikamız:
      
1. Randevunuzu iptal etmek veya değiştirmek için en az 24 saat önceden bilgi vermeniz gerekmektedir.

2. İptal işlemini şu şekillerde yapabilirsiniz:
   - Size gönderilen randevu onay emailindeki link üzerinden
   - Telefonla arayarak (+90 (216) 123 45 67)
   - WhatsApp üzerinden (+90 (555) 123 45 67)

3. 24 saatten kısa sürede yapılan iptallerde veya randevuya gelinmediğinde, bir sonraki randevu için depozito alınmaktadır.

4. Acil durumlarda lütfen bizi bilgilendirin, esnek çözümler sunmaya çalışıyoruz.`
    },
    
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
      },
      {
        question: "Kliniğinizde park yeri var mı?",
        answer: "Evet, kliniğimizin önünde ücretsiz hasta otoparkı bulunmaktadır. Ayrıca engelli araçları için özel park alanlarımız mevcuttur."
      },
      {
        question: "Diş fırçalama teknikleri hakkında bilgi verebilir misiniz?",
        answer: "Doğru diş fırçalama teknikleri:\n1. Fırçayı 45 derece açıyla tutun\n2. Yumuşak dairesel hareketlerle fırçalayın\n3. Tüm diş yüzeylerini temizleyin\n4. Dilinizi de fırçalamayı unutmayın\n5. Günde 2 kez, 2 dakika süreyle fırçalayın"
      },
      {
        question: "Diş ipi nasıl kullanılır?",
        answer: "Diş ipi kullanım adımları:\n1. Yaklaşık 45 cm ip koparın\n2. İpi orta parmaklarınıza dolayın\n3. Dişler arasında nazikçe kaydırın\n4. C şekli yaparak diş eti hizasına getirin\n5. Her diş arası için temiz bölüm kullanın"
      },
            {
        question: "Randevu iptal politikası nedir?",
        answer: "Randevularınızı en az 24 saat önceden iptal etmeniz gerekmektedir. Geç iptaller için ücret alınabilir. Acil durumlarda lütfen bizi bilgilendirin."
      }
    ]
  };

  // Initial bot messages
  const initialMessages = [
    {
      text: "Merhaba! Dentacan Ağız ve Diş Sağlığı Kliniği'ne hoş geldiniz. Size nasıl yardımcı olabilirim?",
      isBot: true,
      quickReplies: [
        "Randevu almak istiyorum",
        "Hizmetler hakkında bilgi",
        "Doktorlarınız kimler?",
        "Kliniğiniz nerede?",
        "Fiyat bilgisi almak istiyorum"
      ]
    }
  ];

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle opening/closing chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages(initialMessages);
    }
  };

  // Handle user input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle sending message
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message to chat
    const userMessage = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Process user message and generate bot response
    setTimeout(() => {
      generateBotResponse(inputValue);
    }, 500);
  };

  // Handle quick reply selection
  const handleQuickReply = (reply) => {
    const userMessage = { text: reply, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      generateBotResponse(reply);
    }, 500);
  };

  // Generate bot response based on user input
  const generateBotResponse = (userInput) => {
    let botResponse = { isBot: true };
    const lowerInput = userInput.toLowerCase();

    if (askedForName) {
      setUserName(userInput);
      setAskedForName(false);
      botResponse.text = `Teşekkür ederim ${userInput}. Size nasıl yardımcı olabilirim?`;
      botResponse.quickReplies = [
        "Randevu almak istiyorum",
        "Hizmetler hakkında bilgi",
        "Doktorlarınız kimler?",
        "Kliniğiniz nerede?",
        "Fiyat bilgisi almak istiyorum"
      ];
    } 
    else if (askedForAppointment) {
      setAskedForAppointment(false);
      botResponse.text = "Randevu talebiniz alınmıştır. Size en kısa sürede dönüş yapılacaktır. Başka bir konuda yardımcı olabilir miyim?";
      botResponse.quickReplies = [
        "Hizmetler hakkında bilgi",
        "Doktorlarınız kimler?",
        "Kliniğiniz nerede?",
        "Teşekkürler, bu kadar yeterli"
      ];
    }
    else if (lowerInput.includes('randevu') || lowerInput.includes('rezervasyon')) {
      if (!userName) {
        setAskedForName(true);
        botResponse.text = "Randevu oluşturmak için lütfen adınızı ve soyadınızı yazar mısınız?";
      } else {
        setAskedForAppointment(true);
        botResponse.text = `${userName}, hangi tedavi için randevu almak istiyorsunuz?`;
        botResponse.quickReplies = Object.keys(dentalDatabase.treatments).map(key => dentalDatabase.treatments[key].title);
      }
    }
    else if (lowerInput.includes('hizmet') || lowerInput.includes('tedavi') || lowerInput.includes('servis')) {
      botResponse.text = "Kliniğimizde sunulan başlıca tedavi hizmetleri:";
      botResponse.quickReplies = Object.keys(dentalDatabase.treatments).map(key => dentalDatabase.treatments[key].title);
    }
    else if (lowerInput.includes('doktor') || lowerInput.includes('hekim')) {
      botResponse.text = "Uzman diş hekimlerimiz:";
      botResponse.doctors = dentalDatabase.doctors.slice(0, 3);
      botResponse.quickReplies = ["Tüm doktorları gör", "Randevu almak istiyorum"];
    }
    else if (lowerInput.includes('tüm doktor')) {
      botResponse.text = "Tüm diş hekimlerimiz:";
      botResponse.doctors = dentalDatabase.doctors;
      botResponse.quickReplies = ["Randevu almak istiyorum", "Kliniğiniz nerede?"];
    }
    else if (lowerInput.includes('konum') || lowerInput.includes('nerede') || lowerInput.includes('adres')) {
      botResponse.text = "Kliniğimizin iletişim bilgileri:";
      botResponse.infoCard = true;
      botResponse.quickReplies = ["Randevu almak istiyorum", "Çalışma saatleri nedir?"];
    }
    else if (lowerInput.includes('saat') || lowerInput.includes('açık')) {
      botResponse.text = "Çalışma saatlerimiz:";
      botResponse.infoHours = true;
      botResponse.quickReplies = ["Randevu almak istiyorum", "Kliniğiniz nerede?"];
    }
    else if (lowerInput.includes('fiyat') || lowerInput.includes('ücret') || lowerInput.includes('tutar')) {
      botResponse.text = "Tedavi ücretleri tedavi türüne ve karmaşıklığına göre değişmektedir. Hangi tedavi hakkında fiyat bilgisi almak istersiniz?";
      botResponse.quickReplies = Object.keys(dentalDatabase.treatments).map(key => dentalDatabase.treatments[key].title);
    }
    else if (lowerInput.includes('teşekkür') || lowerInput.includes('sağ ol')) {
      botResponse.text = "Rica ederim! Başka bir konuda yardımcı olabileceğim bir şey var mı?";
      botResponse.quickReplies = [
        "Randevu almak istiyorum",
        "Hizmetler hakkında bilgi",
        "Doktorlarınız kimler?",
        "Hayır, teşekkürler"
      ];
    }
    else if (lowerInput.includes('hayır') || lowerInput.includes('yok')) {
      botResponse.text = "Anladım. Dentacan Ağız ve Diş Sağlığı Kliniği olarak sağlıklı günler dileriz!";
    }
    else {
      // Check if input matches any treatment
      const matchedTreatment = Object.keys(dentalDatabase.treatments).find(key => 
        dentalDatabase.treatments[key].title.toLowerCase().includes(lowerInput) ||
        key.toLowerCase().includes(lowerInput)
      );

      if (matchedTreatment) {
        const treatment = dentalDatabase.treatments[matchedTreatment];
        botResponse.text = `${treatment.title} hakkında bilgi:`;
        botResponse.treatment = treatment;
        botResponse.quickReplies = [
          "Randevu almak istiyorum",
          "Başka tedavi seçenekleri",
          "Doktor bilgisi"
        ];
      } else {
        botResponse.text = "Anlayamadım, lütfen başka şekilde ifade edebilir misiniz?";
        botResponse.quickReplies = [
          "Randevu almak istiyorum",
          "Hizmetler hakkında bilgi",
          "Doktorlarınız kimler?",
          "Kliniğiniz nerede?"
        ];
      }
    }

    setMessages(prev => [...prev, botResponse]);
  };

  // Handle key press (Enter key)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <ChatbotContainer>
      <ChatbotButton onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faComment} />
      </ChatbotButton>
      
      <ChatbotWindow isOpen={isOpen}>
        <ChatbotHeader>
          <ChatbotTitle>
            <FontAwesomeIcon icon={faTooth} />
            Dentacan Asistan
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
                
                {message.treatment && (
                  <InfoCard>
                    <InfoItem>
                      <FontAwesomeIcon icon={message.treatment.icon} />
                      <span>{message.treatment.description}</span>
                    </InfoItem>
                    <InfoItem>
                      <FontAwesomeIcon icon={faClock} />
                      <span>Tedavi süresi: {message.treatment.duration}</span>
                    </InfoItem>
                    <InfoItem>
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                      <span>Ortalama fiyat: {message.treatment.price}</span>
                    </InfoItem>
                    {message.treatment.benefits && (
                      <div style={{ marginTop: '10px' }}>
                        <strong>Avantajlar:</strong>
                        <ul style={{ margin: '5px 0 0 15px', padding: 0 }}>
                          {message.treatment.benefits.map((benefit, i) => (
                            <li key={i} style={{ marginBottom: '5px' }}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <ActionButton to={message.treatment.link}>
                      <FontAwesomeIcon icon={faUserMd} />
                      Bu tedavi hakkında detaylı bilgi
                    </ActionButton>
                    <ActionButton secondary to="/randevu-al">
                      <FontAwesomeIcon icon={faCalendarCheck} />
                      Randevu Al
                    </ActionButton>
                  </InfoCard>
                )}
                
                {message.doctors && (
                  <div style={{ marginTop: '10px' }}>
                    {message.doctors.map((doctor, i) => (
                      <InfoCard key={i}>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                          <FontAwesomeIcon icon={faUserMd} /> {doctor.name}
                        </div>
                        <div style={{ marginBottom: '5px' }}>{doctor.specialty}</div>
                        <InfoItem>
                          <FontAwesomeIcon icon={faClock} />
                          <span>{doctor.experience} deneyim</span>
                        </InfoItem>
                        <InfoItem>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>Çalışma günleri: {doctor.schedule}</span>
                        </InfoItem>
                        <ActionButton to={`/doktorlar/${doctor.name.replace(/\s+/g, '-').toLowerCase()}`}>
                          <FontAwesomeIcon icon={faUser} />
                          Profili Görüntüle
                        </ActionButton>
                      </InfoCard>
                    ))}
                  </div>
                )}
                
                {message.infoCard && (
                  <InfoCard>
                    <InfoItem>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{dentalDatabase.clinicInfo.address}</span>
                    </InfoItem>
                    <InfoItem>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      <span>{dentalDatabase.clinicInfo.phone}</span>
                    </InfoItem>
                    <InfoItem>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>{dentalDatabase.clinicInfo.email}</span>
                    </InfoItem>
                    <ActionButton to={dentalDatabase.clinicInfo.mapUrl} target="_blank">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      Haritada Göster
                    </ActionButton>
                  </InfoCard>
                )}
                
                {message.infoHours && (
                  <InfoCard>
                    <InfoItem>
                      <FontAwesomeIcon icon={faClock} />
                      <span>Hafta içi: {dentalDatabase.clinicInfo.hours.weekdays}</span>
                    </InfoItem>
                    <InfoItem>
                      <FontAwesomeIcon icon={faClock} />
                      <span>Akşam: {dentalDatabase.clinicInfo.hours.evening}</span>
                    </InfoItem>
                    <InfoItem>
                      <FontAwesomeIcon icon={faClock} />
                      <span>Pazar: {dentalDatabase.clinicInfo.hours.sunday}</span>
                    </InfoItem>
                  </InfoCard>
                )}
              </MessageContent>
              
              {message.quickReplies && (
                <QuickReplies>
                  {message.quickReplies.map((reply, i) => (
                    <QuickReply key={i} onClick={() => handleQuickReply(reply)}>
                      {reply}
                    </QuickReply>
                  ))}
                </QuickReplies>
              )}
            </Message>
          ))}
          <div ref={messagesEndRef} />
        </ChatbotBody>
        
        <ChatbotFooter>
          <ChatbotInput
            type="text"
            placeholder="Mesajınızı yazın..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
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