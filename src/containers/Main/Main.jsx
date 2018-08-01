import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import FirstShow from '../../components/FirstShow/FirstShow'
import Home from '../../containers/Home/Home'
import List from '../../containers/List/List'
import Knowledge from '../../containers/Knowledge/Knowledge'
import Profile from '../../containers/Profile/Profile'
import ShoppingCart from '../../containers/ShoppingCart/ShoppingCart'
import Goods from '../../containers/Goods/Goods'
import Footer from '../../components/Footer/Footer'
import HomeHeader from '../../containers/HomeHeader/HomeHeader'
import Search from '../../containers/Search/Search'
import Login from '../../containers/Login/Login'


export default class Main extends Component {
  render() {
    const currentPath = this.props.location.pathname

    return (
      <div style={{height: '100%'}}>
        {/*{currentPath === '/home' || currentPath === `/goods/${id}` ? <HomeHeader/> : ''}*/}
        {currentPath !== '/firstShow' && currentPath !== '/list' && currentPath !== '/knowledge' &&
        currentPath !== '/profile' && currentPath !== '/shoppingCart' && currentPath !== '/search'&& currentPath !== '/login'? <HomeHeader/> : ''}
        <Switch>
          <Route path='/firstShow' component={FirstShow}/>
          <Route path='/home' component={Home}>
           {/* <Route path='/recommend'/>
            <Route/>*/}
          </Route>
          <Route path='/list' component={List}/>
          <Route path='/knowledge' component={Knowledge}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/shoppingCart' component={ShoppingCart}/>
          <Route path='/goods/:id' component={Goods}/>
          <Route path='/search' component={Search}/>
          <Route path='/login' component={Login}/>
          <Redirect to='/firstShow'/>
          {/*<Route path='/' component={FirstShow}/>*/}
        </Switch>
        {currentPath === '/profile' || currentPath === '/firstShow' || currentPath === '/search' || currentPath === '/login'? '':<Footer/>}
      </div>
    )
  }
}
