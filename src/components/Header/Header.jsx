import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import wyyx from './imgs/wyyx.png'
import './Header.less'


class Header extends Component {
  go = (url) => {
    this.props.history.push(url)
  }
  render() {
    return (
      <div className="header">
        <i className="iconfont icon-home" onClick={() => this.go('/home')}/>
        <img src={wyyx} alt=''/>
        <i className="iconfont icon-fangdajing" onClick={() => this.go('/search')}/>
        <i className="iconfont icon-gouwuche1" onClick={() => this.go('/shoppingCart')}/>
      </div>
    )
  }
}

export default withRouter(Header)
