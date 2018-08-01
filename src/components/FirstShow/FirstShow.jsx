import React, {Component} from 'react'



import Top from '../../assets/imgs/53df1ead033706dcd7da9a91c8977b83.jpg'
import Center from '../../assets/imgs/143424244e87fb8eed45c6984c769a63.jpg'
import Bottom from '../../assets/imgs/06a2d444a39e1dfe621b7f0d317de7b4.jpg'
import './firstShow.less'




export default class FirstShow extends Component {
  goHome = () => {
   this.props.history.push('/home')
  }
  render() {
    return (
      <div id="firstPages">
        <div className="f_header">
          <img src={Top} alt=''/>
        </div>
        <div className="center">
          <img src={Center} alt=''/>
        </div>
        <div className="goHome">
          <img src={Bottom} alt=''/>
          <a className="downloadApp">
          </a>
          <a className="linkGoHome" onClick={this.goHome}>
          </a>
        </div>
      </div>
    )
  }
}
