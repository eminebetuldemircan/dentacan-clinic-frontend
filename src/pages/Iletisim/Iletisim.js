import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { SEND_MESSAGE_RESET } from "../../redux/constants/ContactUsConstants";
import { AddNewContactUsMessage } from "../../redux/actions/ContactUsAction";
import SuccessResult from "../../components/result/SuccessResult";

const IletisimContainer = styled.div`
  padding: 80px 0;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 50px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 15px;
  font-weight: 700;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #3498db, #9b59b6);
    border-radius: 2px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  i {
    font-size: 1.8rem;
    color: #3498db;
    margin-right: 20px;
    margin-top: 5px;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
    color: #2c3e50;
    font-weight: 600;
  }

  p {
    color: #7f8c8d;
    line-height: 1.7;
    margin: 0;
    font-size: 1.05rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #3498db, #9b59b6);
    transition: width 0.4s ease;
  }

  &:focus-within::before {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    color: #7f8c8d;
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1.05rem;
  transition: all 0.3s;
  background: #f8f9fa;
  color: #2c3e50;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    background: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1.05rem;
  min-height: 200px;
  resize: vertical;
  transition: all 0.3s;
  background: #f8f9fa;
  color: #2c3e50;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    background: white;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(to right, #3498db, #9b59b6);
  color: white;
  padding: 18px 40px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(52, 152, 219, 0.2);
  width: 100%;
  margin-top: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(52, 152, 219, 0.3);
    background: linear-gradient(to right, #2980b9, #8e44ad);
  }

  svg {
    margin-left: 10px;
    font-size: 1.2rem;
  }
`;

const MapContainer = styled.div`
  height: 450px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const SuccessMessage = styled.div`
  background: linear-gradient(to right, #2ecc71, #27ae60);
  color: white;
  padding: 18px;
  border-radius: 10px;
  margin-top: 25px;
  text-align: center;
  font-weight: 500;
  display: ${(props) => (props.show ? "block" : "none")};
  box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
`;

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Iletisim = () => {
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const addNewContactUsMessage = useSelector(
    (state) => state.contactUs.addNewContactUsMessage
  );
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    noteMessage: "",
  };

  const [formState, setFormState] = useState(initialState);

  const setFormStateField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (addNewContactUsMessage.isAdded) {
      setShowSuccessNotification(true);
      dispatch({ type: SEND_MESSAGE_RESET });
    }
  }, [dispatch, addNewContactUsMessage.isAdded]);

  const handleSendContactUsMessage = () => {
    dispatch(AddNewContactUsMessage(formState));
    console.log(formState);
  };

  return (
    <MainLayout>
      <IletisimContainer>
        {showSuccessNotification ? (
          <SuccessResult />
        ) : (
          <ContactSection>
            <PageTitle>Bize Ulaşın</PageTitle>

            <ContactGrid>
              <ContactInfo>
                <InfoItem>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <InfoContent>
                    <h3>Adresimiz</h3>
                    <p>1234. Sokak, No:5, Şişli/İstanbul</p>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <InfoContent>
                    <h3>E-posta</h3>
                    <p>info@dentacan.com</p>
                    <p>randevu@dentacan.com</p>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <FontAwesomeIcon icon={faClock} />
                  <InfoContent>
                    <h3>Çalışma Saatleri</h3>
                    <p>Pazartesi - Cumartesi: 08:30 - 17:30</p>
                    <p>Akşam Nöbetçi Hekim: 17.30 - 23.00</p>
                    <p>Pazar Nöbetçi Hekim: 08.30 - 23.00</p>
                  </InfoContent>
                </InfoItem>
              </ContactInfo>

              <ContactForm
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendContactUsMessage();
                }}
              >
                <FormGroup>
                  <Label htmlFor="firstname">
                    <FontAwesomeIcon icon={faUser} /> Adınız
                  </Label>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formState.firstname}
                    onChange={(e) =>
                      setFormStateField("firstname", e.target.value)
                    }
                    required
                    placeholder="Örn: Ahmet"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="lastname">Soyadınız</Label>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formState.lastname}
                    onChange={(e) =>
                      setFormStateField("lastname", e.target.value)
                    }
                    required
                    placeholder="Örn: Yılmaz"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    E-posta Adresiniz
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormStateField("email", e.target.value)}
                    required
                    placeholder="Örn: ornek@email.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">
                    <FontAwesomeIcon icon={faComment} />
                    Mesajınız
                  </Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formState.noteMessage}
                    onChange={(e) =>
                      setFormStateField("noteMessage", e.target.value)
                    }
                    required
                    placeholder="Mesajınızı detaylı bir şekilde yazınız..."
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  Mesajı Gönder <FontAwesomeIcon icon={faPaperPlane} />
                </SubmitButton>
              </ContactForm>
            </ContactGrid>

            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4439286657!2d28.9857!3d41.0370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzEzLjIiTiAyOMKwNTknMDguNSJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="DENTACAN Konum"
              />
            </MapContainer>
          </ContactSection>
        )}
      </IletisimContainer>
    </MainLayout>
  );
};

export default Iletisim;
