import Choose from '@/components/about/Choose';
import Logistic from '@/components/about/Logistic';
import Banner from '@/components/Banner';
import Client from '@/components/Client';
import Team from '@/components/team/Team';

export const metadata = {
    title: 'Logistic | About Us',
};

const page = () => (
    <div id="logistic-page" className="logistic-page">
        <div className="logistic-page-area">
            <Banner text="About Us" title="Who we are" />
            <Logistic />
            <Choose />
            <Team />
            <Client />
        </div>
    </div>
);

export default page;
