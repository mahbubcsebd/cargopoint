import address from '@/public/icons/address.svg';
import open from '@/public/icons/open.svg';
import support from '@/public/icons/support.svg';

import classes from '@/styles/contactInfo.module.scss';
import Image from 'next/image';

function ContactInfo() {
    return (
        <div className={`${classes.contactInfoBox}`}>
            <div className={`${classes.singleContactInfo} mb-4`}>
                <div>
                    <div className={`${classes.infoIcon}`}>
                        <Image src={open} alt="open" />
                    </div>
                </div>
                <div className={`${classes.infoContent}`}>
                    <h2 className={`${classes.infoTitle}`}>Opening Hours</h2>
                    <p className={`${classes.infoText}`}>Monday - Friday</p>
                    <p className={`${classes.infoText}`}>9pm to 6pm</p>
                </div>
            </div>
            <div className={`${classes.singleContactInfo} mb-4`}>
                <div>
                    <div className={`${classes.infoIcon}`}>
                        <Image src={address} alt="address" />
                    </div>
                </div>
                <div className={`${classes.infoContent}`}>
                    <h2 className={`${classes.infoTitle}`}>Address</h2>
                    <p className={`${classes.infoText}`}>467 Stutler Lane, Altoona PA 16602</p>
                </div>
            </div>
            <div className={`${classes.singleContactInfo} mb-4`}>
                <div>
                    <div className={`${classes.infoIcon}`}>
                        <Image src={support} alt="support" />
                    </div>
                </div>
                <div className={`${classes.infoContent}`}>
                    <h2 className={`${classes.infoTitle}`}>Support</h2>
                    <p className={`${classes.infoText}`}>+9 (813) 752-5611 example@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
