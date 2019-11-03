import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    // Initializing the API class
    swapiService = new SwapiService();

    //Setting up the state
    state = {
        planet: {},
        loading: true,
        error: false
    }

    // Modify the prototype and call the function
    constructor(){
        super();
        this.updatePlanet();
    }

    // When planet loaded
    onPlanetLoaded = (planet) => {
        this.setState({
            planet, // Setting up the whole object into state,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };


    updatePlanet(){
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render(){

        // Spinner

        // Destructuring the state

        const { planet, loading, error} = this.state;

        // When we have no loading or no error
        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ?  <PlanetView planet={planet}/> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;

        return(
            <section className="random-planet">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron random-planet__block">
                            {errorMessage}
                            {spinner}
                            {content}                            
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <div className="random-planet__block__img">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
                            </div>
                            <div className="random-planet__block__content">
                                <h4 className="display-3">{name}</h4>
                                <p className="lead"><span className="text--bold">Population:</span> {population}</p>
                                <p className="lead"><span className="text--bold">Rotation Period:</span> {rotationPeriod}</p>
                                <p className="lead"><span className="text--bold">Diameter:</span> {diameter}</p>
                            </div>
        </React.Fragment>
    )
}