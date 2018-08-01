import React, {Component} from 'react'
import BScroll from 'better-scroll'

import './GoodLists.less'



export default class GoodLists extends Component {
  state = {
    activeIndex: 0
  }
  componentDidUpdate () {
    if(this.bs){
      this.bs.destroy()
    }
    this.bs = new BScroll('.nav_wrapper')

    if(this.bss){
      this.bss.destroy()
    }
    setTimeout(() => {
      this.bss = new BScroll('.bs_goods')
    },100)
  }
  switchActive = (index) => {
    this.setState({
      activeIndex:index
    })
  }
  render() {
    return (
      <div className="goodLists">
        <div className="goods_nav">
          <div className="nav_wrapper">
            <ul>
              {
                this.props.categorys.map((item, index) => {
                  return (
                    /*nav_item active_item*/
                    <li className={`nav_item ${this.state.activeIndex === index ? 'active_item' : ''}`} onClick={() => this.switchActive(index)} key={index}>{item.name}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="bs_goods">
          <div>
            {
              this.props.categorys.map((item, index) => {
                if(this.state.activeIndex === index){
                  return (
                    <div className="goods" key={index}>
                      <div className="title">
                        <div className="img_container">
                          <img src={item.bannerUrl} alt=''/>
                        </div>
                        <div className="title_container">
                          <span className="gray">—</span>
                          <span>{item.name}分类</span>
                          <span className="gray">—</span>
                        </div>
                      </div>
                      <div className="good_list">
                        {
                          item.subCateList.map((item, index) => {
                            return (
                              <div className="good" key={index}>
                                <div className="img_container">
                                  <img src={item.bannerUrl?item.bannerUrl:item.wapBannerUrl} alt=''/>
                                </div>
                                <div className="text_container">{item.name}</div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                }
              })
            }

          </div>
        </div>
      </div>
    )
  }
}
