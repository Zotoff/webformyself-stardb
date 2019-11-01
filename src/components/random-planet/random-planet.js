import React from 'react';
import './random-planet.css';

const RandomPlanet = () => {
    return (
        <section className="random-planet">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron random-planet__block">
                            <div className="random-planet__block__img">
                                <img src="./images/nibiru.jpg" alt=""/>
                            </div>
                            <div className="random-planet__block__content">
                                <h1 className="display-3">Nibiru</h1>
                                <p className="lead">This is a simple planet</p>
                                <p className="lead">
                                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default RandomPlanet;