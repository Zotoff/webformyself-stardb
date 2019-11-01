import React from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemList from './components/item-list';
import PersonDetails from './components/person-details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomPlanet />
      <section className="person-details">
        <div className="container">
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList />
            </div>
            <div className="col-md-6">
              <PersonDetails />
            </div>
        </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
