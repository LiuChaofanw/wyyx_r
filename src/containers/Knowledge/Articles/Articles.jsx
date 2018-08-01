import React, {Component} from 'react'
import Swiper from 'swiper'

import './Articles.less'



export default class Articles extends Component {
  componentDidUpdate () {
      if(this.sw){
        this.sw.destroy()
      }
      this.sw = new Swiper('.swiper-container2',{
        loop: false,
        slidesPerView: 'auto',
        freeMode: true
      })


  }
  render() {
    return (
      <div className="articles">
        <div className="swiper">
          <section className="swiper-container2">
            <div className="swiper-wrapper">
              {
                this.props.columns.map((item, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <img src={item.picUrl} alt=''/>
                      <p>{item.title}</p>
                      <div className="mask">{item.articleCount}</div>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>
      </div>
    )
  }
}
