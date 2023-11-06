'use client';

import { freightPartner } from '@/data/partners';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

function Freight() {
    return (
        <div id="freight-partners" className="freight-partners section-pb">
            <div className="freight-partners-area">
                <Container>
                    <Row>
                        <h2 className="partners-title">Freight Partners</h2>
                    </Row>
                    <Row>
                        {freightPartner.map((partner) => (
                            <Col key={partner.id} sm={6} lg={4} xl={3} className="mb-4">
                                <div className="single-partner">
                                    <Image src={partner} alt={partner} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Freight;
