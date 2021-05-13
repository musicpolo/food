import { Component } from "react";
import {CateStyle} from './styledCate'
import {getData} from '../../utils/getData'

export default class Category extends Component{
  constructor(){
    super()
    this.state={
      dataSource:null,
      currentItem:'',
      defaultItem:''
    }
  }
  static getDerivedStateFromProps(props,state){
    if(props.defaultItem!==state.defaultItem){
      return {
        ...state,
        defaultItem:props.defaultItem,
        currentItem:props.defaultItem
      }
    }
    return null
  }
  handleItem=item=>{
    this.setState({
      currentItem:item
    })
  }
  async componentDidMount(){
    const result=await getData({url:'api/category'})
    this.setState({
      dataSource:result.data,
    })
  }
  render(){
    let {type}=this.props
    const data=this.state.dataSource?Object.keys(this.state.dataSource[type]):[]
    const contents=this.state.dataSource?this.state.dataSource[type][this.state.currentItem]:[]
    
    return (
      <CateStyle>
        <div className='left'>
          <ul className='menu'>
            {
              data.map(value=>{
                return(
                  this.state.currentItem===value?
                  <li className='active' key={value}><span>{value}</span></li>:
                  <li key={value} onClick={()=>this.handleItem(value)}>{value}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="content">
            <ul>
              {
                contents.map(value=>{
                  return(
                    <li key={value}>{value}</li>
                  )
                })
              }
            </ul>
        </div>
      </CateStyle>
    )
  }
} 