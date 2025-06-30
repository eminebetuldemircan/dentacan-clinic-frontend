-- Veritabanını oluştur
CREATE DATABASE IF NOT EXISTS dentacan_db;
USE dentacan_db;

-- Klinik bilgileri tablosu
CREATE TABLE IF NOT EXISTS clinic_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clinic_name VARCHAR(100) NOT NULL,
    slogan TEXT,
    team_description TEXT,
    about_text TEXT,
    footer_description TEXT,
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(100),
    map_embed TEXT,
    clinic_photo VARCHAR(255),
    facebook VARCHAR(255),
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    youtube VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Hizmetler tablosu
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    image_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Doktorlar tablosu
CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    bio TEXT,
    photo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Hasta yorumları tablosu
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    patient_photo VARCHAR(255),
    treatment_type VARCHAR(100),
    rating INT,
    comment TEXT,
    date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Galeri tablosu
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    image_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Örnek veriler ekle
INSERT INTO clinic_info (clinic_name, slogan, team_description, about_text, footer_description, address, phone, email, map_embed, clinic_photo) 
VALUES (
    'DENTACAN',
    'Gülümsemek İçin Bir Neden Daha',
    'Alanlarında uzmanlaşmış deneyimli kadromuzla, sağlıklı gülüşleriniz için buradayız!',
    'DENTACAN Ağız ve Diş Sağlığı Kliniği, 2010 yılında Dt. Ahmet CAN tarafından, modern diş hekimliği hizmetlerini en üst standartlarda sunmak amacıyla kurulmuştur...',
    '"Gülümsemek İçin Bir Neden Daha" mottosuyla hizmet veren kliniğimiz, modern teknolojilerle ağız ve diş sağlığınızı korumayı amaçlar.',
    '1234. Sokak, No:5, Şişli/İstanbul',
    '0 (212) 123 45 67',
    'info@dentacan.com',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279637145955!2d28.97885931572048!3d41.00819492788272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9eb9d587135%3A0x8aa0bb6b1dd6ffb7!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1623761912925!5m2!1str!2str',
    'images/Anasayfa/Klinik.jpg'
);

-- Örnek hizmetler ekle
INSERT INTO services (title, description, image_path) VALUES
('Diş Beyazlatma', 'Profesyonel beyazlatma teknikleriyle 3-4 ton açık renk', 'images/Anasayfa/Beyazlatma.jpg'),
('Estetik Diş Hekimliği', 'Laminate veneer, zirkonyum kaplama ve dijital gülüş tasarımı ile mükemmel sonuçlar', 'images/Anasayfa/EstetikDiş.jpg'),
('İmplant Tedavisi', 'Tek dişten tam ağız implantlara, doğal görünümlü kalıcı çözümler', 'images/Hizmetler/DişİmplantUygulama.jpg');

-- Örnek doktorlar ekle
INSERT INTO doctors (title, name, specialization, bio, photo_path) VALUES
('Uzm. Dr. Dt.', 'Ahmet CAN', 'Çene Cerrahisi Uzmanı', '2002 Hacettepe Üniversitesi mezunu. Cumhuriyet Üniversitesi''nde uzmanlık eğitimi aldı...', 'images/Anasayfa/AhmetCan.jpg'),
('Uzm. Dr. Dt.', 'Ayşe DEMİR', 'Ortodonti Uzmanı', 'Marmara Üniversitesi Ortodonti mezunu. Invisalign Gold Provider sertifikalı...', 'images/Anasayfa/AyşeDemir.jpg');

-- Örnek hasta yorumları ekle
INSERT INTO testimonials (patient_name, treatment_type, rating, comment, date) VALUES
('Elif K.', 'İmplant Tedavisi', 5, 'Yaptırdığım implant tedavisinden çok memnun kaldım...', '2023-09-15'),
('Burak E.', 'Ortodonti Tedavisi', 4, '2 yıldır devam eden ortodonti tedavim Dentacan''da mükemmel sonuçlandı...', '2024-08-03');

-- Örnek galeri görselleri ekle
INSERT INTO gallery (title, description, image_path) VALUES
('Modern Muayene Odası', 'Son teknoloji ekipmanlarla donatılmış', 'images/Anasayfa/MuayeneOdası.png'),
('Bekleme Alanı', 'Rahat ve huzurlu bir ortam', 'images/Anasayfa/BeklemeAlani.png'); 