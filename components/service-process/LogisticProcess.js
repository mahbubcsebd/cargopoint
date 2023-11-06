'use client';

import lp1 from '@/public/images/lp-1.png';
import lp2 from '@/public/images/lp-2.png';
import lp3 from '@/public/images/lp-3.png';
import classes from '@/styles/serviceProcess.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import TitleTwo from '../title/TitleTwo';

function LogisticProcess() {
    return (
        <div id="logistic-process" className={`${classes.logisticProcess} section-pb`}>
            <div className={`${classes.logisticProcessArea}`}>
                <Container>
                    <Row>
                        <TitleTwo
                            title="Our Logistic Process"
                            text="This process can include order processing, warehousing, inventory management, picking and packing, shipping, delivery, and returns management."
                        />
                    </Row>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4">
                            <div className={`${classes.lpContent}`}>
                                <h2 className={`${classes.lpTitle}`}>Order processing</h2>
                                <div className={`${classes.lpImgBox} d-lg-none py-4`}>
                                    <Image className="w-100" src={lp2} alt="lp-img" />
                                </div>
                                <p className={`${classes.lpText}`}>
                                    Logistic order processing is the essential step of receiving and
                                    processing orders from customers, including verifying the
                                    availability of stock, pricing, and payment processing. This
                                    process involves several steps, such as order verification,
                                    payment processing, and forwarding the order to the warehouse
                                    for picking and packing. Efficient order processing is critical
                                    for timely delivery and customer satisfaction. By automating the
                                    order processing process, businesses can improve their
                                    efficiency, reduce errors, and provide a better customer
                                    experience.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className="mb-4 d-none d-lg-block">
                            <div className={`${classes.lpImgBox}`}>
                                <Image className="w-100" src={lp2} alt="lp-img" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 d-none d-lg-block">
                            <div className={`${classes.lpImgBox}`}>
                                <Image className="w-100" src={lp1} alt="lp-img" />
                            </div>
                        </Col>
                        <Col lg={6} className="mb-4">
                            <div className={`${classes.lpContent}`}>
                                <h2 className={`${classes.lpTitle}`}>Inventory management</h2>
                                <div className={`${classes.lpImgBox} d-lg-none py-4`}>
                                    <Image className="w-100" src={lp1} alt="lp-img" />
                                </div>
                                <p className={`${classes.lpText}`}>
                                    Inventory management is the process of tracking and managing a
                                    company is inventory levels to ensure that there is an optimal
                                    amount of stock available to meet customer demand while
                                    minimizing inventory costs. This process includes monitoring
                                    inventory levels, forecasting demand, ordering new stock, and
                                    managing stock rotation. Efficient inventory management is
                                    essential for businesses to minimize storage costs while
                                    ensuring that enough stock is available to fulfill customer
                                    orders. By automating inventory management processes.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4">
                            <div className={`${classes.lpContent}`}>
                                <h2 className={`${classes.lpTitle}`}>Returns management</h2>
                                <div className={`${classes.lpImgBox} d-lg-none py-4`}>
                                    <Image className="w-100" src={lp1} alt="lp-img" />
                                </div>
                                <p className={`${classes.lpText}`}>
                                    Returns management is an essential part of the logistics process
                                    that involves managing the return of products by customers. This
                                    process typically includes inspecting the returned products,
                                    processing refunds or exchanges, and restocking inventory.
                                    Efficient returns management is critical for maintaining
                                    customer satisfaction, reducing costs, and minimizing the impact
                                    of returns on inventory levels. By automating returns management
                                    processes and using returns management software, businesses can
                                    streamline their operations.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className=" mb-4 d-none d-lg-block">
                            <div className={`${classes.lpImgBox}`}>
                                <Image className="w-100" src={lp3} alt="lp-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LogisticProcess;
