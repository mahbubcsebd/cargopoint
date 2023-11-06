import { syne } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../../styles/team.module.scss';

function SingleTeam({ name, img, post }) {
    return (
        <div className={`${classes.singleTeam}`}>
            <Link href="#" className={`${classes.teamImg}`}>
                <Image src={img} alt="team" />
            </Link>
            <div className={`${classes.teamContent}`}>
                <Link href="#" className={`${classes.teamName} ${syne.className}`}>
                    {name}
                </Link>
                <p className={`${classes.teamText}`}>{post}</p>
            </div>
        </div>
    );
}

export default SingleTeam;
