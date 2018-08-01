import React, {Component} from 'react'

import './Home_new.less'


export default class Home_new extends Component {
  render() {
    return (
      <div className="home_new">
        <span>新品首发</span>
        <div>
          查看全部
          <i className="iconfont icon-xiangyou"> </i>
        </div>
      </div>
    )
  }
}
