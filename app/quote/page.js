import Banner from '@/components/Banner';
import QuoteForm from '@/components/form/QuoteForm';

export const metadata = {
    title: 'Logistic | Quote',
};

const page = () => (
    <div id="quote-page" className="quote-page">
        <div className="quote-page-area">
            <Banner text="Get a quote" title="Get Immediate Quotes" />
            <QuoteForm />
        </div>
    </div>
);

export default page;
