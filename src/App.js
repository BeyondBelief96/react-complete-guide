import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 29},
      {id: '3', name: 'Ryan', age: 30}
    ],

    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;
    let btnClass = [styles.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index, id) => {
            return <Person
                    key={person.id} 
                    name={person.name}
                    age={person.age}
                    click={this.deletePersonHandler.bind(this, index)}
                    nameChanged={(event) => this.nameChangedHandler(event, person.id )} />
          })}    
        </div>  
      );

      btnClass.push(styles.Red);
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(styles.Red);
    }
    if(this.state.persons.length <=1) {
      assignedClasses.push(styles.Bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler.bind(this, 'James')}>
          Toggle Persons
        </button>
        {persons}
      </div> 
    );
  }
}

export default App;
