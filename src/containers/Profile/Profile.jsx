import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import './Profile.less'

import img from './imgs/profile.png'
import Header from '../../components/Header/Header'


export default class Profile extends Component {

  login = (isPhone) => {
    this.props.history.push('/login')
    PubSub.publish('loginWay',isPhone)
  }
  render() {
    return (
      <div style={{height: '100%'}}>
        <Header/>
        <div id="profile">
          <div className="logo">
            <img src={img} alt=''/>
          </div>
          <div className="phone" onClick={() => this.login(true)}>
            <i className="iconfont icon-shouji3"/>
            <span>手机号码登录</span>
          </div>
          <div className="phone mail" onClick={() => this.login(false)}>
            <i className="iconfont icon-xinxi"/>
            <span>&nbsp;邮箱登录</span>
          </div>
          <div className="login_fast ">手机号快捷注册<span>></span></div>
          <div className="login_alse">
          <span className="wx">
            <i className="iconfont icon-weixin"/>
            <span>微信</span>
          </span>
            <span className="qq">
            <i className="iconfont icon-qq"/>
            <span>QQ</span>
          </span>
            <span className="wb">
            <i className="iconfont icon-weibo"/>
            <span>微博</span>
          </span>
          </div>
        </div>
      </div>

    )
  }
}
