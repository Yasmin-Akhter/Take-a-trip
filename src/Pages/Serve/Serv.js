import { faClock, faLocationPin, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './serv.css';

const Serv = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div className=' card-container d-flex flex-direction-row '>
            <div className='container'>

                <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIINOZ-pT4bdkPtyoLwobmHVd5kHyckSzgD_BrvH-lkQitZXA0jfJSHDv6_oN3z3GZiU&usqp=CAU" alt="" />

                <div className="top-right"> <span className='fs-4'>$</span>1,900 / per person</div>
                <div className="bottom-left-text">
                    <span><FontAwesomeIcon icon={faClock} /> 7d/6N &nbsp; </span>
                    <span> <FontAwesomeIcon icon={faPerson} /> people-5 &nbsp;</span>
                    <span> <FontAwesomeIcon icon={faLocationPin} /> Singapore</span>
                </div>
                <div className='mt-5'>
                    <h4>Sunset view of beautiful lakeside resident</h4>
                    <p>Enjoy the beauty of sunset view of beautiful lakeside resident with your dear one at a very low cost and a secure tour.</p>
                    {
                        user ? <Link to="/checkOut"><button >Book Now</button></Link> :
                            navigate('/login')
                    }

                </div>
            </div>

            <div className='container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIINOZ-pT4bdkPtyoLwobmHVd5kHyckSzgD_BrvH-lkQitZXA0jfJSHDv6_oN3z3GZiU&usqp=CAU" alt="" />

                <div className="top-right"> <span className='fs-4'>$</span>2,000 / per person</div>
                <div className="bottom-left-text">
                    <span><FontAwesomeIcon icon={faClock} /> 6d/5N &nbsp; </span>
                    <span> <FontAwesomeIcon icon={faPerson} /> people-6 &nbsp;</span>
                    <span> <FontAwesomeIcon icon={faLocationPin} /> Portugal</span>

                </div>

            </div>
            <div className='container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIINOZ-pT4bdkPtyoLwobmHVd5kHyckSzgD_BrvH-lkQitZXA0jfJSHDv6_oN3z3GZiU&usqp=CAU" alt="" />

                <div className="top-right"> <span className='fs-4'>$</span>1,230/ per person</div>
                <div className="bottom-left-text">
                    <span><FontAwesomeIcon icon={faClock} /> 5d/4N &nbsp; </span>
                    <span> <FontAwesomeIcon icon={faPerson} /> people-8 &nbsp;</span>
                    <span> <FontAwesomeIcon icon={faLocationPin} /> Canada</span>

                </div>

            </div>


        </div>
    );
};

export default Serv;