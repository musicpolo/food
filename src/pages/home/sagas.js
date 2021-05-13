
import * as types from './action-types'
import {getData} from '../../utils/getData' 
import { put } from 'redux-saga/effects'

function * loadData(action){
     try{
      const result= yield getData({
        url:action.url
      })
      yield put({type:types.LOADDATA,data:result.data})
    }catch(e){
      console.error(e)
    }
}

export {types, loadData as action}