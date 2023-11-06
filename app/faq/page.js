import Banner from '@/components/Banner';
import Faq from '@/components/faq/Faq';
import QuoteForm from '@/components/form/QuoteForm';

export const metadata = {
    title: 'Logistic | Faq',
};

const page = () => (
    <div id="faq-page" className="faq-page">
        <div className="faq-page-area">
            <Banner text="FAQ" title="Discover FAQ" />
            <Faq />
            <QuoteForm />
        </div>
    </div>
);

export default page;
