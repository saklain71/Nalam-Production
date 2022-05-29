
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Carosel from './Carosel';
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
            <Carosel></Carosel>

        </div>
    );
};

export default Home;