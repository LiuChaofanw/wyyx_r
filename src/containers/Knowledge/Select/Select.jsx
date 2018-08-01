import React, {Component} from 'react'



import './Select.less'


export default class Select extends Component {
  render() {
    let recommend = this.props.recommend
    if(!recommend){
      recommend = {}
    }
    let recommendBanner = recommend.recommendBanner || recommend.zhenOne
      if(!recommendBanner){
        recommendBanner = {}
      }
    let recommends = recommend.recommends || recommend.zhenpins
      if(!recommends){
        recommends = []
      }


/*      const recommendBanner = this.props.recommend === {} ? {}:this.props.recommend.recommendBanner
      const recommends = this.props.recommend ==={} ? this.props.recommend.recommends : []*/
    return (
      <div className="select">
        <div className="select_item">
          <div className="foryou">
            <div className="text">为你推荐</div>
            <div className="img_container">
              <div className="yxtj">严选推荐</div>
              <img src={recommendBanner.picUrl} alt=''/>
              <div className="name">
                <div className="left">{recommendBanner.title}</div>
                <div className="right">{recommendBanner.priceInfo}元起</div>
              </div>
              <div className="detail">{recommendBanner.subtitle}</div>
            </div>
          </div>
          {
            recommends.map((item, index) => {
              return (
                <div className="select_detail" key={index}>
                  <div className="left">
                    <div className="name">
                      <img src={item.avatar} alt=''/>
                      <span>{item.nickname}</span>
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="detail">{item.subtitle}</div>
                  </div>
                  <div className="right">
                    <img src={item.picUrl} alt=''/>
                    <span className="img_logo">{item.nickname}的好货推荐</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
