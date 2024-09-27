import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const RobotDetail = ({ id }) => {
  const [robot, setRobot] = useState(null);

  // Función para convertir la URL de GitHub a raw si es necesario
  const convertToRawUrl = (url) => {
    // Si la URL es de GitHub y contiene "/blob/", conviértela a formato "raw"
    if (url.includes("github.com") && url.includes("/blob/")) {
      return url.replace("/blob/", "/raw/");
    }
    return url; // Si no es un link de GitHub, retorna la URL original
  };

  useEffect(() => {
    // Obtener el detalle del robot usando el ID proporcionado como prop
    fetch(`http://localhost:3001/robots/${id}`)
      .then((response) => response.json())
      .then((data) => setRobot(data));
  }, [id]);

  return (
    <Container>
      {robot ? (
        <Card style={{ width: '100%', marginTop: '20px' }}>
          {/* Usar la URL corregida si es un link de GitHub */}
          <Card.Img
            variant="top"
            src={convertToRawUrl(robot.imagen)} // Convertir la URL si es necesario
            alt={robot.nombre}
            style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px auto' }} // Ajustar el tamaño y centrado
          />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{robot.nombre}</Card.Title>
            <Card.Text>
              <strong>Modelo:</strong> {robot.modelo}
              <br />
              <strong>Fabricante:</strong> {robot.empresaFabricante}
              <br />
              <strong>Año de Fabricación:</strong> {robot.añoFabricacion}
              <br />
              <strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}
              <br />
              <strong>Descripción:</strong> {robot.humor}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando detalles del robot...</p>
      )}
    </Container>
  );
};

export default RobotDetail;
