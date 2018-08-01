import React, {Component} from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'





import './New_goods_list.less'


export default class NewGoodsList extends Component {
  static propTypes={
    bScrollFleg: PropTypes.string,
    newItemLists: PropTypes.array
  }
  componentDidMount () {
    new BScroll('.'+this.props.bScrollFleg,{
      scrollX: true,
      eventPassthrough: 'vertical'
    })

  }
  render() {
    //"new_goods_list"this.props.bScrollFleg
    let {newItemLists} = this.props
    if(!newItemLists){
      newItemLists = []
    }
    return (
      <div className={`new_goods_list ${this.props.bScrollFleg}`}>
        <ul className="new_goods">
          {
            newItemLists.map((item, index) => {
              return (
                <li className="new_good" key={index}>
                  <a>
                    <div>
                      <img src={item.listPicUrl} alt=''/>
                    </div>
                    <div className="new_goods_name">{item.name}</div>
                    <div className="new_goods_detail">{item.simpleDesc}</div>
                    <div className="new_goods_price">￥99</div>
                  </a>
                </li>
              )
            })
          }
          <li className="last_good new_good">
            <a>
              查看全部
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
