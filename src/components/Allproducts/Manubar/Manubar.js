import React from 'react';
import './Manubar.css'
const Manubar = (props) => {
    return (
        <div className='menu-background'>
            <div className="d-flex justify-content-between container align-items-center menu-styles">
                <div>
                    <h2>Fake Store</h2>
                </div>
                <div>
                    <ul className='menu-item'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Cart <sup>{props.count}</sup> </li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Manubar;