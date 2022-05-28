
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

import ProductsSection from './ProductsSection';
import ReviewSection from './ReviewSection';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <ProductsSection></ProductsSection>
            <BusinessSummery></BusinessSummery>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;