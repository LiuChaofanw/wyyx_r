import React, {Component} from 'react'

import './Search.less'


export default class Search extends Component {
  render() {
    return (
      <div id="search">
        <div className="wrapper">
          <div className="input">
            <i className="iconfont icon-fangdajing"/>
            <input placeholder="50元以内超高性价比好物"/>
          </div>
          <span>取消</span>
          <div className="hot_search">
            <div>热门搜索</div>
            <span className="red">鞋包热销榜</span>
            <span className="red">暑期美食满99减15</span>
            <span className="red">床垫</span>
            <span>餐厨超值88选4</span>
            <span className="red">指定服装买2免1</span>
            <span>电器</span>
            <span>收纳</span>
            <span>内裤</span>
            <span>毛巾</span>
          </div>
        </div>
      </div>
    )
  }
}
