import axios from 'axios'

export const getData=({url})=>{
  return axios({
    method:'get',
    url
  }).then((res)=>{
    return res.data
  }).catch(err=>{
    return err.message
  })
}