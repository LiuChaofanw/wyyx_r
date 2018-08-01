import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Goods.less'
import Blank from '../../components/Blank/Blank'
import {getCateLists} from '../../redux/actions'




class Goods extends Component {
  state = {
    marginTop: '3rem'
  }
  componentDidMount () {
 /*   PubSub.subscribe('changMarginTop', () => {
      console.log(222)
      this.setState({
        marginTop: '2rem'
      })
    })*/
    this.props.getCateLists()
  }
  render() {
    let id=this.props.match.params.id
    let cateLists = this.props.cateLists
    if(!cateLists){
      cateLists = []
    }
    let cateList =cateLists.find((item) => {
      return item.id === id*1
    })
    if(!cateList){
      cateList = {}
    }
    let itemList = cateList.itemList
    if (!itemList){
      itemList = []
    }
    return (
      <div id="class_item"  style={{marginTop: this.props.isClose ? '2rem' : '3rem'}}>
        <div className="img_container" v-show="index === currentIndex">
          <img src={cateList.bannerUrl} alt=""/>
        </div>
        <Blank/>
        <div className="select_goods"  v-show="index === currentIndex">
          <section className="select_header">
            <span>{cateList.name}好物</span>
          </section>
          <section className="select_list">
            <ul className="select_ul">
              {
                itemList.map((item, index) => {
                  return (
                    <li className="select_item" key={index}>
                      <img src={item.listPicUrl} alt=''/>
                      <div className="select_detail">{item.simpleDesc}</div>
                      <div className="select_name">{item.name}</div>
                      <div className="select_price">￥{item.retailPrice}</div>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({isClose: state.isClose, cateLists: state.cateLists}),
  {getCateLists}
)(Goods)
