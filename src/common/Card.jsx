
import { FacebookFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardExample({ img, title, text,designation }) {
    return (
        <Row className="g-4">
            <Col>
                <Card >
                    <div>
                    <Card.Img variant="top" src={img} width="100px" height="300px" />
                    </div>
                    <div style={{height:"300px", overflow:"hidden"}}>
                    <Card.Body className="d-flex flex-column align-items-center gap-1">
                        <Card.Text>{designation}</Card.Text>
                        <Card.Title>{title}</Card.Title>
                        <div className="d-flex gap-2">
                            <TwitterOutlined />
                            <FacebookFilled />
                            <LinkedinFilled />
                        </div>
                        <div className="yellow-border"></div>
                        <Card.Text>{text}</Card.Text>

                    </Card.Body>
                    </div>
                    
                </Card>
            </Col>
        </Row>
    );
}

export default CardExample;

 