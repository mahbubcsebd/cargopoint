'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { leadTeam } from '../../data/team';
import Title from '../title/Title';
import SingleTeam from './SingleTeam';

function Team() {
    return (
        <div id="team" className="team section-pb">
            <div className="team-area">
                <Container>
                    <Row>
                        <div className="section-top-title">
                            <Title title="Our Dedicated Team" />
                        </div>
                    </Row>
                    <Row>
                        {leadTeam.map((team) => {
                            const { id, name, img, post } = team;
                            return (
                                <Col sm={6} lg={4} xl={3} className="mb-4" key={id}>
                                    <SingleTeam id={id} name={name} img={img} post={post} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Team;
