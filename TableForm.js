import React, { Component } from 'react';

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
     // inputValue: '', // Add inputValue to the state to track the input value.
    };
  }

  saveInput = (e) => {
    this.setState({ inputValue: e.target.value }); // Update inputValue state with the input value.
  };

  addNewItem = () => {
    this.setState({
      fruits: [...this.state.fruits, this.state.inputValue], // Add inputValue to the fruits array.
      //inputValue//: '', // Clear the input value after adding it to the fruits array.
  
    });
    console.log(this.state.fruits);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.saveInput} />
        <button type="button" onClick={this.addNewItem}>
          Add
        </button>
        <ul>
          {this.state.fruits.length > 0 &&
            this.state.fruits.map((ele, index) => {
              return <li key={index}>{ele}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default TableForm;