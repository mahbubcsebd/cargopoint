'use client';

import services from '@/data/services';
import { Col, Container, Row } from 'react-bootstrap';
import SingleHomeService from '../home/SingleHomeService';
import TitleBetween from '../title/TitleBetween';

function DoneServices() {
    return (
        <div id="services" className="services section-pb">
            <div className="services-area">
                <Container>
                    <Row>
                        <TitleBetween linkTitle="What we have done" linkPath="services" />
                    </Row>
                    <Row>
                        {services.slice(0, 3).map((service) => (
                            <Col md={6} xl={4} className="mb-4" key={service.id}>
                                <SingleHomeService service={service} bgClass="bgLightOrange" />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default DoneServices;
