import React, {Component} from 'react'
import {connect} from 'react-redux'



class xxx extends Compontent {
  render () {
    return (
      <div>
        <div id="home" style="{marginTop: marginTop}">
          <div className="home_swiper">
          <section className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" v-for="(focus, index) in focusLists" key="index">
                <img src="../../assets/imgs/loading.gif"/>
              </div>
            </div>
            <div className="swiper-pagination">
            </div>
          </section>
    <section className="carousel_list">
      <span className="icon_container">
        <i className="iconfont icon-duigou"></i>
        <span>网易自营品牌</span>
      </span>
      <span className="icon_container">
        <i className="iconfont icon-duigou"></i>
        <span>30天无忧退货</span>
      </span>
      <span className="icon_container">
        <i className="iconfont icon-duigou"></i>
        <span>48小时快速退款</span>
      </span>
    </section>
  </div>
          <Blank/>
    <div className="home_brand">
      <section className="brand_header">
        <span>品牌制造商直供</span>
        <i className="iconfont icon-iconset0424"></i>
      </section>
      <ul className="brand_list" >
        <li className="brand_item" v-for="(tagList, index) in tagLists" :key="index" v-if="index<4">
        <img src="../../assets/imgs/loading.gif"/>
        <div>
          <p>{{tagList.name}}</p>
          <p>{{tagList.floorPrice}}元起</p>
        </div>
      </li>
    </ul>
  </div>
        <Blank/>
        <div className="home_new">
      <span>新品首发</span>
      <div>
        查看全部
        <i className="iconfont icon-xiangyou"></i>
      </div>
    </div>
        <div className="new_goods_list">
          <ul className="new_goods">
            <li className="new_good" v-for="(newItem, index) in newItemLists" key="index">
              <a href="javascript:;">
                <div>
                  <img src="../../assets/imgs/loading.gif"/>
                </div>
                  <div className="new_goods_name">name</div>
                  <div className="new_goods_detail">simpleDesc</div>
                  <div className="new_goods_price">￥retailPrice</div>
              </a>
            </li>
            <li className="last_good new_good">
              <a>
                查看全部
              </a>
            </li>
        </ul>
        </div>
        <div className="home_recommend">
          <span>人气推荐 · 好物精选</span>
          <div>
            查看全部
            <i className="iconfont icon-xiangyou">

            </i>
          </div>
        </div>
        <div className="new_goods_list new_goods_list2">
          <ul className="new_goods">
            <li className="new_good" v-for="(popularItem, index) in popularItemLists" key="index">
              <a href="javascript:;">
              <div>
                <img src="../../assets/imgs/loading.gif"/>
              </div>
              <div className="new_goods_name">name</div>
              <div className="new_goods_detail">simpleDesc</div>
              <div className="new_goods_price">￥retailPrice</div>
            </a>
            </li>
            <li className="last_good new_good">
            <a>
              查看全部
            </a>
          </li>
          </ul>
      </div>
        <Blank/>
        <div className="time_goods">
          <div className="time">
            <p>严 选 限 时 购</p>
              <div>
                <span className="hour" v-if="time._data">0</span> :
                <span className="min" v-if="time._data">0</span> :
                <span className="second" v-if="time._data">0</span>
              </div>
            <p className="small">下一场 12:00 开始</p>
          </div>
          <div className="time_good">
            <div>
              <img src="../../assets/imgs/loading.gif"/>
            </div>
            <div className="orange">
              <p>￥{{flashSaleIndexVO.activityPrice}}</p>
              <p className="line_through">￥{{flashSaleIndexVO.originPrice}}</p>
            </div>
        </div>
        </div>
        <Blank/>
        <div className="welfare">
          <img src="../../assets/imgs/loading.gif"/>
        </div>
        <Blank/>
        <div className="special">
          <section className="brand_header">
            <span>专题精选</span>
            <i className="iconfont icon-iconset0424">
            </i>
          </section>
          <section className="special_container">
            <ul className="special_list">
              <li className="special_item" v-for="(topic,index) in topicLists" key="index">
                <img src="../../assets/imgs/loading.gif"/>
                <div className="special_name">
                  <span className="lefe">title</span>
                  <span className="right">9.9元起</span>
                </div>
                <div className="special_detail">subtitle</div>
              </li>
            </ul>
          </section>
        </div>
        <Blank/>
        <div className="select_goods"  v-for="(cateList, index) in cateLists" key="index">
          <section className="select_header">
          <span>name好物</span>
        </section>
        <section className="select_list">
          <ul className="select_ul">
            <li className="select_item" v-for="(item,index) in cateList.itemList" key="index">
              <img src="../../assets/imgs/loading.gif"/>
              <div className="select_detail">simpleDesc</div>
              <div className="select_name">name</div>
              <div className="select_price">￥99</div>
            </li>
          </ul>
        </section>
        </div>
        <div className="target">
          <a onClick={toTop}>
            <i className="iconfont icon-07jiantouxiangshang">
            </i>
          </a>
        </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
  }
)(xxx)