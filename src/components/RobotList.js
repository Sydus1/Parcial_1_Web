import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Container } from 'react-bootstrap';
import RobotDetail from './RobotDetail';
import PageTitle from './PageTitle';
import Banner from './Banner';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  // Obtener la lista de robots al cargar el componente
  useEffect(() => {
    fetch('http://localhost:3001/robots')
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  // Manejar la selección de un robot
  const handleRobotClick = (id) => {
    setSelectedRobotId(id); // Actualizar el robot seleccionado
  };

  return (
    <Container>
      {/* Título de la página */}
      <PageTitle title="Adopta un Robot con Robot Lovers!" style={{ fontSize: '28px' }} />

      {/* Imagen superior (Banner) centrada */}
      <Banner imageSrc="/image_banner.png" style={{width: '700px', marginBottom: '20px', justifyContent:'center'}} />

      {/* Layout para mostrar el listado y el detalle en la misma vista */}
      <Row style={{ marginTop: '30px' }}>
        {/* Columna para el listado de robots */}
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
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

        {/* Columna para mostrar el detalle del robot seleccionado */}
        <Col md={6}>
          {selectedRobotId ? (
            <RobotDetail id={selectedRobotId} />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <h4>Selecciona un robot para ver el detalle</h4>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RobotList;
