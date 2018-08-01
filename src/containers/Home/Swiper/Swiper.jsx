
import React, {Component} from 'react'
import Swiper from 'swiper'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'



import './Swiper.less'
import 'swiper/dist/css/swiper.min.css'




class SwiperC extends Component {
  static propTypes={
    focusLists: PropTypes.array.isRequired
  }
/*  componentDidMount () {
  }*/
  componentDidUpdate () {
    if(!this.swiperId){
        this.swiperId = new Swiper('.swiper-container',{
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
    }

  }
  render() {
    return (
        <div className="home_swiper">
          <section className="swiper-container">
            <div className="swiper-wrapper">
              {
                this.props.focusLists.map((item, index) => {
                  return(<div className="swiper-slide" key={index}>
                    <img src={item.picUrl} alt=''/>
                  </div>)
                })
              }
              {/*<div className="swiper-slide">
                <img src={junjie} alt=''/>
              </div>*/}
            </div>
            <div className="swiper-pagination"> </div>
          </section>
          <section className="carousel_list">
            <span className="icon_container">
              <i className="iconfont icon-duigou"> </i>
              <span>网易自营品牌</span>
            </span>
            <span className="icon_container">
              <i className="iconfont icon-duigou"> </i>
              <span>30天无忧退货</span>
            </span>
            <span className="icon_container">
              <i className="iconfont icon-duigou"> </i>
              <span>48小时快速退款</span>
            </span>
          </section>
        </div>
    )
  }
}

export default connect(

)(SwiperC)


