import { Component } from "react";
import {Carousel} from 'antd-mobile'
import {SwiperStyle} from './styledCookbook'
import {connect} from 'react-redux'
import {GETLIST} from '../action-types'

const mapState=state=>({
    list:state.home.list
})
const mapDispatch=dispatch=>({
  loadData(){
    dispatch({
      type:GETLIST,
      url:'/api/list'
    })
  }
})
@connect(mapState,mapDispatch)

 class Swiper extends Component{
   componentDidMount(){
     this.props.loadData()
   }
  render(){
    return (
      
      <SwiperStyle>
        {
          this.props.list.length&&(

         <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {
            this.props.list.slice(0,5).map(value=><img key={value.id} src={value.img} alt=""/>)
          }
        </Carousel>
          )
        }
     </SwiperStyle>
      
    )
  }
}
export default Swiper