'use client';

import { syne } from '@/app/fonts';
import help1 from '@/public/icons/help-1.svg';
import help2 from '@/public/icons/help-2.svg';
import help from '@/public/images/help.png';
import classes from '@/styles/help.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../title/Title';

function Help() {
    return (
        <div id="help" className={`${classes.help} section-pb`}>
            <div className="help-area">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="d-none d-lg-block">
                            <div className={`${classes.helpImg}`}>
                                <Image src={help} alt="help" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="section-content">
                                <Title title="How We Help Businesses Across The World." />
                                <div className={`${classes.helpImg} d-lg-none mb-4`}>
                                    <Image src={help} alt="help" />
                                </div>
                                <p className="section-text">
                                    To become a digital logistics company, you will need to invest
                                    in the latest technology. This includes transportation
                                    management systems (TMS), warehouse management systems (WMS),
                                    and other software that can help you streamline your operations,
                                    reduce costs, and improve customer service.
                                </p>
                                <ul className={`${classes.helpCollections} ${syne.className}`}>
                                    <li>
                                        <div className={`${classes.helpIcon}`}>
                                            <Image src={help1} alt="help" />
                                        </div>
                                        <h3 className={`${syne.className}`}>
                                            Ultimate Data Protection
                                        </h3>
                                    </li>
                                    <li>
                                        <div className={`${classes.helpIcon}`}>
                                            <Image src={help2} alt="help" />
                                        </div>
                                        <h3 className={`${syne.className}`}>
                                            Easy and Quick Customer service
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Help;
