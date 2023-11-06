'use client';

import deliverd from '@/public/icons/deliverd.svg';
import order from '@/public/icons/order.svg';
import payment from '@/public/icons/payment.svg';
import shipped from '@/public/icons/shipped.svg';
import warehouse from '@/public/icons/warehouse.svg';
import serviceProcess from '@/public/images/service-process.png';
import classes from '@/styles/serviceProcess.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

function ServiceProcess() {
    return (
        <div id="service-process" className={`${classes.service - process} section-pb`}>
            <div className={`${classes.serviceProcessArea}`}>
                <Container>
                    <Row className="align-items-center">
                        <Col xl={6} className="order-xl-2">
                            <div className={`${classes.serviceProcessImg} pb-4 pb-xl-0`}>
                                <Image className="w-100" src={serviceProcess} alt="process" />
                            </div>
                        </Col>
                        <Col xl={6}>
                            <ul className={`${classes.serviceProcessCollection}`}>
                                <li className={`${classes.processList}`}>
                                    <div>
                                        <div className={`${classes.processIcon}`}>
                                            <Image src={order} alt="process" />
                                        </div>
                                    </div>
                                    <div className={`${classes.processContent}`}>
                                        <h3>Customer places order</h3>
                                        <p>Containerization is a process that involves packing.</p>
                                    </div>
                                </li>
                                <li className={`${classes.processDevider}`} />
                                <li className={`${classes.processList}`}>
                                    <div>
                                        <div className={`${classes.processIcon}`}>
                                            <Image src={payment} alt="process" />
                                        </div>
                                    </div>
                                    <div className={`${classes.processContent}`}>
                                        <h3>Payment successful</h3>
                                        <p>Containerization is a process that involves packing.</p>
                                    </div>
                                </li>
                                <li className={`${classes.processDevider}`} />
                                <li className={`${classes.processList}`}>
                                    <div>
                                        <div className={`${classes.processIcon}`}>
                                            <Image src={warehouse} alt="process" />
                                        </div>
                                    </div>
                                    <div className={`${classes.processContent}`}>
                                        <h3>Warehouse receives order</h3>
                                        <p>Containerization is a process that involves packing.</p>
                                    </div>
                                </li>
                                <li className={`${classes.processDevider}`} />
                                <li className={`${classes.processList}`}>
                                    <div>
                                        <div className={`${classes.processIcon}`}>
                                            <Image src={shipped} alt="process" />
                                        </div>
                                    </div>
                                    <div className={`${classes.processContent}`}>
                                        <h3>Item picket & shipped</h3>
                                        <p>Containerization is a process that involves packing.</p>
                                    </div>
                                </li>
                                <li className={`${classes.processDevider}`} />
                                <li className={`${classes.processList}`}>
                                    <div>
                                        <div className={`${classes.processIcon}`}>
                                            <Image src={deliverd} alt="process" />
                                        </div>
                                    </div>
                                    <div className={`${classes.processContent}`}>
                                        <h3>Delivered & measure success</h3>
                                        <p>Containerization is a process that involves packing.</p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ServiceProcess;
