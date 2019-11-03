import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props; // Taking the person id from props
        if(!personId) {
            return; // If we have the person Id - return nothing
        }

        this.swapiService
        .getPerson(personId)
        .then((person) => {
           this.setState({person}) 
        })
    }

    render() {

        if(!this.state.person) {
            return <span>Please, select a person from a list</span>
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person; // Gathering the info from person state

        return (
            <div className="person-details__card">
                <div className="person-details__image">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="{name}"/>
                </div>
                <div className="person-details__text">
                    <h2>{name}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span><br />
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span><br />
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">EyeColor</span><br />
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}