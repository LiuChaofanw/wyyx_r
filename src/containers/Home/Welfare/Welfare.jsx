import React, {Component} from 'react'


import welfare from '../imgs/welfare.jpg'
import './Welfare.less'


export default class Welfare extends Component {
  render() {
    return (
      <div className="welfare">
        <img src={welfare} alt=''/>
      </div>
    )
  }
}
