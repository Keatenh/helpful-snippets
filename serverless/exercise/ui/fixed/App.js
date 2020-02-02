import React, { Component } from 'react';
import TodoList from './TodoList'
import TodoItems from './TodoItems'
// import logo from './logo.svg';
import './App.css';

// const env = ENV.toLowerCase()
class App extends Component {
  inputElement = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      stuff: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  
  addItem = e => {
    e.preventDefault() //prevent reloading from submitting form
    const newItem = this.state.currentItem
    console.log("Start POST...")
    fetch('/api/todos', {
      method: 'post',
      body: JSON.stringify({ "text": newItem.text})
    })
    .then(response => {
      if(response.status === 200) console.log(response.json());
      else console.log("Error Posting data w/ response: "+response.status);
    });
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.stuff, newItem]
      this.setState({
        stuff: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  
  componentDidMount() {
    console.log("start GET...")
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ stuff: data }))
      .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
      // .then(data => console.log(data));
    // console.log(this.state)
    // .then(res => res.text())          // convert to plain text
    // .then(text => console.log(text))  // then log it out
  }
  render() {
    // const { stuff } = this.state
    // console.log("in render...")
    // console.log(stuff)
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            What do I need to do?
          </p>
        <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          />
        </header>
        <TodoItems entries={this.state.stuff}/>
      </div>
    );
  }
}

export default App;
