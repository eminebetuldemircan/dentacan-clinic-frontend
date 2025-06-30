import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faCalendarAlt,
  faClock,
  faUser,
  faPhone,
  faEnvelope,
  faTooth,
  faMapMarkerAlt,
  faCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MainLayout from "../../layouts/MainLayout";
import { GetAllDoctor } from "../../redux/actions/DoctorAction";
import { useDispatch, useSelector } from "react-redux";
import { AddNewAppointment, GetAllAppointmentByDate } from "../../redux/actions/AppointmentAction";
import { message } from "antd";
import SuccessResult from "../../components/result/SuccessResult";
import { ADD_APPOINTMENT_RESET } from "../../redux/constants/AppointmentConstants";
import AppointmentSuccessResult from "../../components/result/AppointmentSuccessResult";

import ReCAPTCHA from "react-google-recaptcha";

// Renk paleti
const colors = {
  primary: "#00B4D8",
  secondary: "#0077B6",
  dark: "#2B2D42",
  light: "#F8F9FA",
  gray: "#6C757D",
  lightBlue: "#CAF0F8",
};

// Header Stilleri
const Header = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.primary};

  span {
    color: ${colors.secondary};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${colors.dark};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;

  &:hover {
    color: ${colors.primary};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.dark};
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Footer Stilleri
const Footer = styled.footer`
  background-color: ${colors.dark};
  color: white;
  padding: 60px 0 30px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: white;
    position: relative;
    padding-bottom: 10px;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: ${colors.primary};
    }
  }

  p {
    color: #ddd;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s;
    display: block;
    margin-bottom: 10px;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    &:hover {
      background-color: ${colors.primary};
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
`;

// Randevu Sayfası Stilleri
const AppointmentHero = styled.section`
  background: linear-gradient(
      135deg,
      rgba(0, 180, 216, 0.95) 0%,
      rgba(0, 119, 182, 0.95) 100%
    ),
    url("https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
      no-repeat center center/cover;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin-top: 70px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    line-height: 1.6;
  }
`;

const AppointmentSection = styled.section`
  padding: 80px 0;
  background-color: ${colors.light};
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      90deg,
      ${colors.primary} 0%,
      ${colors.secondary} 100%
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AppointmentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: -50px;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

const AppointmentForm = styled.form`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-top: 5px solid ${colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.dark};
  margin-bottom: 30px;
  position: relative;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${colors.primary} 0%,
      ${colors.secondary} 100%
    );
    border-radius: 3px;
  }

  svg {
    margin-right: 15px;
    color: ${colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${colors.dark};
  font-size: 0.95rem;

  svg {
    margin-right: 8px;
    color: ${colors.primary};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: ${colors.light};
  color: ${colors.dark};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
    outline: none;
    background-color: white;
  }

  &::placeholder {
    color: ${colors.gray};
    opacity: 0.7;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 1em;
  background-color: ${colors.light};
  color: ${colors.dark};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
    outline: none;
    background-color: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  min-height: 120px;
  resize: vertical;
  background-color: ${colors.light};
  color: ${colors.dark};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
    outline: none;
    background-color: white;
  }

  &::placeholder {
    color: ${colors.gray};
    opacity: 0.7;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(0, 180, 216, 0.3);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 180, 216, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }
`;

const ContactInfo = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-top: 5px solid ${colors.secondary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: ${colors.lightBlue};
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: ${colors.primary};
  margin-right: 20px;
  margin-top: 3px;
  min-width: 30px;
  text-align: center;
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: ${colors.dark};
    font-weight: 600;
  }

  p {
    color: ${colors.gray};
    line-height: 1.6;
    margin: 0;
  }
`;

const MapContainer = styled.div`
  height: 300px;
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const DoctorSelection = styled.div`
  margin-bottom: 30px;
`;

const DoctorCard = styled.div`
  border: 2px solid ${(props) => (props.selected ? colors.primary : "#e0e0e0")};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.selected ? "rgba(0, 180, 216, 0.1)" : "white"};

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
`;

const DoctorInfo = styled.div`
  flex: 1;
`;

const DoctorName = styled.h4`
  margin: 0;
  color: ${colors.dark};
  font-weight: 600;
`;

const DoctorSpecialty = styled.p`
  margin: 5px 0 0;
  color: ${colors.gray};
  font-size: 0.9rem;
`;

const CheckIcon = styled.div`
  color: ${colors.primary};
  margin-left: 10px;
  opacity: ${(props) => (props.selected ? 1 : 0)};
  transition: opacity 0.3s;
`;

const DateTimeSelection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TimeSlot = styled.div`
  border: 2px solid ${(props) => (props.selected ? colors.primary : "#e0e0e0")};
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: ${(props) =>
    props.selected ? "rgba(0, 180, 216, 0.1)" : "white"};
  font-weight: ${(props) => (props.selected ? "600" : "normal")};
  color: ${(props) => (props.selected ? colors.primary : colors.dark)};

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
    
  &.occupied {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const TimeSlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const KVKKConsent = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: ${colors.light};
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const ConsentText = styled.p`
  font-size: 0.9rem;
  color: ${colors.gray};
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ConsentCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    min-width: 18px;
    min-height: 18px;
    accent-color: ${colors.primary};
  }

  label {
    margin-bottom: 0;
    font-size: 0.9rem;
    color: ${colors.dark};
  }
`;

const RandevuAl = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const dispatch = useDispatch();
  const getAllDoctor = useSelector((state) => state.doctor.getAllDoctor);
  const addNewAppointment = useSelector(
    (state) => state.appointment.addNewAppointment
  );
  useEffect(() => {
    dispatch(GetAllDoctor());
  }, [dispatch]);

  const [formState, setFormState] = useState({
    date: "", // string (yyyy-MM-dd formatında)
    time: "", // string ("09:00")
    firstname: "", // Ad
    lastname: "", // Soyad
    tcId: "", // TC kimlik no
    doctorId: "", // Seçilen doktorun ID'si
    phoneNumber: "",
    email: "",
    noteMessage: "", // mesaj/not
    serviceType: "", // Enum string olarak (örneğin "ToothWhitening")
    recaptchaToken: "", // ReCAPTCHA token
  });

  // ReCAPTCHA onChange handler
const handleRecaptchaChange = (token) => {
  setFormStateField("recaptchaToken", token);
};

  const setFormStateField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const services = [
    { id: 1, name: "Diş Beyazlatma" },
    { id: 2, name: "Estetik Diş Hekimliği" },
    { id: 3, name: "İmplant Tedavisi" },
    { id: 4, name: "Ortodonti (Diş Teli Tedavisi)" },
    { id: 5, name: "Ağız, Diş ve Çene Cerrahisi" },
    { id: 6, name: "Periodontoloji (Diş Eti Hastalıkları)" },
    { id: 7, name: "Pedodonti (Çocuk Diş Hekimliği)" },
    { id: 8, name: "Endodonti (Kanal Tedavi)" },
    { id: 9, name: "Konservatif Diş Tedavisi" },
    { id: 10, name: "Oral Diagnoz ve Radyoloji" },
    { id: 11, name: "Genel Anestezi ve Sedasyon" },
    { id: 12, name: "Acil Tedavi" },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  useEffect(() => {
    if (addNewAppointment.isAdded) {
      toast.success("Randevunuz başarıyla oluşturuldu!");
      setShowSuccessNotification(true);
      dispatch({ type: ADD_APPOINTMENT_RESET });
    }
  }, [dispatch, addNewAppointment.isAdded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // reCAPTCHA kontrolü
  if (!formState.recaptchaToken) {
    toast.error("Lütfen 'Ben robot değilim' doğrulamasını yapın!");
    return; // Form gönderimini durdur
  }
    const appointmentData = {
      date: formState.date, // Seçilen tarih
      time: formState.time, // Seçilen saat
      firstname: formState.firstname, // Kullanıcının adı
      lastname: formState.lastname, // Kullanıcının soyadı
      tcId: formState.tcId, // TC kimlik numarası
      doctorId: formState.doctorId, // Seçilen doktor ID'si
      phoneNumber: formState.phoneNumber, // Kullanıcının telefon numarası
      email: formState.email, // Kullanıcının email adresi
      noteMessage: formState.noteMessage, // Mesaj/not
      serviceType: convertToEnumValue(formState.serviceType), // Hizmet türü (enum)
    };

    dispatch(AddNewAppointment(appointmentData));
  };
  const getAllAppointmentByDate = useSelector(
    (state) => state.appointment.getAllAppointmentByDate
  );
  const occupiedTimes = getAllAppointmentByDate?.appointmentTimes.map((appt) => appt.time) || [];
  useEffect(() => {
    if (formState.date && formState.doctorId) {
      dispatch(GetAllAppointmentByDate(formState.date,formState.doctorId));
    }
  }, [formState.date, formState.doctorId, dispatch]);

  const convertToEnumValue = (serviceName) => {
    switch (serviceName) {
      case "Diş Beyazlatma":
        return 1;
      case "Estetik Diş Hekimliği":
        return 2;
      case "İmplant Tedavisi":
        return 3;
      case "Ortodonti (Diş Teli Tedavisi)":
        return 4;
      case "Ağız, Diş ve Çene Cerrahisi":
        return 5;
      case "Periodontoloji (Diş Eti Hastalıkları)":
        return 6;
      case "Pedodonti (Çocuk Diş Hekimliği)":
        return 7;
      case "Endodonti (Kanal Tedavi)":
        return 8;
      case "Konservatif Diş Tedavisi":
        return 9;
      case "Oral Diagnoz ve Radyoloji":
        return 10;
      case "Genel Anestezi ve Sedasyon":
        return 11;
      case "Acil Tedavi":
        return 12;
      default:
        return -1; // Tanımlanmamış bir hizmet adı için -1 döndürülür.
    }
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor); // görsel olarak seçili kalması için
    setFormStateField("doctorId", doctor.id); // backend'e gönderilecek veri
  };

  return (
    <MainLayout>
      <AppointmentHero>
        <Container>
          <h1>Profesyonel Diş Hekimliği Hizmetleri</h1>
          <p>
            Sağlıklı gülüşler için uzman kadromuzla hizmetinizdeyiz. Randevu
            oluşturmak için lütfen formu doldurun.
          </p>
        </Container>
      </AppointmentHero>
      {showSuccessNotification ? (
        <AppointmentSuccessResult />
      ) : (
        <AppointmentSection>
          <Container>
            <AppointmentContainer>
              <AppointmentForm onSubmit={handleSubmit}>
                <FormTitle>
                
                  Randevu Formu
                </FormTitle>

                <DoctorSelection>
                  <Label>Doktor Seçimi</Label>
                  {getAllDoctor.doctors.map((doctor) => (
                    <DoctorCard
                      key={doctor.id}
                      selected={selectedDoctor?.id === doctor.id}
                      onClick={() => handleDoctorSelect(doctor)}
                    >
                      <DoctorInfo>
                        <DoctorName>
                          {doctor.firstname} {doctor.lastname}
                        </DoctorName>
                        <DoctorSpecialty>
                          {doctor.specialization} {doctor.title}
                        </DoctorSpecialty>
                      </DoctorInfo>
                      <CheckIcon selected={selectedDoctor?.id === doctor.id}>
                        <FontAwesomeIcon icon={faCheck} />
                      </CheckIcon>
                    </DoctorCard>
                  ))}
                </DoctorSelection>

                <FormGroup>
                  <Label>
                    <FontAwesomeIcon icon={faUser} />
                    Adınız
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={formState.firstname}
                    onChange={(e) =>
                      setFormStateField("firstname", e.target.value)
                    }
                    required
                    placeholder="Adınızı giriniz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <FontAwesomeIcon icon={faUser} />
                    Soyadınız
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={formState.lastname}
                    onChange={(e) =>
                      setFormStateField("lastname", e.target.value)
                    }
                    required
                    placeholder="Soyadınızı giriniz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>TC Kimlik Numaranız</Label>
                  <Input
                    type="text"
                    name="tcId"
                    value={formState.tcId}
                    onChange={(e) => setFormStateField("tcId", e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <FontAwesomeIcon icon={faPhone} />
                    Telefon Numaranız
                  </Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formState.phoneNumber}
                    onChange={(e) =>
                      setFormStateField("phoneNumber", e.target.value)
                    }
                    required
                    placeholder="05XX XXX XX XX"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>
                    <FontAwesomeIcon icon={faEnvelope} />
                    E-posta Adresiniz
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormStateField("email", e.target.value)}
                    required
                    placeholder="ornek@email.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Hizmet Seçimi</Label>
                  <Select
                    name="serviceType"
                    value={formState.serviceType}
                    onChange={(e) =>
                      setFormStateField("serviceType", e.target.value)
                    }
                    required
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={convertToEnumValue(service.name)}
                      >
                        {service.name}
                      </option>
                    ))}
                  </Select>
                </FormGroup>

                <DateTimeSelection>
                  <FormGroup>
                    <Label>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      Randevu Tarihi
                    </Label>
                    <Input
                      type="date"
                      name="date"
                      value={formState.date}
                      onChange={(e) =>
                        setFormStateField("date", e.target.value)
                      }
                      required
                      min={new Date().toISOString().split("T")[0]} // Bugünden önceki tarihleri engelle
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <FontAwesomeIcon icon={faClock} />
                      Randevu Saati
                    </Label>
                    <TimeSlotsContainer>
                     {timeSlots.map((time) => {
    const isOccupied = occupiedTimes.includes(time);
    return (
      <TimeSlot
        key={time}
        selected={formState.time === time}
        onClick={() => !isOccupied && setFormStateField("time", time)}
        disabled={isOccupied}
        className={isOccupied ? "occupied" : ""}
      >
        {time}
      </TimeSlot>
    );
  })}
                    </TimeSlotsContainer>
                  </FormGroup>
                </DateTimeSelection>

                <FormGroup>
                  <Label>Notlar</Label>
                  <TextArea
                    name="notes"
                    value={formState.noteMessage}
                    onChange={(e) =>
                      setFormStateField("noteMessage", e.target.value)
                    }
                    placeholder="Eklemek istediğiniz notlar..."
                  />
                </FormGroup>

                <KVKKConsent>
                  <ConsentText>
                    Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması
                    Kanunu kapsamında işlenmektedir. Randevu talebiniz için
                    gerekli olan kişisel verileriniz, talebinizin
                    değerlendirilmesi ve randevu sürecinin yönetimi amacıyla
                    işlenecektir.
                  </ConsentText>
                  <ConsentCheckbox>
                    <input
                      type="checkbox"
                      name="kvkkConsent"
                      // checked={formData.kvkkConsent}
                      // onChange={handleChange}
                    />
                    <Label>KVKK aydınlatma metnini okudum ve onaylıyorum</Label>
                  </ConsentCheckbox>
                </KVKKConsent>

                  <FormGroup>
                  <Label>Güvenlik Doğrulama</Label>
                  <ReCAPTCHA
                    sitekey="6LeexkgrAAAAABcc_wvTMJ85AXQD2Dp0-UVbPVRo" // Google'dan aldığınız key
                    onChange={(token) => setFormStateField("recaptchaToken", token)}
                    onExpired={() => setFormStateField("recaptchaToken", "")}
                  />
                </FormGroup>


                <SubmitButton type="submit">
                  Randevu Talebi Oluştur
                </SubmitButton>
              </AppointmentForm>

              <ContactInfo>
                <FormTitle>İletişim Bilgileri</FormTitle>

                <InfoItem>
                  <InfoIcon>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </InfoIcon>
                  <InfoContent>
                    <h3>Adres</h3>
                    <p>1234. Sokak, No:5</p>
                    <p>Şişli/İstanbul</p>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FontAwesomeIcon icon={faPhone} />
                  </InfoIcon>
                  <InfoContent>
                    <h3>Telefon</h3>
                    <p>+90 (216) 123 45 67</p>
                    <p>+90 (555) 123 45 67 (Acil)</p>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InfoIcon>
                  <InfoContent>
                    <h3>E-posta</h3>
                    <p>info@dentacan.com</p>
                    <p>randevu@dentacan.com</p>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FontAwesomeIcon icon={faClock} />
                  </InfoIcon>
                  <InfoContent>
                    <h3>Çalışma Saatleri</h3>
                    <p>Pazartesi - Cumartesi: 08:30 - 17:30</p>
                    <p>Akşam Nöbetçi Hekim: 17.30 - 23.00</p>
                    <p>Pazar Nöbetçi Hekim: 08.30 - 23.00</p>
                  </InfoContent>
                </InfoItem>

                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279637145955!2d28.97885931572048!3d41.00819492788272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9eb9d587135%3A0x8aa0bb6b1dd6ffb7!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1623761912925!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Dentacan Klinik Konumu"
                  ></iframe>
                </MapContainer>
              </ContactInfo>
            </AppointmentContainer>
          </Container>
        </AppointmentSection>
      )}
    </MainLayout>
  );
};

export default RandevuAl;
