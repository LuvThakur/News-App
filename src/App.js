import './App.css';
import React, { Component, useState } from 'react';
import NavBar from './Components/NavBar';
import { News } from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom';

import Slider from './Components/Slider';
import ContactForm from './Components/ContactForm';
import LinearProgressWithLabel from '@mui/material/LinearProgress';


export default class App extends Component {

  constructor(props) {
    super(props)
    {
      this.state = {
        progress: 0,
        topBarVisible: true
      }
    }
  }

  setProgress = (prog) => {
    this.setState({ progress: prog })
  }
  

  render() {
    return (
      <div>

        <Router>
          {/* {this.state.toggleTopBar && <LinearProgressWithLabel value={this.state.progress} variant='determinate' color='warning' />} */}
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Slider setProgress={this.setProgress} toggleTopBar={this.toggleTopBar} />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={6} key="general" countryName='in' category='general' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={6} key="business" countryName='in' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={6} key="entertainment" countryName='in' category='entertainment' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={6} key="sports" countryName='in' category='sports' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={6} key="health" countryName='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={6} key="science" countryName='in' category='science' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={6} key="technology" countryName='in' category='technology' />} />
            <Route exact path='/ContactForm' element={<ContactForm setProgress={this.setProgress} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
