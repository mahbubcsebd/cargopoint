'use client';

import classes from '@/styles/form.module.scss';
import { Col, Container, Form, Row } from 'react-bootstrap';

function ContactForm() {
    return (
        <div id="contact-form" className="request-contact section-pb">
            <div className="request-contact-area">
                <Container>
                    <Form action="" id="contact-form" className={`${classes.cargoForm}`}>
                        <div className={`${classes.formTitleBox}`}>
                            <h3 className={`${classes.formTitle}`}>Get in touch!</h3>
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
                                <Col md={6} className="mb-4">
                                    <Form.Label htmlFor="contact-number">Enter Number</Form.Label>
                                    <Form.Control
                                        id="contact-number"
                                        type="text"
                                        name="contactNumber"
                                        placeholder="Enter Number"
                                    />
                                </Col>
                                <Col md={6} className="mb-4">
                                    <Form.Label htmlFor="contact-subject">Enter Subject</Form.Label>
                                    <Form.Control
                                        id="contact-subject"
                                        type="text"
                                        name="contactSubject"
                                        placeholder="Enter Subject"
                                    />
                                </Col>
                                <Col className="mb-4">
                                    <Form.Label htmlFor="contact-message">Enter Message</Form.Label>
                                    <textarea
                                        id="contact-message"
                                        className="form-control"
                                        type="text"
                                        name="contactMessage"
                                        placeholder="Enter Message"
                                        cols="30"
                                        rows="7"
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

export default ContactForm;
