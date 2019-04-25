import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifList: []
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=E9xvzwY9YM4BtKsoly1PNwyW1AKRHW34&limit=3")
    .then(response => response.json())
    .then(gifData => {
      let newArray= []
      gifData.data.map(gif => {newArray.push(gif.images.original.url)})
      this.setState({
        gifList: newArray
    })
  })
}

  handleSearch = (event, searchTerm) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=E9xvzwY9YM4BtKsoly1PNwyW1AKRHW34&limit=3`)
    .then(response => response.json())
    .then(gifData => {
      let newArray= []
      gifData.data.map(gif => {newArray.push(gif.images.original.url)})
      this.setState({
        gifList: newArray
    })
  })
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList list={this.state.gifList} />
      </div>
    )
  }
}

export default GifListContainer
