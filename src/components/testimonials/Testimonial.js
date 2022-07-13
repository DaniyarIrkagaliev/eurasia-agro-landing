import React from 'react';
import "./testimonial.scss"

const Testimonial = (props) => {
    return (
        <div id='testimonials'>
            <div className="testimonial-box">
            <div className="container">
                    <h2>
                        Что говорят о нас наши партнеры:
                    </h2>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-6'>
                                <div className='testimonial'>
                                    <div className='testimonial-image'>
                                        {' '}
                                        <img src={d.img} alt='' />{' '}
                                    </div>
                                    <div className='testimonial-content'>
                                        <p>{d.text}</p>
                                        <div className='testimonial-author'> - {d.name} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div></div>
        </div>
    );
};

export default Testimonial;