import React from 'react'
import { useSong, useSongUpdate, useCurrSong, useShuffle } from './SongContext'
import ShuffleButton from './ShuffleButton'


const NowPlaying = (props) => {
  const [songs] = useSong()
  const [currSong] = useCurrSong()
  const updateSong = useSongUpdate()
  const shuffle = useShuffle()
  console.log(currSong)

  const currSongObj = songs.find(s => s.name['name-USen'] === currSong[0])
  console.log(currSongObj)

  function ended() {
    if (!shuffle) {
      const nextSong = songs.find(s => s.id === currSongObj.id + 1)
      if (nextSong) {
        updateSong(nextSong.name['name-USen'])
      } else {
        updateSong(songs[0].name['name-USen'])
      }
    } else {
      var num = Math.floor(Math.random() * 94) + 1
      console.log(num)
      const nextSong = songs.find(s => s.id === num)
      updateSong(nextSong.name['name-USen'])
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
        <ShuffleButton/>
      </div>
    )
  } else {
    console.log("nothing playing")
    return null
  }
}

export default NowPlaying
