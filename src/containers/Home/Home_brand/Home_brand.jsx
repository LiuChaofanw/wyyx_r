import React, {Component} from 'react'


import './Home_brand.less'


export default class Home_brand extends Component {
  render() {
    return (
      <div className="home_brand">
        <section className="brand_header">
          <span>品牌制造商直供</span>
          <i className="iconfont icon-iconset0424"> </i>
        </section>
        <ul className="brand_list" >
          {
            this.props.tagLists.map((item, index) => {
              if(index>=4){
                return ''
              }
              return (
                <li className="brand_item" key={index}>
                  <img src={item.picUrl} alt=''/>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.floorPrice}元起</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
