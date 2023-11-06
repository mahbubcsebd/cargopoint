'use client';

import statistics from '@/data/statistics';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../title/Title';
import SingleStatistics from './SingleStatistics';

function Statistics() {
    return (
        <div id="statistics" className="statistics section-pb">
            <div className="statistics-area">
                <Container>
                    <Row>
                        <div className="section-top-title">
                            <Title title="The statistics speak for themselves" />
                        </div>
                    </Row>
                    <Row>
                        {statistics.map((statistic) => {
                            const { id, icon, title, text } = statistic;
                            return (
                                <Col md={6} lg={4} className="mb-4" key={id}>
                                    <SingleStatistics icon={icon} title={title} text={text} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Statistics;
