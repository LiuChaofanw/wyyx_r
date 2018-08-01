import React, {Component} from 'react'


import './SelectGoods.less'


export default class SelectGoods extends Component {
  render() {
    return (
      <div>
        {
          this.props.cateLists.map((item, index) => {
            return (
              <div className="select_goods" key={index}>
                <section className="select_header">
                  <span>{item.name}</span>
                </section>
                <section className="select_list">
                  <ul className="select_ul">
                    {
                      item.itemList.map((it, index) => {
                        return (
                          <li className="select_item" key={index}>
                            <img src={it.listPicUrl} alt=''/>
                            <div className="select_detail">{it.simpleDesc}</div>
                            <div className="select_name">{it.name}</div>
                            <div className="select_price">￥{it.retailPrice}</div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </section>
              </div>
            )
          })
        }
      </div>

    )
  }
}
