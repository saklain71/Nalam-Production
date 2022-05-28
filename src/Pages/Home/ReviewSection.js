import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import Review from './Review';

const ReviewSection = () => {
const [review, setreview] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setreview(data))
},[])
   
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                review.map(review => <Review
                key={review._id}
                review={review}
                >
                </Review>)
            }   
        </div>
    );
};

export default ReviewSection;