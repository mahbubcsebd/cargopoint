import Banner from '@/components/Banner';
import ContactFull from '@/components/contact/ContactFull';

export const metadata = {
    title: 'Logistic | Contact',
};

const page = () => (
    <div id="faq-page" className="faq-page">
        <div className="faq-page-area">
            <Banner text="Contact" title="Contact Us" />
            <ContactFull />
        </div>
    </div>
);

export default page;
