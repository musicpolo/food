import { Component } from "react";
import search from 'assets/search.png'
import {SearchStyle} from './styledSearch'

export default class Search extends Component{
  render(){
    return (
      <SearchStyle width='0' >
      <div>
        <img src={search} alt=""/>
        <span>想吃什么搜这里，如川菜</span>
      </div>
      </SearchStyle>
    )
  }
}