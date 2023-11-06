'use client';

import { syne } from '@/app/fonts';
import globe from '@/public/icons/globe.svg';
import trusted from '@/public/images/trusted.jpg';
import classes from '@/styles/trusted.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../title/Title';

function Trusted() {
    return (
        <div id="trusted" className="trusted section-pb">
            <div className="trusted-area">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="section-content">
                                <Title title="Digital & Trusted Transport Logistic Company" />
                                <div className={`${classes.trustedImgBox} d-lg-none mb-4`}>
                                    <Image src={trusted} alt="trusted" />
                                </div>
                                <p className="section-text">
                                    To become a digital logistics company, you will need to invest
                                    in the latest technology. This includes transportation
                                    management systems (TMS), warehouse management systems (WMS),
                                    and other software that can help you streamline your operations,
                                    reduce costs, and improve customer service.
                                </p>
                                <div className={`${classes.gService}`}>
                                    <div>
                                        <div>
                                            <Image src={globe} alt="globe" />
                                        </div>
                                    </div>
                                    <div className={`${classes.gServiceContent}`}>
                                        <h4 className={`${syne.className}`}>Global Service</h4>
                                        <p className="text">
                                            Providing global service can be challenging, but it is
                                            also an opportunity to expand your business customer
                                            base.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="d-none d-lg-block">
                            <div className={`${classes.trustedImgBox}`}>
                                <Image src={trusted} alt="trusted" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Trusted;
