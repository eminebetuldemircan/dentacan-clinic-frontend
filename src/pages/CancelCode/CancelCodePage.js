import React, { useState, useEffect, useRef, Fragment } from 'react';
import { FaSignInAlt, FaExclamationCircle, FaCheckCircle, FaSpinner, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { CancelAppointment } from '../../redux/actions/AppointmentAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CancelCodePage = () => {
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


  // State for verification modal and code

   const [searchParams] = useSearchParams();
  
  const appointmentId = searchParams.get('appointmentId');

  useEffect(() => {
    // Burada API'ye doğrulama isteği gönderilebilir

    console.log("Appointment ID:", appointmentId);
    
    // örnek API isteği:
    // fetch(`/api/verify?code=${code}&appointmentId=${appointmentId}`)
    //   .then(...)
  }, [ appointmentId]);




  // Verify code



    dispatch(CancelAppointment(appointmentId))
      .then(() => {
        toast.success(language === 'tr' ? "İptal işlemi başarılı! Yönlendiriliyorsunuz..." : "Cancellation successful! Redirecting...");
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch(() => {
        toast.error(language === 'tr' ? "İptal işlemi başarısız." : "Cancellation failed.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };





export default CancelCodePage;