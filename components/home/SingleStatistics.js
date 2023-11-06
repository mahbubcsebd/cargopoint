import classes from '@/styles/statistics.module.scss';
import Image from 'next/image';

function SingleStatistics({ icon, title, text }) {
    return (
        <div className={`${classes.singleStatistics}`}>
            <div className={`${classes.statisticsIcon}`}>
                <Image src={icon} alt="statistic" />
            </div>
            <div className={`${classes.statisticsContent}`}>
                <h3 className={`${classes.statisticsTitle}`}>{title}</h3>
                <p className={`${classes.statisticsText}`}>{text}</p>
            </div>
        </div>
    );
}

export default SingleStatistics;
