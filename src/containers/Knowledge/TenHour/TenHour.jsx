import React, {Component} from 'react'
import Swiper from 'swiper'

import './TenHour.less'



export default class TenHour extends Component {
  componentDidUpdate () {
    if(this.sw){
      this.sw.destroy()
    }
    this.sw = new Swiper('.swiper-container3',{
      loop: false,
      slidesPerView: 'auto',
      freeMode: true
    })
  }
  render() {
    return (
      <div className="ten_hour">
        <div className="ten_header">
          十点一刻
        </div>
        <div className="swiper">
          <section className="swiper-container3">
            <div className="swiper-wrapper">
              {
                this.props.tenfifteens.map((item, index) => {
                  if(!item){
                    item = {}
                  }
                  return (
                    <div className="swiper-slide" key={index}>
                      <div className="self">
                        <div className="title">— 今日话题 —</div>
                        <div className="about">{item.title}</div>
                        <div className="chat">{item.title}</div>
                        <div className="person">
                        {
                          item.participantAvatar.map((ite, index) => {
                            if(!ite){
                              ite = {}
                            }
                          return (

                          <img src={ite} alt='' key={index}/>
                          )
                          })
                        }
                          <span>{item.participantNum}人参与话题</span>
                        </div>
                        </div>
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
