'use client';

import { syne } from '@/app/fonts';
import classes from '@/styles/truckTrace.module.scss';
import { Col, Container, Form, Row } from 'react-bootstrap';

function TruckTrace() {
    return (
        <div id="truck-trace" className={`${classes.truckTrace} section-pb`}>
            <div className="truck-trace-area">
                <Container>
                    <Row className={`${classes.traceWrapper}`}>
                        <Col lg={6}>
                            <div className={`${classes.singleTraceBox} mb-4 mb-lg-0`}>
                                <h3 className={`${classes.traceTitle} ${syne.className}`}>
                                    Track & Trace
                                </h3>
                                <div className={`${classes.traceInputBox}`}>
                                    <Form.Control type="text" placeholder="Tracking number" />
                                    <button
                                        type="button"
                                        className={`${classes.btnTrace} btn btn-orange`}
                                    >
                                        Track
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${classes.singleTraceBox}`}>
                                <h3 className={`${classes.traceTitle} ${syne.className}`}>
                                    Find a Location
                                </h3>
                                <div className={`${classes.traceInputBox}`}>
                                    <Form.Control type="text" placeholder="Tracking number" />
                                    <button
                                        type="button"
                                        className={`${classes.btnTrace} btn btn-orange`}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TruckTrace;
