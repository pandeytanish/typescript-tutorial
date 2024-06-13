import React, { Component } from 'react'
import DataFirst from './DataFirst'
import DataSecond from './DataSecond'

interface State {
    DataFirst : Data,
    AllData : Data[]
} 

interface Data {
    name : string
}

export default class Main extends Component<{},State> {
    constructor(props : {}){
        super(props);
        this.state = {
            DataFirst : {
                name : 'Hello'
            },
            AllData : []
        }
    }

    handleAddData = () => {
        const {AllData,DataFirst} = this.state
        this.setState({AllData:[...AllData,DataFirst]})
        console.log("clicked")
      }
  render() {
    return (
      <>
      <div style={ {display : 'flex', justifyContent : 'space-between'}}>
      <DataFirst handleAddData={this.handleAddData} AllData={this.state.AllData}/>
      <DataSecond handleAddData={this.handleAddData} AllData={this.state.AllData}  />
      </div>
      </>
    )
  }
}
