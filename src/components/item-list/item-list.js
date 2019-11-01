import React, {Component} from 'react';
import './item-list.css';

export default class ItemList extends Component {
    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group__item">Luke Skywalker</li>
                <li className="list-group__item">Dart Wader</li>
                <li className="list-group__item">Mr. Yoda</li>
            </ul>
        )
    }
}