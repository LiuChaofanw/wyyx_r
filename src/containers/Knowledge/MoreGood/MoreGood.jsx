import React, {Component} from 'react'

import './MoreGood.less'

import Blank from '../../../components/Blank/Blank'


export default class MoreGood extends Component {
  render() {
    return (
      <div className="more_good">
        <div className="more_header">
          <div className="left_line"> </div>

          <div className="text">更多精彩</div>
          <div className="right_line"> </div>
        </div>
        {
          this.props.findMores.map((item,index) => {
              if(item.picList.length === 0){
                return (
                  <div className="content" key={index}>
                    <div className="img" v-if="more.picList.length === 0">
                      <div className="img_container">
                        <img src={item.itemPicUrl} alt=''/>
                      </div>
                      <div className="text_container">
                        <span>{item.subTitle}</span>
                      </div>
                    </div>
                    <Blank/>
                  </div>
                )
              }else {
                return (
                  <div className="content" key={index}>
                    <div className="imgs"  v-if="more.picList.length">
                      <div className="img_container">
                        <div className="big">
                          <img src={item.picList[0]} alt=''/>
                        </div>
                        <div className="small">
                          <img src={item.picList[1]} alt=''/>
                          <img src={item.picList[2]} alt=''/>
                        </div>
                      </div>
                      <div className="text_container">
                        <span>{item.subTitle}</span>
                      </div>
                    </div>
                    <Blank/>
                  </div>
                )
              }
          })
        }
{/*        <div className="content">
          <div className="img" v-if="more.picList.length === 0">
            <div className="img_container">
              <img src={junjie} alt=''/>
            </div>
            <div className="text_container">
              <span>subTitle</span>
            </div>
          </div>
          <div className="imgs"  v-if="more.picList.length">
            <div className="img_container">
              <div className="big">
                <img src={junjie} alt=''/>
              </div>
              <div className="small">
                <img src={junjie} alt=''/>
                <img src={junjie} alt=''/>
              </div>
            </div>
            <div className="text_container">
              <span>subTitle</span>
            </div>
          </div>
          <Blank/>
        </div>*/}
      </div>
    )
  }
}
