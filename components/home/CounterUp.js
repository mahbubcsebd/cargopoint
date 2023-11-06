'use client';

import { syne } from '@/app/fonts';
import happyClients from '@/data/happyClients';
import classes from '@/styles/counterUp.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

function CounterUp() {
    return (
        <div id="counter-up" className={`${classes.counterUp} section-pb`}>
            <div className={`${classes.counterUpArea}`}>
                <Container>
                    <Row>
                        {happyClients.map((happyClient) => {
                            const { id, number, title } = happyClient;
                            return (
                                <Col sm={6} lg={6} xl={3} className="mb-8" key={id}>
                                    <div className={`${classes.singleCounter} ${syne.className}`}>
                                        <div className={`${classes.counterNumber}`}>
                                            <CountUp end={number} duration={2} />+
                                        </div>
                                        <p className={`${classes.counterCategory}`}>{title}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CounterUp;
