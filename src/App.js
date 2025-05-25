import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';
import HomePage from './pages/HomePage/HomePage';
import Iletisim from './pages/Iletisim/Iletisim';
import Gizlilik from './pages/Gizlilik/Gizlilik';
import Etik from './pages/Etik/Etik';
import KVKK from './pages/KVKK/KVKK';
import Cerez from './pages/Cerez/Cerez';
import RandevuAl from './pages/RandevuAl/RandevuAl';
import DisBeyazlatma from './pages/DisBeyazlatma/DisBeyazlatma';
import EstetikDis from './pages/EstetikDis/EstetikDis';
import { createGlobalStyle } from 'styled-components';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import ContactUsMessagesPage from './pages/ContactUsMessages/ContactUsMessagesPage';
import DoctorPage from './pages/Doctor/DoctorPage';
import { ToastContainer } from 'react-toastify';
import AppointmentPage from './pages/Appointments/AppointmentPage';
import ImplantTedavisi from './pages/ImplantTedavisi/ImplantTedavisi';

import OrtodontiTedavisi from './pages/Ortodonti/OrtodontiTedavisi';
import VerifyCodePage from './pages/VerifyCode/VerifyCodePage';
import CancelCodePage from './pages/CancelCode/CancelCodePage';
import ChangeCodePage from './pages/ChangeCode/ChangeCodePage';
import AgizDisCeneCerrahisi from './pages/AgizDisCeneCerrahi/AgizDisCeneCerrahi';
import Periodontoloji from './pages/Periodontoloji/Periodontoloji';
import Pedodonti from './pages/Pedodonti/Pedodonti';
import Endodonti from './pages/Endodonti/Endodonti';
import KonservatifDisTedavisi from './pages/KonservatifDisTedavisi/KonservatifDisTedavisi';
import OralDiagnozRadyoloji from './pages/OralDiagnozveRadyoloji/OralDiagnozveRadyoloji';
import GenelAnesteziSedasyon from './pages/GenelAnesteziSedayon/GenelAnesteziSedayon';
import AcilTedavi from './pages/AcilTedavi/AcilTedavi';
import DentacanChatBot from './components/ChatBot/DentacanChatBot'; 
import DentacanAdminPanel from './pages/DentacanAdminPanel/DentacanAdminPanel';
import Login from './pages/Login/LoginPageCode';









const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #00b4d8;
    --secondary: #ff9e00;
    --accent: #dd98a8;
    --light: #f8f9fa;
    --dark: #212529;
    --success: #06d6a0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: white;
    color: var(--dark);
    line-height: 1.6;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
       <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatBot" element={<DentacanChatBot />} />
         <Route path="/randevular" element={<AppointmentPage />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/iletisim-mesajları" element={<ContactUsMessagesPage />} />
          <Route path="/doktorlar" element={<DoctorPage />} />
        <Route path="/gizlilik" element={<Gizlilik />} />
        <Route path="/etik" element={<Etik />} />
        <Route path="/kvkk" element={<KVKK />} />
        <Route path="/cerez" element={<Cerez />} />
        <Route path="/randevu-al" element={<RandevuAl />} />
        <Route path="/dis-beyazlatma" element={<DisBeyazlatma />} />
        <Route path="/estetik-dis" element={<EstetikDis />} />
        <Route path="/implant-tedavisi" element={<ImplantTedavisi />} />
        <Route path="/verify" element={<VerifyCodePage />} />
        <Route path="/cancel" element={<CancelCodePage />} />
        <Route path="/changeappointment" element={<ChangeCodePage />} />
        <Route path="/ortodonti-tedavisi" element={<OrtodontiTedavisi />} />
        <Route path="/agiz-dis-cene-cerrahi" element={<AgizDisCeneCerrahisi />} />
        <Route path="/periodontoloji" element={<Periodontoloji />} />
        <Route path="/pedodonti" element={<Pedodonti />} />
        <Route path="/endodonti" element={<Endodonti />} />
        <Route path="/konservatif-dis" element={<KonservatifDisTedavisi />} />
        <Route path="/radyoloji" element={<OralDiagnozRadyoloji />} />
        <Route path="/genel-anestezi" element={<GenelAnesteziSedasyon />} />
        <Route path="/acil-tedavi" element={<AcilTedavi />} />
        <Route path="/admin" element={<DentacanAdminPanel />} />
        <Route path="/login" element={<Login />} />
      

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </Router>
  );
}

export default App;
