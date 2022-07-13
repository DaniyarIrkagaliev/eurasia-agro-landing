import React from 'react';
import "./team.scss"
const Team = (props) => {
    return (
        <div id="team" className='team '>
            <div className="container">

            <div>
                <h2>Это наша команда</h2>
                <p> {props.text}</p>
            </div>
            <div className="row">
                {props.data
                    ? props.data.map((d, i) => (
                        <div key={`${d.name}-${i}`} className='col-md-4 col-sm-4 team-item'>
                            <div className="thumbnail">

                                <img src={d.img} alt={d.name} className='team-img'/>
                                <div className="caption">
                                    <h4>{d.name}</h4>
                                    <p>{d.job}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    : 'loading'}
            </div>
        </div>
        </div>
    );
};

export default Team;