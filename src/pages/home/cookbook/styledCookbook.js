import styled from 'styled-components'
// header样式
export const HeaderStyle =styled.div`
  height:.44rem;
  background:#ee742f;
  font-size:.18rem;
  text-align: center;
  color: #fff;
  line-height: .44rem;
`
// 幻灯片样式
export const SwiperStyle=styled.div`
    height: 0;
    font-size:0;
    padding-bottom:66.6667%;
   img{
     width: 100%;
     }
`
// 热门分类样式
export const HotCateStyle=styled.div`
  background-color: #fff;
  header{
    padding-left:.2rem;
    line-height: .5rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .am-grid{
    padding:0 0 0 .2rem;
  }
  .am-grid-item-content{
    height: 1rem;
  }
    .item{
      display: flex;
      flex-direction:column;
      justify-content: center;
      
      img{
        width: 70%;
      }
      p{
        width:70% ;
        margin-top: .03rem;
        line-height:.2rem ;
      }
    }
`

export const HotListStyle=styled.div`
  header{
    padding-left:.2rem;
    line-height: .5rem;
   
  }
  .am-grid{
    padding:0 0 0 .2rem;
  }
  .am-grid-item-content{
    background-color: #f5f5f9;
  }
  .item{
      display: flex;
      flex-direction:column;
      justify-content: center;
    
      img{
        width: 90%;
      }
      div{
        width: 90%;
        background-color: #fff;
      }
      h3{
        margin-top: .03rem;
      }
      p{
        margin-top: .03rem;
        color: #999;
        font-size:.12rem;
      }
    }
`