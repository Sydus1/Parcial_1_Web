import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Banner = ({ imageSrc, style }) => {
return (
    <Row className="justify-content-center" style={{ display: 'flex' }}>
        <Col md="auto">
            <Image src={imageSrc} fluid style={{margin: 'auto' }} />
        </Col>
    </Row>
    );
};

export default Banner;
