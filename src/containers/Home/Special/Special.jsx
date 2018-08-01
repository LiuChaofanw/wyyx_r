import React, {Component} from 'react'
import BScroll from 'better-scroll'


import './Special.less'


export default class Special extends Component {
  componentDidMount () {
    new BScroll('.special_container',{
      scrollX: true,
      eventPassthrough: 'vertical'
    })
  }
  render() {
    return (
      <div className="special">
        <section className="brand_header">
          <span>专题精选</span>
          <i className="iconfont icon-iconset0424"> </i>
        </section>
        <section className="special_container">
          <ul className="special_list">
            {
              this.props.topicLists.map((item, index) => {
                return (
                  <li className="special_item" key={index}>
                    <img src={item.itemPicUrl} alt=''/>
                    <div className="special_name">
                      <span className="lefe">{item.title}</span>
                      <span className="right">{item.priceInfo}元起</span>
                    </div>
                    <div className="special_detail">{item.subtitle}</div>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
    )
  }
}
