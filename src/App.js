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

var x;
export default class App extends Component {

  apikey = process.env.REACT_APP_NEWSAPP_API;


  constructor(props) {
    super(props)
    {
      this.state = {
        progress: 0,
        time: 0,
        topBarVisible: false
      }
    }
  }

  setProgress = (prog) => {
    this.setState({ progress: prog })
  }

  seTime = (time_taken) => {
    x = time_taken;
  }

  setoogle = (togle) => {


    this.setState({ topBarVisible: togle })
    setTimeout(() => {
      this.setState({ topBarVisible: false })
    }, x > 1000 ? x : 900);

  }


  render() {
    return (
      <div>

        <Router>

          {this.state.topBarVisible && <LinearProgressWithLabel value={this.state.progress} variant='determinate' color='warning' />}
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Slider setProgress={this.setProgress} />} />
            <Route exact path="/general" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="general" countryName='in' category='general' apikey={this.apikey} />} />
            <Route exact path="/business" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="business" countryName='in' category='business' apikey={this.apikey} />} />
            <Route exact path="/entertainment" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="entertainment" countryName='in' category='entertainment' apikey={this.apikey} />} />
            <Route exact path="/sports" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="sports" countryName='in' category='sports' apikey={this.apikey} />} />
            <Route exact path="/health" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="health" countryName='in' category='health' apikey={this.apikey} />} />
            <Route exact path="/science" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="science" countryName='in' category='science' apikey={this.apikey} />} />
            <Route exact path="/technology" element={<News seTime={this.seTime} setoogle={this.setoogle} setProgress={this.setProgress} pageSize={6} key="technology" countryName='in' category='technology' apikey={this.apikey} />} />
            <Route exact path='/ContactForm' element={<ContactForm setProgress={this.setProgress} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
