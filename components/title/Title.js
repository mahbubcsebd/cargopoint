import { syne } from '@/app/fonts';

function Title({ title }) {
    return <h2 className={`${syne.className} section-title`}>{title}</h2>;
}

export default Title;
