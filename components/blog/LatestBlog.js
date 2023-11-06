'use client';

import blogs from '@/data/blogs';
import { Col, Container, Row } from 'react-bootstrap';
import TitleBetween from '../title/TitleBetween';
import SingleBlog from './SingleBlog';

function LatestBlog() {
    return (
        <div id="blog" className="blog section-pb">
            <div className="blog-area">
                <Container>
                    <Row>
                        <TitleBetween linkTitle="Our latest blog" linkPath="blog" />
                    </Row>
                    <Row>
                        {blogs.slice(-3).map((blog) => {
                            const { id, title, date, img, tag, desc } = blog;
                            return (
                                <Col md={6} lg={4} className="mb-4" key={id}>
                                    <SingleBlog
                                        id={id}
                                        title={title}
                                        date={date}
                                        img={img}
                                        tag={tag}
                                        desc={desc}
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

export default LatestBlog;
