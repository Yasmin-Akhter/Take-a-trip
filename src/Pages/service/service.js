import { faClock, faLocationPin, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, location } = service;
    const navigate = useNavigate();



    return (
        <div className='service'>
            <img style={{ height: '239px' }} className='w-100' src={img} alt="" />

            <div className="Package-details mb-3">
                {/* <span><FontAwesomeIcon icon={faClock} /> 7d/6N &nbsp; </span>
                <span> <FontAwesomeIcon icon={faPerson} /> people-5 &nbsp;</span>
                <span> <FontAwesomeIcon icon={faLocationPin} /> Singapore</span> */}

                <p>
                    <span className='fs-2 fw-bold'>$</span>
                    <span className='fs-3'>1,900 /</span>
                    <span className='fs-5 '>per person</span>
                </p>
            </div>
            <div className="Charge mb-3 fs-6">

                <span><FontAwesomeIcon icon={faClock} /> 7d/6N &nbsp; </span>
                <span> <FontAwesomeIcon icon={faPerson} /> people-5 &nbsp;</span>
                <span> <FontAwesomeIcon icon={faLocationPin} /> {location}</span>
                {/* <p>
                    <span className='fs-2 fw-bold'>$</span>
                    <span className='fs-3'>1,900 /</span>
                    <span className='fs-5 '>per person</span>
                </p> */}
            </div>
            <h6>{name}</h6>
            <p><small>{description}</small></p>
            <button onClick={() => navigate('/checkout')} className='btn btn-primary w-50 mx-auto d-block mb-2'>Checkout</button>
        </div >
    );
};

export default Service;