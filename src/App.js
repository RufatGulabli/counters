import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar"
import Counters from './components/counters';

class App extends Component {
  
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 1 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
    ]
  };
  

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={ this.state.counters.filter( item => item.value > 0).length }/>
        <Counters 
          onDelete={this.handleDelete} 
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}  
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }


  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map( item => {
        item.value = 0;
        return item;
    });
    this.setState({ counters });
  }

  handleIncrement = (counter) =>{
    const counters = this.state.counters.map( item => {
      if(item.id === counter.id){
        item.value++;
        return item;
      }
      return item;
    });
    this.setState({counters});
  }




}

export default App;
