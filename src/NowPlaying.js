import React, { useContext } from 'react'
import { useSong, useSongUpdate } from './SongContext'


const NowPlaying = (props) => {
  const [songs, setSongs, filteredSongs, setFilteredSongs, currSong, setCurrSong] = useSong()
  const updateSong = useSongUpdate()
  console.log(currSong)

  const currSongObj = songs.find(s => s.name['name-USen'] === currSong[0])
  console.log(currSongObj)
  //<source src={currSongObj['music_uri']} type="audio/mp3"/>

  function ended() {
    console.log('ended')
    const nextSong = songs.find(s => s.id === currSongObj.id + 1)
    if (nextSong) {
      updateSong(nextSong.name['name-USen'])
    } else {
      updateSong(songs[0].name['name-USen'])
    }
  }

  if (currSongObj) {
    return (
      <div id='nowPlayingContainer'>
        {console.log("Now Playing: " + currSong[0])}
        <h1>Now Playing</h1>
        <img src={currSongObj['image_uri']} id='albumArt' alt="nothing playing"/>
        <div id="nowPlayingTitle">
        {currSongObj.name['name-USen']}
        </div>
        <audio src={currSongObj['music_uri']} onEnded={ended} controls autoPlay>

        </audio>
      </div>
    )
} else {
  console.log("nothing playing")
  return null
}
}

/*class NowPlaying extends React.Component {

  state = {
    currSong: null,
    currArt: null,
    currFile: null
  }
  render() {
    return(
      <div>
        <h1>Now Playing</h1>
        <img src={this.props.art} alt="nothing playing"/>
        {this.props.name}
        <audio controls>
          <source src={this.props.file} type="audio/mp3"/>
        </audio>

      </div>)
  }

}*/

export default NowPlaying
