import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <div>

            <footer className='text-center mt-5 bg-dark text-white py-3 '>
                <p><small>copyright @ {today.getFullYear()}  </small></p>
            </footer>
        </div>
    );
};

export default Footer;