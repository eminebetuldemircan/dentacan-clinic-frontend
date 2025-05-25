import React, { useState, useEffect, useRef, Fragment } from 'react';
import { FaSignInAlt, FaExclamationCircle, FaCheckCircle, FaSpinner, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { CancelAppointment, ChangeAppointment } from '../../redux/actions/AppointmentAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChangeCodePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  // Form state

  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [formMessage, setFormMessage] = useState({ type: '', text: '', visible: false });
  const [isLoading, setIsLoading] = useState(false);
  

  debugger
  // Language state
  const [language, setLanguage] = useState('tr');
  
  // Refs for code inputs
  const codeInputs = useRef([]);

debugger;
  // State for verification modal and code

   const [searchParams] = useSearchParams();
  
  const token = searchParams.get('token');

  useEffect(() => {
    // Burada API'ye doğrulama isteği gönderilebilir

    console.log("Token:", token);

    // örnek API isteği:
    // fetch(`/api/verify?code=${code}&appointmentId=${appointmentId}`)
    //   .then(...)
  }, [ token]);




  // Verify code



    dispatch(ChangeAppointment(token))
      .then(() => {
        toast.success(language === 'tr' ? "Değişiklik işlemi başarılı! Yönlendiriliyorsunuz..." : "Update successful! Redirecting...");
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch(() => {
        toast.error(language === 'tr' ? "Değişiklik işlemi başarısız." : "Update failed.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };





export default ChangeCodePage;