import React from 'react';
import {Image} from "./image";
import "./gallery.scss"

const Gallery = (props) => {
    return (
        <div id='gallery' className="text-center">

            <div className="portfolio">
            <div className='container'>

                    <div className='section-title'>
                        <h2>Мы предоставляем следующие услуги:</h2>
                    </div>
                    <div className='row'>
                        <div>
                            {props.data
                                ? props.data.map((d, i) => (
                                    <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>

                                        <Image title={d.title} image={d.image}/>
                                    </div>
                                ))
                                : 'Loading...'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;