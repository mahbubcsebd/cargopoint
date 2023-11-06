'use client';

import { syne } from '@/app/fonts';
import classes from '@/styles/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import hero1 from '../../public/images/hero-1-bg.jpg';

function Hero() {
    return (
        <div id="hero" className={`${classes.hero} ${classes.hero1}`}>
            <Image src={hero1} alt="hero-img" className={`${classes.heroBg1}`} />
            <div className={`${classes.heroArea}`}>
                <Container>
                    <div className={`${classes.heroContent}`}>
                        <h1 className={`${syne.className}`}>Logistic Delivery Around The World</h1>
                        <div className={`${classes.heroBtnBox}`}>
                            <Link href="#" className="btn btn-orange">
                                Get a Quote
                            </Link>
                            <Link href="#" className="btn btn-light">
                                Our Service
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Hero;
