
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactForm from './ContactForm';

import ProductsSection from './ProductsSection';
import ReviewSection from './ReviewSection';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <ProductsSection></ProductsSection>
            <BusinessSummery></BusinessSummery>
            <ReviewSection></ReviewSection>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;