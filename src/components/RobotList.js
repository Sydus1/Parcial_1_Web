import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Container } from 'react-bootstrap';
import RobotDetail from './RobotDetail';
import PageTitle from './PageTitle';
import Banner from './Banner';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('http://localhost:3001/robots')
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  const handleRobotClick = (id) => {
    setSelectedRobotId(id);
  };

  return (
    <Container style={{width: '900px' }}>
      <PageTitle title={t("Robot Adoption")} style={{ fontSize: '28px' }} />
      <Banner imageSrc="/image_banner.png" style={{ marginBottom: '28px' }} />

      <Row style={{ marginTop: '30px' }}>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>{t("Name")}</th>
                <th>{t("Model")}</th>
                <th>{t("Manufacturer")}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRobotClick(robot.id)} style={{ cursor: 'pointer' }}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col md={6}>
          {selectedRobotId ? (
            <RobotDetail id={selectedRobotId} />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <h4>{t("Select a robot to view details")}</h4>
            </div>
          )}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default RobotList;
