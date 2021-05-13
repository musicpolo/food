import { Component } from "react";
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/search/Search'
import HotCate from './HotCate'
import HotList from './Hotlist'

export default class Cookbook extends Component{
  render(){
    return (
    <div>
      <Header/>
      <Swiper/>
      <Search/>
      <HotCate/>
      <HotList/>
    </div>
    )
  }
}