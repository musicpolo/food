import { Component } from "react";
import {MapStyle} from './styledMap'

export default class Map extends Component{
  render(){
    return(
      <MapStyle>
        <iframe src='/map.html' title='map'></iframe>
      </MapStyle>
    )
  }
}