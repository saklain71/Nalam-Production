import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewSection = () => {
const [review, setreview] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setreview(data))
},[])
   
    return (
       <section>
            <h1 className='text-info text-3xl'>Clients Reviews Here</h1>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-14'>
            
            {
                review.map(review => <Review
                key={review._id}
                review={review}
                >
                </Review>)
            }   
        </div>
       </section>
    );
};

export default ReviewSection;