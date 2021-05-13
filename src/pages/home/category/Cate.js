import { Component } from "react";
import Header from './Header'
import Search from '@/search/Search'
import List from '@/category/Category'
import Material from '@/category/Category'
import {CateWrap} from './styledCategory'
import {Route,Switch,Redirect} from 'react-router-dom'
export default class Category extends Component{
  render(){
    return (
      <CateWrap>
        <Header/>
        <Search/>
        <Switch>
          <Route path='/category' render={()=>(<List defaultItem='热门' type='category'/>)}/>
          <Route path='/material' render={()=>(<Material defaultItem='肉类' type='material'/>)}/>
          <Redirect from='/' to='/material'/>
        </Switch>
      </CateWrap>
    )
  }
}