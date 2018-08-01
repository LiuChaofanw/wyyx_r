import React, {Component} from 'react'
import moment from 'moment'

import './TimeGoods.less'



export default class TimeGoods extends Component {
  state = {
    time: 0
  }
  componentWillReceiveProps (n) {
    // 空的对象   重复传值
    if(n.flashSaleIndexVO.remainTime === old){
      return
    }
    let old = this.props.flashSaleIndexVO.remainTime
    let time = this.props.flashSaleIndexVO.remainTime
    if(this.props.flashSaleIndexVO.remainTime && time >= 1000 && !this.timer){
      this.timer = setInterval(() => {
        if (time >= 0){
          time-=1000
          this.setState({
            time
          })
        }else {
          clearInterval(this.timer)
        }

      },1000)
    }

  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render() {
    const {hours, minutes, seconds} = moment.duration(this.state.time)._data
    return (
      <div className="time_goods">
        <div className="time">
          <p>严 选 限 时 购</p>
          <div>
            <span className="hour" v-if="time._data">{hours}</span> :
            <span className="min" v-if="time._data">{minutes}</span> :
            <span className="second" v-if="time._data">{seconds}</span>
          </div>
          <p className="small">下一场 {moment(this.props.flashSaleIndexVO.nextStartTime).format('HH:mm:ss')} 开始</p>
        </div>
        <div className="time_good">
          <div>
            <img src={this.props.flashSaleIndexVO.primaryPicUrl} alt=''/>
          </div>
          <div className="orange">
            <p>￥99</p>
            <p className="line_through">￥199</p>
          </div>
        </div>
      </div>
    )
  }
}
