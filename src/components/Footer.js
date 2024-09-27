import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '10px',
        borderTop: '1px solid #ddd',
        color: '#555',
      }}
    >
      Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
    </Container>
  );
};

export default Footer;
