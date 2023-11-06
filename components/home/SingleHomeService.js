import { syne } from '@/app/fonts';
import classes from '@/styles/homeServices.module.scss';
import Image from 'next/image';

function SingleHomeService({ service }) {
    const { title, tag, desc } = service;
    return (
        <div className={`${classes.singleServices} `}>
            <div className={`${classes.servicesImgBox}`}>
                <Image src={tag} alt="serivices" />
            </div>
            <h3 className={`${classes.servicesTitle} ${syne.className}`}>{title}</h3>
            <p className={`${classes.servicesText}`}>{desc}</p>
        </div>
    );
}

export default SingleHomeService;
