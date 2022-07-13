import React from 'react';
import "./footer.scss"

const Footer = (props) => {
    return (
        <div>
            <div id='contacts'>
                <div className="footer-bg">
                    <div className='container '>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='section-title'>
                                    <h2>Евразия Агро</h2>
                                    <p>
                                        Мы работаем для вас!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-md-offset-1 contact-info'>
                            <div className='contact-item'>
                                <h3>Контактная информация</h3>
                                <p>
                <span>
                  <i className='fa fa-map-marker'/> Адрес
                </span>
                                    {props.data ? props.data.address : 'loading'}
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                <span>
                  <i className='fa fa-phone'/> Телефон
                </span>{' '}
                                    {props.data ? props.data.phone : 'loading'}
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                <span>
                  <i className='fa fa-envelope-o'/> Email
                </span>{' '}
                                    {props.data ? props.data.email : 'loading'}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div id='footer' className="dev-contact">
                    <div className='container text-center'>
                        <p >
                            &copy; 2022 Daniyar Irkagaliev. Сontact via {' '}
                            <a href='https://t.me/BRGD_Kazakh' rel='nofollow'>
                                Telegram
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;