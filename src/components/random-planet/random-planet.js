import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

    // Initializing the API class
    swapiService = new SwapiService();

    //Setting up the state
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    // Modify the prototype and call the function
    constructor(){
        super();
        this.updatePlanet();
    }

    updatePlanet(){
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
        .getPlanet(id)
        .then((planet)=>{
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }

    render(){

        // Destructuring the state

        const {id, name, population, rotationPeriod, diameter} = this.state;

        return(
            <section className="random-planet">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron random-planet__block">
                            <div className="random-planet__block__img">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
                            </div>
                            <div className="random-planet__block__content">
                                <h4 className="display-3">{name}</h4>
                                <p className="lead"><span className="text--bold">Population:</span> {population}</p>
                                <p className="lead"><span className="text--bold">Rotation Period:</span> {rotationPeriod}</p>
                                <p className="lead"><span className="text--bold">Diameter:</span> {diameter}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        )
    }
}