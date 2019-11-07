import React, {Component} from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemList from './components/item-list';
import PersonDetails from './components/person-details';
import SwapiService from './services/swapi-service';
import './App.css';

export default class App extends Component {

  swapiService = new SwapiService();
  
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }

  toggleRandomPlanet = () => {
    if(this.state.showRandomPlanet) {
      this.setState({
        showRandomPlanet: false
      })
    } else {
      this.setState({
        showRandomPlanet: true
      })
    }
    
  }

  onPersonSelected = (id) => {
     this.setState({
       selectedPerson: id
     })
  }

  renderItem = (item) => {
    return item.name;
  }

  render(){

    const random_planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="App">
      <Header />
      {random_planet}

      <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
        Toggle Random Planet
      </button>

      <section className="person-details">
        <div className="container">
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllPeople} 
              renderItem={(item) => `${item.name} (${item.gender})`}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
        </div>
        </div>
      </section>

      <section className="person-details">
        <div className="container">
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPlanets} renderItem={(item)=>`${item.name}`}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
        </div>
        </div>
      </section>
    </div>
    )
  }
}
