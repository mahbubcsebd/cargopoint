'use client';

import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';

function ContactFull() {
    return (
        <Container>
            <Row>
                <Col xl={7} className="mb-4">
                    <ContactForm />
                </Col>
                <Col xl={5}>
                    <ContactInfo />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactFull;
