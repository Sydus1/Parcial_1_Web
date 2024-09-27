import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import PageTitle from './PageTitle';
import Banner from './Banner';
import Footer from './Footer';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Manejo del inicio de sesión
  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();
    if (response.status === 200) {
      navigate('/robots');
    } else {
      setError(data.message);
    }
  };

  return (
    <Container style={{width: '700px'}}>
      {/* Título con estilo personalizado */}
      <PageTitle title="Adopta un Robot con Robot Lovers!" style={{ fontSize: '28px' }} />

      {/* Imagen centrada */}
      <Banner imageSrc="/image_banner.png" style={{ marginBottom: '20px' }} />

      {/* Formulario de inicio de sesión */}
      <Form style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
        <Form.Group>
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Ingrese su nombre de usuario"
          />
        </Form.Group>
        <Form.Group style={{ marginTop: '10px' }}>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </Form.Group>

        {/* Botones de ingreso y cancelación */}
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <Button onClick={handleLogin} style={{ backgroundColor: '#0044cc', border: 'none', width: '100%' }}>
              Ingresar
            </Button>
          </Col>
          <Col>
            <Button variant="danger" style={{ width: '100%' }}>
              Cancelar
            </Button>
          </Col>
        </Row>

        {/* Mensaje de error con el estilo solicitado */}
        {error && (
            <div style={{ color: 'red', marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
              {error}
            </div>
          )}
      </Form>
        {/* Footer en la parte inferior */}
    <Footer />
    </Container>
  );
};

export default LoginForm;
