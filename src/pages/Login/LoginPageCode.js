import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 12px;
  background: #0077b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #023e8a;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('https://localhost:5001/api/auth/login', {
      //   username,
      //   password
      // });
      
      //localStorage.setItem('adminToken', response.data.token);
      navigate('/admin');
    } catch (error) {
      toast.error('Giriş başarısız! Kullanıcı adı veya şifre hatalı.');
    }
  };

  return (
    <LoginContainer>
      <h2>Admin Girişi</h2>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Giriş Yap</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;