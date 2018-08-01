import React, {Component} from 'react'

import './Look.less'




export default class Look extends Component {
  render() {
    return (
      <div className="look">
        <div className="look_header">严选LOOK</div>
        <div className="img_container">
          <img src={this.props.yxLook.picUrl} alt=''/>
        </div>
        <div className="person">
          <div className="avatar">
            <img src={this.props.yxLook.avatar} alt=''/>
            <span>{this.props.yxLook.nickname}</span>
          </div>
          <div className="detail">{this.props.yxLook.content}</div>
        </div>
      </div>
    )
  }
}
