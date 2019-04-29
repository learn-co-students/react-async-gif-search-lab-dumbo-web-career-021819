import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: [],
  }

  // componentDidMount(){
  //   fetch('http://api.giphy.com/v1/gifs/search?q=&api_key=0StAHy691VERCiN7YAUhoM5k7RADvRj0&rating=g')
  //   .then(r => r.json())
  //   .then(r => this.setState({gifs: r.data.slice(0,3)}))
  //   // console.log('GLC Mounted')
  // }

  handleSearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.input.value
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=0StAHy691VERCiN7YAUhoM5k7RADvRj0&rating=g`)
    .then(r => r.json())
    .then(r => this.setState({gifs: r.data.slice(0,3)}))
  }

  render(){
    console.log(this.state.gifs)
    return(
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}