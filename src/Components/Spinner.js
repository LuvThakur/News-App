import React, { Component } from 'react'
import loader1 from './loader1.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader1} alt="loader"  />
      </div>
    )
  }
}

export default Spinner