import React, {Component} from 'react'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



import './HomeHeader.less'
import {getHeadCateList, switchHeader} from '../../redux/actions'


class HomeHeader extends Component {
  state = {
    currentIndex: -1,
    isFirst: false
    /*isClose: false*/
  }
  componentDidMount () {
    this.props.getHeadCateList()
    new BScroll('.search_nav',{
      scrollX: true
    })
  }
  selectedGoods = (url, index) => {
    this.props.history.replace(url)
    let currentIndex = index ? index : (index === 0 ? 0 : -1)
    this.setState({
      currentIndex
    })
  }
  closeSelf = () => {
    this.props.switchHeader()
    /*PubSub.publish('changMarginTop')*/
  }
  render() {
    return (
        <header className="home_header">
            {/*添加close class名可以点击关闭*/}
          <div className={`logo ${this.props.isClose ? 'close' : ''}`}>
              {/* onClick="closeSelf"*/}
            <i className="logo_x" onClick={this.closeSelf}/>
            <div className="logo_yanxuan">
              <div className="logo_img"> </div>
              <div className="logo_text">
                <p>网易严选</p>
                <p>立即领取APP新人专享1000元礼包</p>
              </div>
            </div>
            <div className="logo_open_app">
              <div className="btn">打开APP</div>
            </div>
          </div>
          <div className="search">
            <div className="search_input">
              <div className="wyyx"> </div>
              <div>
                {/* onClick="$router.push()"*/}
                <div className="input">
                  <i className="iconfont icon-fangdajing"> </i>
                  <span>搜索商品，共10725款好物</span>
                </div>
              </div>
            </div>
            <nav className="search_nav">
              <div className="nav_inner">
                {/* onClick="selectedGoods('/home')"*/}
                <div className={`nav_item ${this.props.location.pathname === '/home' && this.state.currentIndex === -1? 'border_bottom':''}`} onClick={() => this.selectedGoods('/home')}>推荐</div>
                {/* onClick="selectedGoods('/goods',index)"*/}
                {
                  this.props.headCates.map((item, index) => {
                    return (<div className={`nav_item ${this.state.currentIndex === index ? 'border_bottom':''}`}
                                 key={index} onClick={() => this.selectedGoods(`/goods/${item.id}`,index)}>{item.name}</div>)
                  })
                }
              </div>
            </nav>
          </div>
        </header>
    )
  }
}

export default connect(
  state => ({headCates: state.headCates, isClose: state.isClose}),
  {getHeadCateList, switchHeader}
)(withRouter(HomeHeader))