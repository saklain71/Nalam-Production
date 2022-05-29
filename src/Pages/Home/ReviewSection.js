import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewSection = () => {
const [review, setreview] = useState([]);
useEffect(()=>{
    fetch('https://still-taiga-05914.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setreview(data))
},[])
   
    return (
       <section>
            <h1 className='text-info text-6xl my-10 font-sans'>Clients Reviews Here</h1>
        
        <div className='grid grid-cols-1 sm: lg:grid-cols-3 gap-5 mb-14'>
            
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