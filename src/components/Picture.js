import React, { Component } from 'react'

export default class Picture extends Component {
   render() {
      return (
         <div>
            <img style={{width: "400px"}} src={this.props.picList}></img>
         </div>
      )
   }
}
