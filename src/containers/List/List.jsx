import React, {Component} from 'react'
import {connect} from 'react-redux'

import './List.less'

import Header from './Header/Header'
import GoodLists from './GoodLists/GoodLists'
import {getCategorys} from '../../redux/actions'


class Classify extends Component {
  componentDidMount () {
    this.props.getCategorys()
  }
  render() {
    return (
      <div id='classify'>
        <Header/>
        <GoodLists categorys={this.props.categorys}/>
      </div>
    )
  }
}

export default connect(
  state => ({categorys:state.categorys}),
  {getCategorys}
)(Classify)
