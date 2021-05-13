import { Component } from "react";
import {HeaderStyle} from './styledCookbook'

export default class Header extends Component{
  render(){
    return (
    <div>
      <HeaderStyle>
      美食大全
      </HeaderStyle>
    </div>
    )
  }
}