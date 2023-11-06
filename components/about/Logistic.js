'use client';

import Image from 'next/image';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import gcIcon from '../../public/icons/gc-icon.svg';
import logImg from '../../public/images/log-img.png';
import logistic from '../../public/images/logistics.png';
import classes from '../../styles/logistic.module.scss';
import Title from '../title/Title';

function Logistic() {
    return (
        <div id="logistics" className={`${classes.logistics} section-pb`}>
            <div className={`${classes.logisticsArea}`}>
                <Container>
                    <Row className="mb-4">
                        <div className={`${classes.logisticsContent}`}>
                            <Title title="About Our Logistics" />
                            <p className="text">
                                Welcome to Logistics service, your trusted partner in logistics. We
                                are a team of experienced professionals who are passionate about
                                helping businesses streamline their supply chain operations and
                                optimize their logistics processes.
                            </p>
                            <Image
                                src={logistic}
                                alt="logistics"
                                className={`${classes.logisticsImg} py-4`}
                            />
                            <p className="text">
                                Our transportation services include ground, air, and ocean freight,
                                as well as intermodal and expedited shipping options. We leverage
                                our carrier network and technology to provide you with the most
                                cost-effective and efficient transportation solutions.
                            </p>

                            <div className={`${classes.logisticsDetailsImg} d-lg-none py-4`}>
                                <Image src={logImg} alt="log" />
                            </div>
                        </div>
                    </Row>
                    <Row className={`${classes.logisticsDetails}`}>
                        <Col lg={6}>
                            <Tabs
                                defaultActiveKey="goals"
                                id="portfolio-2-tabs"
                                className="about-2-tabs"
                                fill
                            >
                                <Tab eventKey="goals" title="Our Goals">
                                    <div className={`${classes.GoalContent}`}>
                                        <p className="text mb-4">
                                            Our company was founded with a mission to simplify the
                                            logistics process for our customers, and we achieve this
                                            through our commitment to delivering exceptional service
                                            and innovative solutions that meet the unique needs of
                                            each client.
                                            <br />
                                            <br />
                                            Our team of experienced logistics professionals work
                                            closely with our clients to understand their needs,
                                            develop customized logistics solutions, and provide
                                            ongoing support throughout the entire transportation
                                            process.
                                        </p>
                                        <ul className={`${classes.goalsCollection} column-2`}>
                                            <li>
                                                <div>
                                                    <Image
                                                        src={gcIcon}
                                                        alt="gc"
                                                        className={`${classes.gcIcon}`}
                                                    />
                                                </div>
                                                <p>Transportation assistance</p>
                                            </li>
                                            <li>
                                                <div>
                                                    <Image
                                                        src={gcIcon}
                                                        alt="gc"
                                                        className={`${classes.gcIcon}`}
                                                    />
                                                </div>
                                                <p>Biggest sea cargo company</p>
                                            </li>
                                            <li>
                                                <div>
                                                    <Image
                                                        src={gcIcon}
                                                        alt="gc"
                                                        className={`${classes.gcIcon}`}
                                                    />
                                                </div>
                                                <p>Ship everywhere</p>
                                            </li>
                                            <li>
                                                <div>
                                                    <Image
                                                        src={gcIcon}
                                                        alt="gc"
                                                        className={`${classes.gcIcon}`}
                                                    />
                                                </div>
                                                <p>Unlimited packages sizes</p>
                                            </li>
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab eventKey="story" title="Our Story">
                                    <div className={`${classes.storyContent}`}>
                                        <p className="text mb-4">
                                            Our company was founded with a mission to simplify the
                                            logistics process for our customers, and we achieve this
                                            through our commitment to delivering exceptional service
                                            and innovative solutions that meet the unique needs of
                                            each client.
                                            <br />
                                            <br />
                                            Our team of experienced logistics professionals work
                                            closely with our clients to understand their needs,
                                            develop customized logistics solutions, and provide
                                            ongoing support throughout the entire transportation
                                            process.
                                        </p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={6} className="d-none d-lg-block">
                            <div className={`${classes.logisticsDetailsImg}`}>
                                <Image src={logImg} alt="log" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Logistic;
