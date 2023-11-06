'use client';

import experience from '@/public/icons/experience.svg';
import solution from '@/public/images/solution.png';
import classes from '@/styles/logisticSolution.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import Title from '../title/Title';

function LogisticSolution() {
    return (
        <div id="logistic-solution" className={`${classes.logisticSolution} section-pb`}>
            <div className={`${classes.logisticSolutionArea}`}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="section-content">
                                <Title title="Our Best Logistics Solutions" />
                                <div className={`${classes.solutionImgBox} d-lg-none py-4`}>
                                    <Image className="w-100" src={solution} alt="solution" />
                                </div>
                                <p className="section-text">
                                    Our goal is to ensure that you have access to the most suitable
                                    logistics solutions that optimize your supply chain operations,
                                    reduce costs and meet your business needs. Our supply chain
                                    solutions team provides detailed specifications.
                                </p>
                                <ul className={`${classes.experinceService}`}>
                                    <li>
                                        <div>
                                            <div className={`${classes.expCon}`}>
                                                <Image src={experience} alt="experince" />
                                            </div>
                                        </div>
                                        <div className={`${classes.experinceServiceContent}`}>
                                            <h4>Experienced Movers</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className={`${classes.expCon}`}>
                                                <Image src={experience} alt="experince" />
                                            </div>
                                        </div>
                                        <div className={`${classes.experinceServiceContent}`}>
                                            <h4>All In One Services</h4>
                                        </div>
                                    </li>
                                </ul>

                                <div className={`${classes.directorQuote}`}>
                                    <p className={`${classes.directorText}`}>
                                        “ Overall, There Logistics provides top-notch shipping
                                        services, and I will continue to use them for all of my
                                        shipping needs - highly recommend! ”
                                    </p>
                                    <h3 className={`${classes.directorName}`}>
                                        Robert Fox, <span>Director</span>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="col-lg-6 d-none d-lg-block">
                            <div className={`${classes.solutionImgBox}`}>
                                <Image src={solution} alt="solution" />
                                <div className={`${classes.solutionCounter}`}>
                                    <h4>
                                        <CountUp end={10} duration={3}>
                                            +
                                        </CountUp>
                                    </h4>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LogisticSolution;
