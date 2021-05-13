import styled from 'styled-components'
import {border} from '@/styled/border'

export const SearchStyle=border({

   Comp: styled.div`
    padding:.1rem .15rem;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      border-radius:.05rem;
      height: .4rem;
      color: #666;
      background-color: #fff;
      img{
        margin-right: .05rem;
        width: .2rem;
        height: .2rem;
      }
    }
  `
})