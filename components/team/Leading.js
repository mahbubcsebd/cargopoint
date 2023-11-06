'use client';

import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import gcIcon from '../../public/icons/gc-icon.svg';
import leading from '../../public/images/leading.jpg';
import Title from '../title/Title';

import classes from '@/styles/logistic.module.scss';

function Leading() {
    return (
        <div id="leading" className="leading section-pb">
            <div className="leading-area">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="section-content">
                                <Title title="We are the world leading Logistic service" />
                                <div className="trusted-img-box d-lg-none mb-4">
                                    <Image src={leading} alt="leading" />
                                </div>
                                <p className="text">
                                    Our goal is to ensure that you have access to the most suitable
                                    logistics solutions that optimize your supply chain operations,
                                    reduce costs and meet your business needs. Our supply chain
                                    solutions team provides detailed specifications.
                                </p>
                                <ul className={`${classes.goalsCollection} column-2 mt-4`}>
                                    <li>
                                        <div>
                                            <Image src={gcIcon} alt="gc" className="gc-icon" />
                                        </div>
                                        <p>Affordable Cost</p>
                                    </li>
                                    <li>
                                        <div>
                                            <Image src={gcIcon} alt="gc" className="gc-icon" />
                                        </div>
                                        <p>Shot Time Delivery</p>
                                    </li>
                                    <li>
                                        <div>
                                            <Image src={gcIcon} alt="gc" className="gc-icon" />
                                        </div>
                                        <p>Tracking Moving</p>
                                    </li>
                                    <li>
                                        <div>
                                            <Image src={gcIcon} alt="gc" className="gc-icon" />
                                        </div>
                                        <p>24/7 Support</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="trusted-img-box">
                                <Image src={leading} alt="leading" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Leading;
