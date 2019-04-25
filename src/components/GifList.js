import React from 'react'

const GifList = (props) => {
  return (
    <div>
      <ul>
      {props.list.map(gif => <li><img alt="" src={gif} /></li>)}
      </ul>
    </div>
  )
}

export default GifList
