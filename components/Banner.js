import Image from 'next/image';
import bannerBg from '../public/images/banner-bg.svg';
import classes from '../styles/banner.module.scss';

function Banner(props) {
    const { text, title } = props;
    return (
        <div id="page-banner" className={`${classes.pageBanner}`}>
            <div className={`${classes.pageBannerArea}`}>
                <Image src={bannerBg} alt="bannerBg" className={`${classes.bannerBg}`} />
                <div className={`${classes.bannerContent}`}>
                    <p>{text}</p>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default Banner;
