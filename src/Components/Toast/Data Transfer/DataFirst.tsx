import React, { Component } from 'react'

interface Props {
    handleAddData: () => void; 
    AllData: Data[]
  }
  interface Data {
    name : string
}

export default class DataFirst extends Component<Props> {
    constructor(props:Props){
        super(props)
      }
  render() {
    const {handleAddData , AllData} = this.props

    return (
      <div style={{height : '400px', width : '400px' , border : '1px solid red'}}>
          {AllData.map((data, index) => (
            <li key={index}>{data.name}</li>
          ))}
        
        <button onClick={handleAddData}>Add Data</button>
      </div>
    )
  }
}
