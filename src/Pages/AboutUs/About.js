import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2 className='text-center my-5'>About me</h2>
            <Card style={{ width: '18rem' }} className='w-50 mx-auto'>
                <Card.Body>
                    <Card.Title>Yasmin Akhter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Trying to be a web developer</Card.Subtitle>
                    <Card.Text>
                        As a developer I would like to create,design and develop web sites that are technically sound,efficient and ease to use.The web sites should represent the subject perfectly and efficiently.It also reflect the vendors requirement as well as market requirement.
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default About;