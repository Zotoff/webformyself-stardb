import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {

    // New Instance of SWAPIService
    swapiService = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then()
            .then((peopleList)=>{
                this.setState({
                    peopleList
                });
            })
            .catch();
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li 
                key={id} 
                className="list-group-item table-secondary"
                onClick={()=>this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        });
    };

    render() {

        const {peopleList} = this.state;

        if(!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}