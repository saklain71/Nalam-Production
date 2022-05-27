
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

import ProductsSection from './ProductsSection';
import Review from './Review';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <ProductsSection></ProductsSection>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;