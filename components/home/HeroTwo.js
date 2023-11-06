'use client';

import heroBg from '@/public/images/hero-2-bg.png';
import hero2 from '@/public/images/hero-2.png';
import classes from '@/styles/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

function HeroTwo() {
    return (
        <div id="hero-2" className={`${classes.hero} ${classes.hero2}`}>
            <Image src={heroBg} alt="hero-img" className={`${classes.heroBg}`} />
            <div className={`${classes.heroArea2}`}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className={`${classes.heroContent2}`}>
                                <h2 className={`${classes.heroTitle2}`}>
                                    Expert Solutions for Your Logistics Need
                                </h2>
                                <div className={`${classes.heroImg2} d-lg-none py-4`}>
                                    <Image className="w-100" src={hero2} alt="hero" />
                                </div>
                                <p className={`${classes.heroText2}`}>
                                    Logistic Hero is range of cost-saving features, including
                                    automated tracking and real-time inventory management
                                    businesses.
                                </p>
                                <Link href="#" className="btn btn-orange">
                                    Get a Quote
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} className="d-none d-lg-block">
                            <div className={`${classes.heroImg2}`}>
                                <Image src={hero2} alt="hero" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HeroTwo;
