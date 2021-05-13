import styled from 'styled-components'

export const HeaderStyle=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   height:.44rem;
  background:#ee742f;
  text-align: center;
  color: #fff;
  ul{
    display: flex;
    position:relative;
    width: 1.4rem;
    height: .3rem;
    z-index:9;
    border: 1px solid #fff;
    border-radius:.15rem;
    li{
      flex:1;
      line-height: .3rem;
      &:last-child{
        border-radius:.15rem;
        position: absolute;
        width: 50%;
        height: .3rem;
        background-color: #fff;
        z-index:0;
        transform:translateX(0);
        transition:all .5s ease;
        &.right{
          transform:translateX(100%);
        }
      }
      &.active{
        color: #ee742f;
      }
      
    }
  }
`
export const CateWrap=styled.div`
  height: 100%;
  overflow: hidden;
`