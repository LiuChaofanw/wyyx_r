import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Knowledge.less'

import Header from '../../components/Header/Header'
import Blank from '../../components/Blank/Blank'
import Swiper from './Swiper/Swiper'
import Articles from './Articles/Articles'
import Select from './Select/Select'
import TenHour from './TenHour/TenHour'
import Look from './Look/Look'
import MoreGood from './MoreGood/MoreGood'
import {getBanners, getColumns, getRecommend, getTenfifteens, getZhenpin, getYxLook,getFindMores} from '../../redux/actions'


class Knowledge extends Component {
  componentDidMount () {
    this.props.getBanners()
    this.props.getColumns()
    this.props.getRecommend()
    this.props.getTenfifteens()
    this.props.getZhenpin()
    this.props.getYxLook()
    this.props.getFindMores()
  }
  render() {
    return (
      <div id='knowledge'>
        <Header/>
        <Swiper banners={this.props.banners}/>
        <Articles columns={this.props.columns}/>
        <Blank/>
        <Select recommend={this.props.recommend}/>
        <Blank/>
        <TenHour tenfifteens={this.props.tenfifteens}/>
        <Blank/>
        <Select recommend={this.props.zhenpin}/>
        <Blank/>
        <Look yxLook={this.props.yxLook}/>
        <MoreGood findMores={this.props.findMores}/>
      </div>
    )
  }
}

export default connect(
  state => ({banners: state.banners, columns: state.columns, recommend: state.recommend, tenfifteens: state.tenfifteens,
    zhenpin: state.zhenpin, yxLook: state.yxLook,findMores:state.findMores}),
  {getBanners, getColumns, getRecommend, getTenfifteens, getZhenpin, getYxLook,getFindMores}
)(Knowledge)