import React, {Component} from 'react'
import './ShoppingCart.less'


export default class xxx extends Component {
  render() {
    return (
      <div id="shopping_cart">
        <div className="header">
          <span className="black">购物车</span>
          <span className="red">领劵</span>
        </div>
        <div className="content">
          <div className="flag">
            <span className="text"><span className="gray">●</span>30天无忧退货</span>
            <span className="text"><span className="gray">●</span>48小时快速退款</span>
            <span className="text"><span className="gray">●</span>满88元免邮费</span>
          </div>
          <div className="btn_container">
            <div className="img_container">去添加点什么吧</div>
            <div className="login_btn">登录</div>
          </div>
        </div>
      </div>
    )
  }
}
