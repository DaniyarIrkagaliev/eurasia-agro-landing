import React from 'react';
import "./header.scss"

const Header = () => {
    return (
        <div className='head' id='header'>
            <div className="overlay">
                <div className="container">
                    <div className='row'>
                        <div className='intro-text'>
                            <h2> Евразия Агро</h2>
                            <p>Мы работаем для вас</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;