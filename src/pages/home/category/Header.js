import { Component } from "react";
import {HeaderStyle} from './styledCategory'
import {withRouter} from 'react-router-dom'

 class Header extends Component{
  constructor(){
    super()
    this.state={
      dir:'category'
    }
  }
  handleClick(dir){
     this.setState({dir})
     this.props.history.push(`/${dir}`)
  }
  render(){
    return (
      <HeaderStyle>
        <ul>
          <li className={this.state.dir==='category'?'active':''} onClick={()=>this.handleClick('category')}>分类</li>
          <li className={this.state.dir==='material'?'active':''} onClick={()=>this.handleClick('material')}>食材</li>
          <li className={`slider ${this.state.dir==='material'?'right':''}`}></li>
        </ul>
      </HeaderStyle>
    )
  }
}
export default withRouter(Header)