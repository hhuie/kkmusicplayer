import React, { useContext } from 'react'
import { useSong, useSongUpdate } from './SongContext'

function ListItem(props) {
  //const [currSong, setCurrSong] = useSong()
  const songUpdate = useSongUpdate()

  /*const updateSong = (e) => {
    //console.log(e.target.value)
    setCurrSong([e.target.value])
  }*/

  const localSongUpdate = (e) => {
    songUpdate(e.target.id)
  }

  return (
    <li id={props.value.name['name-USen']} onDoubleClick={localSongUpdate}><a href="#" id={props.value.name['name-USen']} onClick={localSongUpdate}>play</a>
    {props.value.name['name-USen']}</li>
  )
}

function SongList(props) {
  const [songs, setSongs, filteredSongs, setFilteredSongs, currSong, setCurrSong] = useSong()

  // const playSong = (e) => {
  //   e.preventDefault()
  //   setCurrSong(s)
  //   console.log(currSong)
  // }

  const listItems = props.songData.map(s =>
    <ListItem key={s.name['name-USen']} value={s} />
  )

  return (
    <div>
      <div id="songListContainer">
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  )

}

/*class SongList extends React.Component {


  render() {

    const listItems = this.props.songData.map(s =>
      <ListItem key={s.name['name-USen']} value={s} onClick={this.playSong} />
    )
    return (
      <div>
        <div id="songListContainer">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}*/

export default SongList;