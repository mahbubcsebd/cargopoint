'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import location from '../public/icons/location.svg';
import logoLight from '../public/icons/logo-light.svg';
import classes from '../styles/footer.module.scss';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className={`${classes.footerArea}`}>
                <Container>
                    <Row className={`${classes.footerMiddle}`}>
                        <Col lg={6} className="mb-5">
                            <div className={`${classes.footerContent}`}>
                                <div className={`${classes.footerLogo}`}>
                                    <Image src={logoLight} alt="logo" />
                                </div>
                                <div className={`${classes.footerAddress}`}>
                                    <div className={`${classes.locationIcon}`}>
                                        <Image src={location} alt="location" />
                                    </div>
                                    <h3>Ultimate Data Protection</h3>
                                </div>
                                <div className={`${classes.quickContact}`}>
                                    <p>Quick Contact</p>
                                    <h2 className={`${classes.footerPhone}`}>
                                        Phone: 555-123-4567
                                    </h2>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xxl={3} className="mb-5">
                            <div className={`${classes.footerMenu}`}>
                                <h2 className={`${classes.menuCategory}`}>Quick Links</h2>
                                <ul className={`${classes.footerMenuList}`}>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Track Your Shipment</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Get a Quote</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} xxl={3}>
                            <div className={`${classes.footerMenu}`}>
                                <h2 className={`${classes.menuCategory}`}>Support</h2>
                                <ul className={`${classes.footerMenuList}`}>
                                    <li>
                                        <Link href="#">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Careers</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms of Use</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`${classes.footerDevider}`} />
                <Container>
                    <div className={`${classes.footerBottom}`}>
                        <p className={`${classes.footerCopyright}`}>
                            &copy; 2023 by UiBarn, All rights reserved.
                        </p>
                        <ul className={`${classes.footerSocial}`}>
                            <li>
                                <Link href="https://www.facebook.com/">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/?original_referer=">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
