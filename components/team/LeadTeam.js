'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { leadTeam } from '../../data/team';
import TitleTwo from '../title/TitleTwo';
import SingleTeam from './SingleTeam';

function LeadTeam() {
    return (
        <div id="team" className="team section-pb">
            <div className="team-area">
                <Container>
                    <TitleTwo
                        title="Our Leadership Team"
                        text="Welcome to our logistic service company. We are the best at our transportaion service ever."
                    />
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

export default LeadTeam;
