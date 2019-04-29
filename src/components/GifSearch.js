import React from 'react'

export default class GifSearch extends React.Component {


  render(){
    return(
      <form onSubmit={this.props.handleSearch}>
        <input type='text' name='input'></input>
        <input type='submit'></input>
      </form>
    )
  }
}