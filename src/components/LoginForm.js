import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import PageTitle from './PageTitle';
import Banner from './Banner';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });

      if (response.status === 200) {
        navigate('/robots');
      } else {
        setError(t('Login Error'));
      }
    } catch (error) {
      setError("No se pudo conectar al servidor. Verifica que el backend esté corriendo.");
    }
  };

  return (
    <Container style={{width: '700px' }}>
      <PageTitle title={t("Login")} style={{ fontSize: '28px' }} />
      <Banner imageSrc="/image_banner.png" style={{ marginBottom: '20px' }} />

      <Form style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
        <Form.Group>
          <Form.Label>{t("Username")}</Form.Label>
          <Form.Control
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={t("Enter Username")}
            style={{ borderColor: error ? 'red' : '#ced4da' }}
          />
        </Form.Group>
        <Form.Group style={{ marginTop: '10px' }}>
          <Form.Label>{t("Password")}</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("Enter Password")}
            style={{ borderColor: error ? 'red' : '#ced4da' }}
          />
        </Form.Group>

        <Row style={{ marginTop: '20px' }}>
          <Col>
            <Button onClick={handleLogin} style={{ backgroundColor: '#0044cc', border: 'none', width: '100%' }}>
              {t("Login")}
            </Button>
          </Col>
          <Col>
            <Button variant="danger" style={{ width: '100%' }}>
              {t("Cancel")}
            </Button>
          </Col>
        </Row>

        {error && (
          <div style={{ color: 'red', marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
            {error}
          </div>
        )}
      </Form>
      <Footer />
    </Container>
  );
};

export default LoginForm;
