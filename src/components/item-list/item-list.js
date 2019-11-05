import React, {Component} from 'react';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {

        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems(arr) {
        return arr.map((item) => {

            const {id} = item;

            const label = this.props.renderItem(item);
            //const name = item.name;
            //const props = this.props;

            return (
                <li 
                key={id} 
                className="list-group-item table-secondary"
                onClick={()=>this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {

        const {itemList} = this.state;

        if(!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}