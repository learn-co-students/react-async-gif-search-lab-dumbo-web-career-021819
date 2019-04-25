import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  }

  changeEvent = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => {this.props.handleSearch(event, this.state.searchTerm)}}>
        <label>Search Gifs</label>
        <input type="text" value={this.state.searchTerm} onChange={this.changeEvent} />
        <input type="Submit" />
      </form>
    )
  }
}

export default GifSearch
