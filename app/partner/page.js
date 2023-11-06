import Banner from '@/components/Banner';
import Freight from '@/components/partners/Freight';
import Marketplace from '@/components/partners/Marketplace';
import Shipping from '@/components/partners/Shipping';

export const metadata = {
    title: 'Logistic | Partner',
};

const page = () => (
    <div id="partner-page" className="partner-page">
        <div className="partner-page-area">
            <Banner text="Our Partners" title="Our Partners" />
            <Shipping />
            <Freight />
            <Marketplace />
        </div>
    </div>
);

export default page;
