"use client";

import faqs from '@/data/faqs';
import { Accordion, Container, Row } from 'react-bootstrap';

function Faq() {
    return (
        <div id="faq" className="faq section-pb">
            <div className="faq-area">
                <Container>
                    <Row>
                        <div className="faq-box">
                            <Accordion defaultActiveKey="0">
                                {faqs.map((faq) => {
                                    const { id, title, text } = faq;
                                    return (
                                        <Accordion.Item eventKey={id} key={id}>
                                            <Accordion.Header className="accordion-header">
                                                {title}
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                {text}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    );
                                })}
                            </Accordion>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Faq;
