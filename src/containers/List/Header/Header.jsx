import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './Header.less'


class Header extends Component {

  render() {
    return (
      <div className="class_header">
        <a>
          <div className="search" onClick={() => this.props.history.push('/search')}>
            <i className="iconfont icon-fangdajing"/>
            <span>搜索商品，共10856款好物</span>
          </div>
        </a>
      </div>
    )
  }
}

export default withRouter(Header)