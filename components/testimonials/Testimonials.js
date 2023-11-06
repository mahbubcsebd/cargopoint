'use client';

import testimonials from '@/data/testimonials';
import { Col, Container, Row } from 'react-bootstrap';
import SingleTestimonial from './SingleTestimonial';

function Testimonials() {
    return (
        <div id="tetimonial" className="tetimonial section-pb">
            <div className="testimonial-area">
                <Container>
                    <Row>
                        {testimonials.map((testimonial) => {
                            const { id, author, img, post, text } = testimonial;
                            return (
                                <Col key={id} md={6} className="mb-4">
                                    <SingleTestimonial
                                        id={id}
                                        author={author}
                                        img={img}
                                        post={post}
                                        text={text}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Testimonials;
