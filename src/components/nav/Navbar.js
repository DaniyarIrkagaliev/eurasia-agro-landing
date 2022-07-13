import React from 'react';
import "./nav.scss"
// import "./navv.css"
//todo почекать и изменить стили для отображения активного компонента страницы
const Navbar = () => {
    return (
        <div className='navbar navbar1 navbar-default navbar-fixed-top'>
            <div className="container ">
                <div className='navbar-header'>
                    <a className='navbar-brand page-scroll' href='#page-top'>
                        Евразия Агро
                    </a>
                </div>
                    <div className='collapse navbar-collapse' >
                        <div className="wrapper">
                            <ul className='navbar-nav my-nav navbar-right'>
                                <li>
                                    <a href="#gallery" className='page-scroll'>Наши услуги</a>
                                </li>
                                <li>

                                    <a href="#about" className='page-scroll'>О компании</a>
                                </li>
                                <li>

                                    <a href="#team" className='page-scroll'>Наша компанда</a>
                                </li>
                                <li>

                                    <a href="#contacts" className='page-scroll'>Контакты</a>
                                </li>
                            </ul>
                        </div>

                </div>
            </div>
        </div>


    );
};
export default Navbar;