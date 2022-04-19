import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, description } = review;

    return (
        <div className='review'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                    <Card.Text>
                        "{description}"
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Review;