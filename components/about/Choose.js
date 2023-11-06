'use client';

import { syne } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import chooses from '../../data/choose';
import classes from '../../styles/choose.module.scss';
import Title from '../title/Title';

function Choose() {
    return (
        <div id="choose" className={`${classes.choose} section-pb`}>
            <div className={`${classes.chooseArea}`}>
                <Container>
                    <Row>
                        <div className="section-top-title">
                            <Title title="Why Choose Us" />
                        </div>
                    </Row>
                    <Row>
                        {chooses.map((choose) => {
                            const { id, title, icon, text } = choose;
                            return (
                                <Col md={6} lg={4} className="mb-4" key={id}>
                                    <div className={`${classes.singleChoose}`}>
                                        <Link href="#" className={`${classes.chooseImg}`}>
                                            <Image src={icon} alt="choose" />
                                        </Link>
                                        <h4 className={`${classes.chooseTitle} ${syne.className}`}>
                                            {title}
                                        </h4>
                                        <p className={`${classes.text}`}>{text}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Choose;
