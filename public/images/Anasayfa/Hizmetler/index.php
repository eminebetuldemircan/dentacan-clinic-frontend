<?php
// Veritabanı bağlantısı
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dentacan_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Bağlantı hatası: " . $e->getMessage();
}

// Hizmetleri veritabanından çek
function getServices() {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM services ORDER BY id ASC");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Doktorları veritabanından çek
function getDoctors() {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM doctors ORDER BY id ASC");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Hasta yorumlarını veritabanından çek
function getTestimonials() {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM testimonials ORDER BY date DESC LIMIT 3");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Galeri görsellerini veritabanından çek
function getGallery() {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM gallery ORDER BY id ASC");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Klinik bilgilerini veritabanından çek
function getClinicInfo() {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM clinic_info LIMIT 1");
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

// Verileri çek
$services = getServices();
$doctors = getDoctors();
$testimonials = getTestimonials();
$gallery = getGallery();
$clinicInfo = getClinicInfo();
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $clinicInfo['clinic_name']; ?> - Ağız ve Diş Sağlığı Kliniği</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- NAVBAR -->
    <nav class="navbar">
        <div class="container navbar-container">
            <div class="logo-container">
                <i class="fas fa-tooth tooth-icon"></i>
                <a href="#" class="navbar-logo"><?php echo $clinicInfo['clinic_name']; ?></a>
            </div>
            
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
            
            <ul class="navbar-links">
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#hizmetler">Hizmetlerimiz</a></li>
                <li><a href="#ekip">Ekibimiz</a></li>
                <li><a href="#galeri">Galeri</a></li>
                <li><a href="#hasta-yorumlari">Hasta Görüşleri</a></li>
                <li><a href="#hakkinda">Hakkında</a></li>
                <li><a href="#iletisim">İletişim</a></li>
                <li><a href="admin-login.php" class="btn btn-login">Giriş Yap</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- HEADER -->
    <header>
        <div class="container">
            <div class="header-logo">
                <i class="fas fa-tooth header-tooth-icon"></i>
                <h1 class="logo-text"><?php echo $clinicInfo['clinic_name']; ?></h1>
            </div>
            <p class="slogan"><?php echo $clinicInfo['slogan']; ?></p>
            <a href="randevu-al.php" class="btn btn-primary">Randevu Al</a>
        </div>
    </header>

    <!-- HİZMETLER -->
    <section class="services" id="hizmetler">
        <div class="container">
            <h2 class="section-title text-center">Sunduğumuz Hizmetler</h2>
            
            <div class="services-container">
                <?php foreach($services as $service): ?>
                <div class="service-card">
                    <div class="service-image">
                        <img src="<?php echo $service['image_path']; ?>" alt="<?php echo $service['title']; ?>">
                    </div>
                    <h3 class="service-title"><?php echo $service['title']; ?></h3>
                    <p class="service-desc"><?php echo $service['description']; ?></p>
                    <a href="hizmet-detay.php?id=<?php echo $service['id']; ?>" class="btn btn-primary">Detaylı Bilgi</a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- EKİP -->
    <section class="team" id="ekip">
        <div class="container">
            <h2 class="section-title text-center">Uzman Ekibimiz</h2>
            <p class="text-center" style="max-width: 700px; margin: 0 auto 50px;"><?php echo $clinicInfo['team_description']; ?></p>
            
            <div class="team-container">
                <?php foreach($doctors as $doctor): ?>
                <div class="team-member">
                    <div class="member-img-container">
                        <img src="<?php echo $doctor['photo_path']; ?>" alt="<?php echo $doctor['name']; ?>" class="member-photo">
                    </div>
                    <div class="member-info">
                        <h3 class="member-name"><?php echo $doctor['title'] . ' ' . $doctor['name']; ?></h3>
                        <p class="member-title"><?php echo $doctor['specialization']; ?></p>
                        <div class="member-bio">
                            <p><?php echo $doctor['bio']; ?></p>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- GALERİ -->
    <section class="gallery" id="galeri">
        <div class="container">
            <h2 class="section-title text-center">Kliniğimizden Görüntüler</h2>
            
            <div class="gallery-container">
                <?php foreach($gallery as $item): ?>
                <div class="gallery-item">
                    <img src="<?php echo $item['image_path']; ?>" alt="<?php echo $item['title']; ?>">
                    <div class="gallery-caption">
                        <h3><?php echo $item['title']; ?></h3>
                        <p><?php echo $item['description']; ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- HASTA GÖRÜŞLERİ -->
    <section class="testimonials" id="hasta-yorumlari">
        <div class="container">
            <h2 class="section-title text-center">Hasta Görüşleri</h2>
            <p class="section-subtitle text-center">Hastalarımızın Deneyimleri ve Memnuniyetleri</p>
            
            <div class="testimonials-container">
                <?php foreach($testimonials as $testimonial): ?>
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="patient-avatar">
                            <img src="<?php echo $testimonial['patient_photo']; ?>" alt="<?php echo $testimonial['patient_name']; ?>">
                        </div>
                        <div class="patient-info">
                            <h3><?php echo $testimonial['patient_name']; ?></h3>
                            <p><?php echo $testimonial['treatment_type']; ?></p>
                        </div>
                    </div>
                    <div class="testimonial-body">
                        <div class="rating">
                            <?php for($i = 0; $i < $testimonial['rating']; $i++): ?>
                            <span class="star filled">★</span>
                            <?php endfor; ?>
                        </div>
                        <p><?php echo $testimonial['comment']; ?></p>
                    </div>
                    <div class="testimonial-date">
                        <?php echo date('d F Y', strtotime($testimonial['date'])); ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            
            <div class="testimonials-cta text-center">
                <a href="yorumlar.php" class="btn btn-primary">Tüm Yorumları Gör</a>
            </div>
        </div>
    </section>

    <!-- HAKKINDA -->
    <section class="about" id="hakkinda">
        <div class="container">
            <h2 class="section-title text-center">Hakkımızda</h2>
            
            <div class="about-container">
                <div class="about-text">
                    <h2><?php echo $clinicInfo['clinic_name']; ?> Hikayesi</h2>
                    <?php echo $clinicInfo['about_text']; ?>
                </div>
                <div class="about-img">
                    <img src="<?php echo $clinicInfo['clinic_photo']; ?>" alt="<?php echo $clinicInfo['clinic_name']; ?> Kliniği">
                </div>
            </div>
        </div>
    </section>

    <!-- HARİTA -->
    <section class="container" id="iletisim">
        <h2 class="section-title text-center">Bize Ulaşın</h2>
        <div class="map-container">
            <iframe src="<?php echo $clinicInfo['map_embed']; ?>" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-about">
                    <div class="footer-logo-container">
                        <i class="fas fa-tooth footer-tooth-icon"></i>
                        <h3 class="footer-logo"><?php echo $clinicInfo['clinic_name']; ?></h3>
                    </div>
                    <p><?php echo $clinicInfo['footer_description']; ?></p>
                    <div class="social-links">
                        <?php if($clinicInfo['facebook']): ?>
                        <a href="<?php echo $clinicInfo['facebook']; ?>"><i class="fab fa-facebook-f"></i></a>
                        <?php endif; ?>
                        <?php if($clinicInfo['instagram']): ?>
                        <a href="<?php echo $clinicInfo['instagram']; ?>"><i class="fab fa-instagram"></i></a>
                        <?php endif; ?>
                        <?php if($clinicInfo['twitter']): ?>
                        <a href="<?php echo $clinicInfo['twitter']; ?>"><i class="fab fa-twitter"></i></a>
                        <?php endif; ?>
                        <?php if($clinicInfo['youtube']): ?>
                        <a href="<?php echo $clinicInfo['youtube']; ?>"><i class="fab fa-youtube"></i></a>
                        <?php endif; ?>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h3>Hızlı Linkler</h3>
                    <ul>
                        <li><a href="index.php">Anasayfa</a></li>
                        <li><a href="#hizmetler">Hizmetlerimiz</a></li>
                        <li><a href="#ekip">Ekibimiz</a></li>
                        <li><a href="#galeri">Galeri</a></li>
                        <li><a href="#hasta-yorumlari">Hasta Görüşleri</a></li>
                        <li><a href="#hakkinda">Hakkında</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h3>Hizmetlerimiz</h3>
                    <ul>
                        <?php foreach($services as $service): ?>
                        <li><a href="hizmet-detay.php?id=<?php echo $service['id']; ?>"><?php echo $service['title']; ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3>İletişim</h3>
                    <div class="contact-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span><?php echo $clinicInfo['address']; ?></span>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-phone-alt"></i>
                        <span><?php echo $clinicInfo['phone']; ?></span>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-envelope"></i>
                        <span><?php echo $clinicInfo['email']; ?></span>
                    </div>
                </div>
            </div>
            
            <div class="footer-legal">
                <a href="kvkk.php">Kişisel Verilerin Korunması</a>
                <a href="gizlilik.php">Gizlilik Politikası</a>
                <a href="cerez.php">Çerez Politikası</a>
                <a href="etik.php">Etik Politikamız</a>
            </div>
            
            <div class="copyright">
                <p>&copy; <?php echo date('Y'); ?> <?php echo $clinicInfo['clinic_name']; ?>. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/main.js"></script>
</body>
</html> 