import React, {Component} from 'react'
import {connect} from 'react-redux'

import Swiper from './Swiper/Swiper'

import Blank from '../../components/Blank/Blank'
import HomeBrand from './Home_brand/Home_brand'
import HomeNew from './Home_new/Home_new'
import NewGoodsList from './New_goods_list/New_goods_list'
import HomeRecommend from './Home_recommend/Home_recommend'
import TimeGoods from './TimeGoods/TimeGoods'
import Welfare from './Welfare/Welfare'
import Special from './Special/Special'
import SelectGoods from './SelectGoods/SelectGoods'

import {getFocusLists,
  getTagLists,
  getNewItemLists,
  getPopularItemLists,
  getFlashSaleIndexVO,
  getTopicLists,
  getCateLists
} from '../../redux/actions'

import './Home.less'


class Home extends Component {
  state = {
    marginTop: '3rem'
  }
  componentDidMount () {
    this.props.getFocusLists()
    this.props.getTagLists()
    this.props.getNewItemLists()
    this.props.getPopularItemLists()
    this.props.getFlashSaleIndexVO()
    this.props.getTopicLists()
    this.props.getCateLists()
/*    PubSub.subscribe('changMarginTop', () => {
      this.setState({
        marginTop: '2rem'
      })
    })*/
  }
  render() {
    return (
      <div id='home' style={{marginTop: this.props.isClose ? '2rem' : '3rem'}}>
      {/*  <HomeHeader/>*/}
        <Swiper focusLists={this.props.focusLists}/>
        <Blank/>
        <HomeBrand tagLists={this.props.tagLists}/>
        <Blank/>
        <HomeNew/>
        <NewGoodsList bScrollFleg='fleg1' newItemLists={this.props.newItemLists}/>
        <HomeRecommend/>
        <NewGoodsList bScrollFleg='fleg2' newItemLists={this.props.popularItemLists}/>
        <Blank/>
        <TimeGoods flashSaleIndexVO={this.props.flashSaleIndexVO}/>
        <Blank/>
        <Welfare/>
        <Blank/>
        <Special topicLists={this.props.topicLists}/>
        <Blank/>
        <SelectGoods cateLists={this.props.cateLists}/>
      </div>
    )
  }
}

export default connect(
  state => ({focusLists: state.focusLists, tagLists: state.tagLists, newItemLists: state.newItemLists,
    popularItemLists:state.popularItemLists, flashSaleIndexVO: state.flashSaleIndexVO,
    topicLists: state.topicLists, cateLists: state.cateLists, isClose: state.isClose
  }),
  {getFocusLists,
    getTagLists,
    getNewItemLists,
    getPopularItemLists,
    getFlashSaleIndexVO,
    getTopicLists,
    getCateLists
  }
)(Home)