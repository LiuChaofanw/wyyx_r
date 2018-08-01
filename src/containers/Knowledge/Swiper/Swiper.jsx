import React, {Component} from 'react'
import Swiper from 'swiper'

import './Swiper.less'



export default class SwiperT extends Component {
  componentDidUpdate () {
    this.sw = new Swiper('.swiper-container',{
      loop: true,
      slidesPerView: 'auto',
    })
  }
  render() {
    return (
      <div className="swiper">
        <section className="swiper-container">
          <div className="swiper-wrapper">
            {
              this.props.banners.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img src={item.picUrl} alt=''/>
                    <div className="mask">
                      <p className="small">—严选推荐—</p>
                      <p className="name">{item.title}</p>
                      <p className="detail">{item.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}
