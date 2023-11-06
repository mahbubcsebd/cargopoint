'use client';

import { syne } from '@/app/fonts';
import Image from 'next/image';
import client1 from '../public/icons/client-1.png';
import client2 from '../public/icons/client-2.png';
import client3 from '../public/icons/client-3.png';
import client4 from '../public/icons/client-4.png';
import client5 from '../public/icons/client-5.png';

const { Container } = require('react-bootstrap');

function Client() {
    return (
        <div id="client" className="client section-pb">
            <div className="client-area">
                <Container>
                    <div className="section-top-title">
                        <p className={`${syne.className} client-text`}>
                            Trusted by 100+ growing companies take our services
                        </p>
                    </div>
                    <div className="client-wrapper">
                        <Image src={client1} alt="client" />
                        <Image src={client2} alt="client" />
                        <Image src={client3} alt="client" />
                        <Image src={client4} alt="client" />
                        <Image src={client5} alt="client" />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Client;
