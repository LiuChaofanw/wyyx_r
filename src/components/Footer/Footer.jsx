import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './Footer.less'


class Footer extends Component {
  routeGo = (url) => {
    this.props.history.replace(url)
  }
  render() {
    return (
      <div id="footer">
         {/*className="{on: isCurrent('/home')}"*/}
        <section className={`home ${this.props.location.pathname === '/home'?'on':'null'}`} onClick={() => {this.routeGo('/home')}}>
          <i className="iconfont icon-home"> </i>
          <p>首页</p>
        </section>
          <section className={`knowledge ${this.props.location.pathname === '/knowledge'?'on':'null'}`} onClick={() => {this.routeGo('/knowledge')}}>
          <i className="iconfont icon-fangkuang"> </i>
          <p>识物</p>
        </section>
        <section className={`classify ${this.props.location.pathname === '/list'?'on':'null'}`} onClick={() => {this.routeGo('/list')}}>
          <i className="iconfont icon-iconset0499"> </i>
        <p>分类</p></section>
        <section className={`shoppingCart ${this.props.location.pathname === '/shoppingCart'?'on':'null'}`} onClick={() => {this.routeGo('/shoppingCart')}}>
          <i className="iconfont icon-gouwuche"> </i>
        <p>购物车</p>
        </section>
        <section className={`profile ${this.props.location.pathname === '/profile'?'on':'null'}`} onClick={() => {this.routeGo('/profile')}}>
          <i className="iconfont icon-geren11"> </i>
          <p>个人</p>
        </section>
  </div>
    )
  }
}
export default withRouter(Footer)