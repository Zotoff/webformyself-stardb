import React, {Component} from 'react';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details__card">
                <div className="person-details__image">
                    <img src="" alt=""/>
                </div>
                <div className="person-details__text">
                    <h2>Luke Skywalker</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Sex</span>
                            <span>Male</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}