import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import './Login.less'

import img from './imgs/profile.png'
import Header from '../../components/Header/Header'


export default class Login extends Component {
  state = {
    isPhone: true,
    computedTime: 0
  }
  componentDidMount () {
    PubSub.subscribe('loginWay', (msg, isPhone) => {
      this.setState({
        isPhone
      })
    })

  }
  changeLoginWay = () => {
    let isPhone = !this.state.isPhone
    this.setState({
      isPhone
    })
  }
  getCode = () => {
    if(this.state.computedTime){
      return
    }
    let userPhone = this.refs.userPhone.value
    if(/^1\d{10}$/.test(userPhone)){
      let computedTime = 30
      const timer = setInterval(() => {
        computedTime--
        this.setState({
          computedTime
        })
        if(this.state.computedTime <= 0){
          clearInterval(timer)
        }
      },1000)

    }else {
      alert('您输入的手机号不正确')
    }
}
  submit = () => {
    let userPhone = this.refs.userPhone.value
    let code = this.refs.code.value
    if (this.state.isPhone){
      if(/^1\d{10}$/.test(userPhone) && /^\d{6}$/gi.test(code)) {
        alert('登录成功！')
      } else {
        alert('您输入的手机号或验证码不正确！')
      }
    }else {
      let userMail = this.refs.userMail.value
      let passerword = this.refs.passerword.value

      if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(userMail)){
        alert('您输入的邮箱有误！')
      }else if (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(userMail) && passerword){
        alert('登录成功！')
      }else {
        alert('您输入的邮箱或密码错误！')
      }
    }

  }
  render() {
    return (
      <div>
        <Header/>
        <div id="login">
          <div className="img_container">
            <img src={img} alt=''/>
          </div>
          {/*className="{off: isPhone}"  "login_mail off"*/}
          <div className={`login_mail ${this.state.isPhone ? 'off' : ''}`}>
            <div className="content">
              <div className="user">
                <input placeholder="邮箱账号" ref='userMail'/>
              </div>
              <div className="user">
                <input placeholder="密码" ref='passerword'/>
              </div>
              <div className="forget_password">
                <span className="register">注册账号</span>
                <span className="forget">忘记密码</span>
              </div>
            </div>
          </div>
          {/* className="{off: !isPhone}" login_phone*/}
          <div className={`login_phone ${this.state.isPhone ? '' : 'off'}`}>
            <div className="user">
              <input placeholder="请输入手机号" ref='userPhone'/>
            </div>
            <div className="user">
              <input placeholder="请输入短信验证码" ref='code'/>
               <span onClick={this.getCode}>{this.state.computedTime ? '已发送'+this.state.computedTime+'s':'获取验证码'}</span>
             {/* <span onClick={this.getCode}>获取验证码</span>*/}
            </div>
            <div className="forget_password">
              <span className="register">遇到问题？</span>
              <span className="forget">使用密码验证登陆</span>
            </div>
          </div>
          <div className="btns">
            <div className="login">
              <div className="phone" onClick={this.submit}>
                <span>登录</span>
              </div>
              <div className="phone mail" onClick={this.changeLoginWay}>
                <span>其他登录方式</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
