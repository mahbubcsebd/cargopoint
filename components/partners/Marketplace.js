'use client';

import { marketplacePartner } from '@/data/partners';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

function Marketplace() {
    return (
        <div id="marketplace-partners" className="marketplace-partners section-pb">
            <div className="marketplace-partners-area">
                <Container>
                    <Row>
                        <h2 className="partners-title">Marketplace Partners</h2>
                    </Row>
                    <Row>
                        {marketplacePartner.map((partner) => (
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

export default Marketplace;
