/* eslint-disable prettier/prettier */

'use client';

import Image from 'next/image';
import { Form } from 'react-bootstrap';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import subsciption from '../public/images/subsciption-bg.png';
import subsciptionImg from '../public/images/subscribe-1.png';
import classes from '../styles/subscribe.module.scss';

function Subscribe() {
    return (
        <div
            id="subscribe"
            className={`${classes.subscribe}`}
        >
            <div className="subscribe-area">
                <div className="container">
                    <div className={`${classes.subscibeAreaBox}`}>
                        <Image
                            className={`${classes.subscribeBg}`}
                            src={subsciption}
                            alt="subscribe-bg"
                        />
                        <Image
                            className={`${classes.subscribeCat}`}
                            src={subsciptionImg}
                            alt="subscribe-cat"
                        />
                        <div className={`${classes.subscribeBox}`}>
                            <div className={`${classes.subscribeContent}`}>
                                <h2>Subscribe to our Newsletter!</h2>
                                <div className={`${classes.subscribeFormBox}`}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Your Mail Here"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-dark d-none d-md-block"
                                    >
                                        Subscribe
                                    </button>
                                    <button
                                        type="button"
                                        className={`${classes.arrowBtn} btn btn-dark d-md-none`}
                                    >
                                        <HiOutlineArrowNarrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
