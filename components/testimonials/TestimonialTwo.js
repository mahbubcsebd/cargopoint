'use client';

import testimonials from '@/data/testimonials';
import testimonialBg from '@/public/images/testimonial-bg.png';
import testimonialLg from '@/public/images/testimonial-lg.png';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classes from '../../styles/testimonial.module.scss';
import Title from '../title/Title';

function TestimonialTwo() {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <BsArrowRight />,
        prevArrow: <BsArrowLeft />,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div id="testimonial-2" className="testimonial-2 section-pb">
            <div className="testimonial-2-area">
                <Container>
                    <Row>
                        <div className="section-top-title">
                            <Title title="What our client says about our services." />
                        </div>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className={`${classes.testimonialLgImg}`}>
                                <Image
                                    src={testimonialLg}
                                    alt="testimonial"
                                    className={`${classes.testimonialLg}`}
                                />
                                <Image
                                    src={testimonialBg}
                                    alt="testimonial-bg"
                                    className={`${classes.testimonialBg}`}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Slider {...settings}>
                                {testimonials.map((testimonial) => {
                                    const { id, author, post, text } = testimonial;
                                    return (
                                        <div
                                            id="testimonial-slider-2"
                                            className={`${classes.testimonialSlider2}`}
                                            key={id}
                                        >
                                            <div className={`${classes.singleTestimonial2}`}>
                                                <p className={`${classes.testimonialText2}`}>
                                                    {text}
                                                </p>

                                                <div className={`${classes.testimonialAuthor2}`}>
                                                    <h2 className={`${classes.authorName}`}>
                                                        {author}
                                                    </h2>
                                                    <p className={`${classes.authorDesignation}`}>
                                                        {post}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TestimonialTwo;
