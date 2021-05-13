import { Component } from "react";
import {Grid} from 'antd-mobile'
import {HotCateStyle} from './styledCookbook'
import {getData} from '@/../utils/getData'

export default class HotCate extends Component{
  state={
    hotList:[]
  }
  // get获取数据
  async componentDidMount(){
    let result=await getData({
      url:'/api/hotcate'
    })
    this.setState({
      hotList:result
    })
  }
  render(){
    return (
      <HotCateStyle>
        <header>
          热门分类
        </header>
        {/* 宫格布局 */}
        <Grid data={this.state.hotList}
          columnNum={3}
          hasLine={false}
          renderItem={dataItem => (
        <div className='item'>
          <img src={dataItem.img}  alt="" />
          <div >
            <p>{dataItem.title}</p>
          </div>
        </div>
      )}
    />
      </HotCateStyle>
    )
  }
}