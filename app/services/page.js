import Banner from '@/components/Banner';
import Services from '@/components/services/Services';

export const metadata = {
    title: 'Logistic | Services',
};

function Page() {
    return (
        <div id="services-page" className="services-page">
            <div className="services-page-area">
                <Banner text="Our Services" title="Logistics Services" />
                <Services />
            </div>
        </div>
    );
}

export default Page;
