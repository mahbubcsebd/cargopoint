import Client from '@/components/Client';
import Choose from '@/components/about/Choose';
import LatestBlog from '@/components/blog/LatestBlog';
import CounterUp from '@/components/home/CounterUp';
import Help from '@/components/home/Help';
import Hero from '@/components/home/Hero';
import HomeServices from '@/components/home/HomeServices';
import TruckTrace from '@/components/home/TruckTrace';
import Trusted from '@/components/home/Trusted';
import Team from '@/components/team/Team';

export const metadata = {
    title: 'Logistic | Home',
};

export default function Home() {
    return (
        <div className="home-page">
            <Hero />
            <TruckTrace />
            <HomeServices />
            <Trusted />
            <CounterUp />
            <Help />
            <Choose />
            <Team />
            <Client />
            <LatestBlog />
        </div>
    );
}
