import styled from 'styled-components'

export const CateStyle=styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  .left{
    width: .9rem; 
  }
  .menu{
    background-color: #f3f3f3;
    height: 100%;
    overflow-y:auto;
    li{
      height: .5rem;
      line-height: .5rem;
      text-align: center;
      &.active{
        background-color: #fff;
        span{
          display:inline-block;
          height: 100%;
          border-bottom: 2px solid #ee742f;
        }
      }
    }
  }
  .content{
    flex:1;
    background-color: #fff;
    ul{
      display: flex;
      flex-wrap:wrap;
      padding:.2rem .1rem;
      li{
        width:33.333% ;
        text-align: center;
        height: .4rem;
        line-height:.4rem;
      }
    }
  }
`