import React, { Component } from 'react';
import './App.css';
import InstructorApp from './components/InstructorApp';
import ListCourseComponent from './components/ListCourseComponent'; 

class App extends Component {
  render() {
    return (
      <div className='container'>
        <InstructorApp />
        <ListCourseComponent />
      </div>
    );
  }
}

export default App;
