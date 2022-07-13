import React from 'react';
import "./about.scss"

const About = (props) => {
    return (
        <div className='about' id="about">

            <div className="row">
                <div className='container'>
                    <div className=" col-xs-12 col-md-6">
                        <img src="images/about/about.jpg" className="img-about" alt="about"/>
                    </div>
                    <div className=' col-xs-12 col-md-6 section-title'>
                        <h2>О компании:</h2>
                        <p>
                            {props.data ? props.data.paragraph : "loading..."}
                        </p>
                        <div className="about-text">
                            <h3>Почему выбирают нас?</h3>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    {props.data
                                        ? props.data.Why.map((d, i) => (
                                            <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                        : "loading"}
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                                {props.data
                                    ? props.data.Why.map((d, i) => (
                                        <li key={`${d}-${i}`}>{d}</li>
                                    ))
                                    : "loading"}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;