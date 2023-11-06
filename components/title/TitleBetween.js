import { syne } from '@/app/fonts';
import Link from 'next/link';

function TitleBetween(props) {
    const { linkTitle, linkPath } = props;
    return (
        <div className="section-title-box-between">
            <h2 className={`${syne.className} section-title`}>{linkTitle}</h2>
            <div>
                <Link href={`/${linkPath}`} className="btn btn-orange">
                    {linkTitle}
                </Link>
            </div>
        </div>
    );
}

export default TitleBetween;
