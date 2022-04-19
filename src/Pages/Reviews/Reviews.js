import React from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1, name: "Sakib Al Hasan", description: "Thank you for our lovely tour of Sibiu and Alba Iulia! It was grate, you were grate. The tour and information were exceptional"
        },
        {
            id: 2, name: "Shovon S R", description: "Very knowledgeable and smart ladyShe took me and my client on a walking tour even though it was raining and we had a wonderful time. "

        },
        {
            id: 3, name: "Zinia Khanom", description: "Thank you for our lovely tour of Sibiu and Alba Iulia! It was grate, you were grate. The tour and information were exceptional"
        }
    ]
    return (
        <div>
            <div className="reviews-title">
                <h1>My Happy Customers Says</h1>
            </div>
            <div className="reviews-container ">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;
