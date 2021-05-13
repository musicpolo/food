import { Component } from "react";
import {Switch} from 'antd-mobile'
import {connect} from 'react-redux'
import {SETSHOW} from '../action-types'
import {MoreStyle} from './styledMore'
@connect(state=>({
  checked:state.home.isShow
}),dispatch=>({
  changeStatus(checked){
    dispatch({
      type:SETSHOW,
      data:checked
    })
  }
}))
 class More extends Component{
  render(){
    return(
      <MoreStyle>
        <p>是否显示地图：</p>
        <Switch checked={this.props.checked}
        onChange={checked=>{
          this.props.changeStatus(checked)
        }}
        />
      </MoreStyle>
    )
  }
}
export default More