import Banner from '@/components/Banner';
import DoneServices from '@/components/service-process/DoneServices';
import LogisticProcess from '@/components/service-process/LogisticProcess';
import ServiceProcess from '@/components/service-process/ServiceProcess';

export const metadata = {
    title: 'Logistic | Service Process',
};

const page = () => (
    <div id="service-process-page" className="service-process-page">
        <div className="service-process-page-area">
            <Banner text="How it Work" title="Service process" />
            <ServiceProcess />
            <LogisticProcess />
            <DoneServices />
        </div>
    </div>
);

export default page;
