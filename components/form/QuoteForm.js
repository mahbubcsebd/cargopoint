'use client';

import box from '@/public/icons/box.svg';
import classes from '@/styles/form.module.scss';
import Image from 'next/image';
import { Col, Container, Form, Row } from 'react-bootstrap';

function QuoteForm() {
    return (
        <div id="request-quote-3" className="request-quote section-pb">
            <div className="request-quote-area">
                <Container>
                    <Form id="request-quote-form-2" className={`${classes.cargoForm}`}>
                        <div className={`${classes.formTitleBox}`}>
                            <h3 className={`${classes.formTitle}`}>Request a Quote</h3>
                            <div className={`${classes.formTitleIcon}`}>
                                <Image src={box} alt="box" />
                            </div>
                        </div>
                        <div className={`${classes.formInputWrapper}`}>
                            <Row>
                                <Col md={6} className="mb-4">
                                    <Form.Label htmlFor="contact-name">Enter Name</Form.Label>
                                    <Form.Control
                                        id="contact-name"
                                        type="text"
                                        name="contactName"
                                        placeholder="Enter Name"
                                    />
                                </Col>
                                <Col md={6} className="mb-4">
                                    <Form.Label htmlFor="contact-email">Enter Email</Form.Label>
                                    <Form.Control
                                        id="contact-email"
                                        type="email"
                                        name="contactEmail"
                                        placeholder="Enter Email"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-4">
                                    <Form.Label htmlFor="contact-phone">Phone</Form.Label>
                                    <Form.Control
                                        id="contact-phone"
                                        type="text"
                                        name="contactPhone"
                                        placeholder="Phone"
                                    />
                                </Col>
                                <Col md={6} className="mb-4">
                                    <Form.Label htmlFor="contact-subject">Subject</Form.Label>
                                    <Form.Control
                                        id="contact-subject"
                                        type="text"
                                        name="contactSubject"
                                        placeholder="Subject"
                                    />
                                </Col>
                                <Col md={12} className="mb-4">
                                    <Form.Label htmlFor="contact-message">message</Form.Label>
                                    <Form.Control
                                        id="contact-message"
                                        type="text"
                                        name="contactMessage"
                                        placeholder="essage"
                                    />
                                </Col>
                            </Row>
                            <input
                                className="btn btn-orange mt-8"
                                type="submit"
                                value="Request Submit"
                            />
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default QuoteForm;
