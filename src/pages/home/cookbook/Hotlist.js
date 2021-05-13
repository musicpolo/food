import { Component } from "react";
import {Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import {HotListStyle} from './styledCookbook'

@connect(state=>({
  hotList:state.home.list
}))

 class HotList extends Component{
  render(){
    return (
      <HotListStyle>
        <header>精品好菜</header>
        <Grid data={this.props.hotList.slice(0,10)}
          columnNum={2}
          hasLine={false}
          renderItem={dataItem => (
        <div className='item'>
          <img src={dataItem.img}  alt="" />
          <div >
            <h3>{dataItem.name}</h3>
            <p>{dataItem.all_click}浏览</p>
          </div>
        </div>
      )}
    />
      </HotListStyle>
    )
  }
}
export default HotList