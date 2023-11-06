import Client from '@/components/Client';
import LatestBlog from '@/components/blog/LatestBlog';
import HeroTwo from '@/components/home/HeroTwo';
import HowItWorks from '@/components/home/HowItWorks';
import LogisticSolution from '@/components/home/LogisticSolution';
import Statistics from '@/components/home/Statistics';
import TruckTrace from '@/components/home/TruckTrace';
import Services from '@/components/services/Services';
import Team from '@/components/team/Team';

export const metadata = {
    title: 'Logistic | Home',
};

const page = () => (
    <>
        <HeroTwo />
        <TruckTrace />
        <Services />
        <LogisticSolution />
        <Statistics />
        <HowItWorks />
        <Team />
        <Client />
        <LatestBlog />
    </>
);

export default page;
