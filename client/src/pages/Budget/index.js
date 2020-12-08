import React, { Component } from 'react';
import Navbar from '../../components/ProfileNav';
import Budget from '../../components/Budget';
import { BudgetProvider } from '../../store';

class App extends Component {
  render() {
    return (
      <BudgetProvider>
        <div className="App">
        <Navbar />
        <div className="container my-5">
            <Budget />
        </div>
        </div>
      </BudgetProvider>
    );
  }
}

export default App;

