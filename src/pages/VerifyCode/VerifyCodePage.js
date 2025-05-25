import React, { useState, useEffect, useRef, Fragment } from 'react';
import { FaSignInAlt, FaExclamationCircle, FaCheckCircle, FaSpinner, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { VerifyAppointment } from '../../redux/actions/AppointmentAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const VerifyCodePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [formMessage, setFormMessage] = useState({ type: '', text: '', visible: false });
  const [isLoading, setIsLoading] = useState(false);
  
  // Verification modal state
  const [showVerification, setShowVerification] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState('email');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  
  // Language state
  const [language, setLanguage] = useState('tr');
  
  // Refs for code inputs
  const codeInputs = useRef([]);

  // Validate email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate password (changed to 6 characters minimum)
  const validatePassword = (password) => {
    return password.length >= 6;
  };
   const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const appointmentId = searchParams.get('appointmentId');

  useEffect(() => {
    // Burada API'ye doğrulama isteği gönderilebilir
    console.log("Kod:", code);
    console.log("Appointment ID:", appointmentId);
    
    // örnek API isteği:
    // fetch(`/api/verify?code=${code}&appointmentId=${appointmentId}`)
    //   .then(...)
  }, [code, appointmentId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: '', password: '' });
    setFormMessage({ ...formMessage, visible: false });
    
    // Validate inputs
    let isValid = true;
    const newErrors = { email: '', password: '' };
    
    if (!validateEmail(email)) {
      newErrors.email = language === 'tr' 
        ? 'Lütfen geçerli bir e-posta adresi girin' 
        : 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!validatePassword(password)) {
      newErrors.password = language === 'tr' 
        ? 'Parola en az 6 karakter olmalıdır' 
        : 'Password must be at least 6 characters';
      isValid = false;
    }
    
    if (!isValid) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate login request
    setIsLoading(true);
    
    setTimeout(() => {
      // Updated credentials
      if (email === 'dentacan@gmail.com' && password === '123456') {
        // Show verification modal
        setShowVerification(true);
      } else {
        // Show error
        setFormMessage({
          type: 'error',
          text: language === 'tr' 
            ? 'Hatalı e-posta veya parola. Lütfen tekrar deneyin.' 
            : 'Incorrect email or password. Please try again.',
          visible: true
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  // Handle verification code input
  const handleCodeInput = (index, value) => {
    if (!/^[0-9]$/.test(value) && value !== '') return;
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    
    // Move to next input if a digit was entered
    if (value !== '' && index < 5) {
      codeInputs.current[index + 1].focus();
    }
  };

  // Handle backspace in code input
  const handleCodeKeyDown = (index, e) => {
    if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      codeInputs.current[index - 1].focus();
    }
  };

  // Verify code
  const verifyCode = () => {
    const code = verificationCode.join('');
    if (code.length !== 6) {
      alert(language === 'tr' 
        ? 'Lütfen 6 haneli doğrulama kodunu girin.' 
        : 'Please enter the 6-digit verification code.');
      return;
    }
     dispatch(VerifyAppointment(appointmentId, code)).finally(() => {
      setIsVerifying(false);
    });
    setIsVerifying(true);
    
    toast.success("Doğrulama başarılı! Yönlendiriliyorsunuz...");
     setTimeout(() => {
        navigate('/'); 
      }, 1500);
  };

  // Resend code
  const resendCode = () => {
    if (!canResend) return;
    
    setResendTimer(60);
    setCanResend(false);
    
    // Show message
    const method = verificationMethod === 'email' 
      ? (language === 'tr' ? 'e-posta' : 'email') 
      : (language === 'tr' ? 'SMS' : 'SMS');
    
    alert(language === 'tr' 
      ? `Yeni doğrulama kodu ${method} ile gönderildi.` 
      : `New verification code has been sent via ${method}.`);
  };

  // Start resend timer
  useEffect(() => {
    let timer;
    
    if (resendTimer > 0 && !canResend) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    
    return () => clearTimeout(timer);
  }, [resendTimer, canResend]);

  // Focus first code input when modal opens
  useEffect(() => {
    if (showVerification && codeInputs.current[0]) {
      codeInputs.current[0].focus();
    }
  }, [showVerification]);

  // Translations
  const translations = {
    tr: {
      title: 'Yönetici Girişi',
      subtitle: 'Lütfen kimlik bilgilerinizle giriş yapın',
      emailLabel: 'E-posta Adresi',
      emailPlaceholder: 'dentacan@gmail.com', // Updated placeholder
      emailError: 'Lütfen geçerli bir e-posta adresi girin',
      passwordLabel: 'Parola',
      passwordPlaceholder: '••••••',
      passwordError: 'Parola en az 6 karakter olmalıdır', // Updated error message
      rememberMe: 'Beni Hatırla',
      forgotPassword: 'Parolamı Unuttum',
      loginButton: 'Giriş Yap',
      verificationTitle: 'Doğrulama Kodu',
      verificationMessage: `Doğrulama kodu ${email} e-posta adresine gönderildi.`,
      emailMethod: 'E-posta ile Doğrula',
      smsMethod: 'SMS ile Doğrula',
      verifyButton: 'Doğrula',
      cancelButton: 'İptal',
      resendCode: 'Yeni Kod Gönder',
      resendTimer: 'Yeni kod göndermek için {seconds} saniye bekleyin',
      errorMessage: 'Hatalı e-posta veya parola. Lütfen tekrar deneyin.',
      successMessage: 'Giriş başarılı! Yönlendiriliyorsunuz...'
    },
    en: {
      title: 'Admin Login',
      subtitle: 'Please enter your credentials',
      emailLabel: 'Email Address',
      emailPlaceholder: 'dentacan@gmail.com', // Updated placeholder
      emailError: 'Please enter a valid email address',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••',
      passwordError: 'Password must be at least 6 characters', // Updated error message
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot Password?',
      loginButton: 'Login',
      verificationTitle: 'Verification Code',
      verificationMessage: 'Enter the verification code to complete login',
      emailMethod: 'Verify via Email',
      smsMethod: 'Verify via SMS',
      verifyButton: 'Verify',
      cancelButton: 'Cancel',
      resendCode: 'Resend Code',
      resendTimer: 'Wait {seconds} seconds to resend',
      errorMessage: 'Incorrect email or password. Please try again.',
      successMessage: 'Login successful! Redirecting...'
    }
  };

  const t = translations[language];

  return (
   
<Fragment>
  
        <div className="verification-modal">
          <div className="verification-content">
            <div className="verification-header">
              <h2>{t.verificationTitle}</h2>
              <p>
                {verificationMethod === 'email'
                  ? `${language === 'tr' ? 'Doğrulama kodu' : 'Verification code sent to'} ${email}`
                  : (language === 'tr' ? 'Doğrulama kodu telefon numaranıza SMS olarak gönderildi.' : 'Verification code has been sent to your phone via SMS.')}
              </p>
            </div>
            
            <div className="verification-methods">
              <div
                className={`verification-method ${verificationMethod === 'email' ? 'active' : ''}`}
                onClick={() => setVerificationMethod('email')}
              >
                <FaEnvelope />
                <div>{t.emailMethod}</div>
              </div>
              <div
                className={`verification-method ${verificationMethod === 'sms' ? 'active' : ''}`}
                onClick={() => setVerificationMethod('sms')}
              >
                <FaMobileAlt />
                <div>{t.smsMethod}</div>
              </div>
            </div>
            
            <div className="verification-code-input">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  pattern="[0-9]"
                  inputMode="numeric"
                  autoComplete="off"
                  value={digit}
                  onChange={(e) => handleCodeInput(index, e.target.value)}
                  onKeyDown={(e) => handleCodeKeyDown(index, e)}
                  ref={(el) => (codeInputs.current[index] = el)}
                />
              ))}
            </div>
            
            <div className="verification-actions">
              <button
                className="verification-btn cancel-btn"
                onClick={() => setShowVerification(false)}
              >
                {t.cancelButton}
              </button>
              <button
                className="verification-btn verify-btn"
                onClick={verifyCode}
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <><FaSpinner className="fa-spin" /> {language === 'tr' ? 'Doğrulanıyor...' : 'Verifying...'}</>
                ) : (
                  t.verifyButton
                )}
              </button>
            </div>
            
            <div className="resend-code">
              {language === 'tr' ? 'Kod gelmedi mi?' : "Didn't receive code?"}{' '}
              {canResend ? (
                <a onClick={resendCode}>{t.resendCode}</a>
              ) : (
                <div>
                  {t.resendTimer.replace('{seconds}', resendTimer)}
                </div>
              )}
            </div>
          </div>
        </div>


      <style jsx>{`
        :root {
          --primary-color: #2a9d8f;
          --secondary-color: #264653;
          --accent-color: #e9c46a;
          --error-color: #e63946;
          --success-color: #2a9d8f;
          --light-gray: #f5f7fa;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .login-page {
          background-color: var(--light-gray);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }
        
        .login-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 450px;
          padding: 50px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }
        
        .login-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        }
        
        .logo {
          width: 180px;
          margin: 0 auto 30px;
          display: block;
          transition: transform 0.3s;
        }
        
        .logo:hover {
          transform: scale(1.05);
        }
        
        h1 {
          color: var(--secondary-color);
          margin-bottom: 10px;
          font-size: 1.8rem;
        }
        
        .subtitle {
          color: #666;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }
        
        .input-group {
          margin-bottom: 20px;
          text-align: left;
          position: relative;
        }
        
        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--secondary-color);
          font-size: 0.9rem;
        }
        
        .input-group input {
          width: 100%;
          padding: 14px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s;
          background-color: #f9f9f9;
        }
        
        .input-group input:focus {
          border-color: var(--primary-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
          background-color: #fff;
        }
        
        .input-group .input-error {
          border-color: var(--error-color);
          background-color: rgba(230, 57, 70, 0.05);
        }
        
        .input-error-message {
          color: var(--error-color);
          font-size: 0.8rem;
          margin-top: 5px;
        }
        
        .options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 25px 0 30px;
          font-size: 0.9rem;
        }
        
        .remember-me {
          display: flex;
          align-items: center;
        }
        
        .remember-me input {
          margin-right: 8px;
          accent-color: var(--primary-color);
        }
        
        .forgot-password {
          color: var(--primary-color);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .forgot-password:hover {
          color: var(--secondary-color);
          text-decoration: underline;
        }
        
        .login-btn {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 14px;
          width: 100%;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .login-btn:hover:not(:disabled) {
          background-color: var(--secondary-color);
          transform: translateY(-2px);
        }
        
        .login-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
          transform: none;
        }
        
        .message {
          margin-top: 15px;
          font-size: 0.9rem;
          padding: 12px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .error-message {
          color: var(--error-color);
          background-color: rgba(230, 57, 70, 0.1);
        }
        
        .success-message {
          color: var(--success-color);
          background-color: rgba(42, 157, 143, 0.1);
        }
        
        .info-message {
          color: var(--secondary-color);
          background-color: rgba(38, 70, 83, 0.1);
        }
        
        .language-selector {
          position: absolute;
          top: 20px;
          right: 20px;
        }
        
        .language-selector select {
          padding: 5px 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 0.8rem;
        }
        
        /* Verification modal styles */
        .verification-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: modalFadeIn 0.3s;
        }
        
        .verification-content {
          background: white;
          border-radius: 12px;
          width: 90%;
          max-width: 450px;
          padding: 30px;
        }
        
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .verification-header {
          margin-bottom: 20px;
          text-align: center;
        }
        
        .verification-header h2 {
          color: var(--secondary-color);
          margin-bottom: 10px;
        }
        
        .verification-methods {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .verification-method {
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          text-align: center;
          flex: 1;
        }
        
        .verification-method:hover {
          border-color: var(--primary-color);
          background-color: rgba(42, 157, 143, 0.05);
        }
        
        .verification-method.active {
          border-color: var(--primary-color);
          background-color: rgba(42, 157, 143, 0.1);
        }
        
        .verification-method i {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: var(--primary-color);
        }
        
        .verification-code-input {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .verification-code-input input {
          width: 50px;
          height: 50px;
          text-align: center;
          font-size: 1.2rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: all 0.3s;
        }
        
        .verification-code-input input:focus {
          border-color: var(--primary-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
        }
        
        .verification-actions {
          display: flex;
          justify-content: space-between;
        }
        
        .verification-btn {
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .verify-btn {
          background-color: var(--primary-color);
          color: white;
        }
        
        .verify-btn:hover {
          background-color: var(--secondary-color);
        }
        
        .cancel-btn {
          background-color: #f5f7fa;
          color: var(--secondary-color);
        }
        
        .cancel-btn:hover {
          background-color: #e9ecef;
        }
        
        .resend-code {
          text-align: center;
          margin-top: 15px;
          font-size: 0.9rem;
        }
        
        .resend-code a {
          color: var(--primary-color);
          text-decoration: none;
          cursor: pointer;
        }
        
        .resend-code a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 480px) {
          .login-container {
            padding: 40px 25px;
          }
          
          h1 {
            font-size: 1.5rem;
          }
          
          .verification-methods {
            flex-direction: column;
          }
          
          .verification-code-input input {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>

    </Fragment>
  );
};

export default VerifyCodePage;