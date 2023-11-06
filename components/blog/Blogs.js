/* eslint-disable no-undef */
/* eslint-disable import/extensions */

'use client';

import blogs from '@/data/blogs';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../../styles/blogs.module.scss';
import SingleBlog from './SingleBlog';

function Blogs() {
    return (
        <div id="blog" className="blog section-pb">
            <div className={`${classes.blogArea}`}>
                <Container>
                    <Row>
                        {blogs.map((blog) => {
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

export default Blogs;
