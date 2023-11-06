'use client';

import services from '@/data/services';
import { Col, Container, Row } from 'react-bootstrap';
import TitleTwo from '../title/TitleTwo';
import SingleHomeService from './SingleHomeService';

function HomeServices() {
    return (
        <div id="services" className="services section-pb">
            <div className="services-area">
                <Container>
                    <TitleTwo
                        title="Safe & Reliable Cargo Services"
                        text="Safe & Reliable Cargo Solutions is an essential aspect of any logistics operation. Whether you are shipping valuable goods."
                    />
                    <Row>
                        {services.map((service) => (
                            <Col md={6} xl={4} className="mb-4" key={service.id}>
                                <SingleHomeService service={service} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomeServices;
