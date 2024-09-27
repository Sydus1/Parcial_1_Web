import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const RobotDetail = ({ id }) => {
  const [robot, setRobot] = useState(null);
  const { t } = useTranslation();

  const convertToRawUrl = (url) => {
    if (url.includes("github.com") && url.includes("/blob/")) {
      return url.replace("/blob/", "/raw/");
    }
    return url;
  };

  useEffect(() => {
    fetch(`http://localhost:3001/robots/${id}`)
      .then((response) => response.json())
      .then((data) => setRobot(data));
  }, [id]);

  return (
    <Container>
      {robot ? (
        <Card style={{ width: '100%'}}>
          <Card.Img
            variant="top"
            src={convertToRawUrl(robot.imagen)}
            alt={robot.nombre}
            style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px auto' }}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{robot.nombre}</Card.Title>
            <Card.Text>
              <strong>{t("Model")}:</strong> {robot.modelo}
              <br />
              <strong>{t("Manufacturer")}:</strong> {robot.empresaFabricante}
              <br />
              <strong>{t("Year of Manufacture")}:</strong> {robot.añoFabricacion}
              <br />
              <strong>{t("Processing Capacity")}:</strong> {robot.capacidadProcesamiento}
              <br />
              <strong>{t("Description")}:</strong> {robot.humor}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>{t("Loading robot details...")}</p>
      )}
    </Container>
  );
};

export default RobotDetail;
