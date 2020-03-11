import React, {Component} from 'react';
import Calender from './components/Calender'
import './App.css';

class App extends Component {
  state={
    today: new Date(),
    curMonth:'',
    curYear:'',
    selMonth:'',
    selYear:''
  }
  render(){

  return (
    <Calender />

  
  );
  }

}


export default App;
