import React from 'react'
import { useEffect } from 'react'
import { useSong, useSongUpdate, useCurrSong, useShuffle } from './SongContext'
import ShuffleButton from './ShuffleButton'
import RepeatOne from './RepeatOne'
import { useRepeat } from './SongContext'


const NowPlaying = (props) => {
  const [songs] = useSong()
  const [currSong] = useCurrSong()
  const updateSong = useSongUpdate()
  const shuffle = useShuffle()
  const repeat = useRepeat()
  console.log(currSong)

  const currSongObj = songs.find(s => s.name['name-USen'] === currSong[0])
  console.log(currSongObj)

  function ended() {
    if (repeat) {
      updateSong(songs.find(s => s.id === currSongObj.id).name['name-USen'])
    } else {

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
  }

  useEffect(() => {
    var audioPlayer = document.getElementById('myAudio')
    if (audioPlayer) {
      (repeat) ? audioPlayer.loop = true : audioPlayer.loop = false
    }
  }, [repeat])

  if (currSongObj) {
    return (
      <div className="flexbox-item" id="nowPlayingContainer">
        <h2>Now Playing</h2>
        <div id="nowPlayingTitle">
          {currSongObj.name['name-USen']}
        </div>
        <img src={currSongObj['image_uri']} id='albumArt' alt="image not found"/>
        <br/>
        <audio src={currSongObj['music_uri']} onEnded={ended} id='myAudio' controls autoPlay>
        </audio>
        <br/>
        <button id='nextBtn' onClick={ended}>Next</button>
        <ShuffleButton/>
        <RepeatOne/>
      </div>
    )

    /*if (!repeat) {
      return (
        <div id='nowPlayingContainer' className='flexbox-item'>
          <h1>Now Playing</h1>
          <img src={currSongObj['image_uri']} id='albumArt' alt="image not found"/>
          <div id="nowPlayingTitle">
          {currSongObj.name['name-USen']}
          </div>
          <audio src={currSongObj['music_uri']} onEnded={ended} controls autoPlay>
          </audio>
          <br/>
          <ShuffleButton/>
          <RepeatOne/>

        </div>
      )
    } else {
      return (
        <div className="flexbox-item" id="nowPlayingContainer">
          <h3>Now Playing</h3>
          <div id="nowPlayingTitle">
            {currSongObj.name['name-USen']}
          </div>
          <img src={currSongObj['image_uri']} id='albumArt' alt="image not found"/>
          <audio src={currSongObj['music_uri']} onEnded={ended} controls autoPlay loop>
          </audio>
          <br/>
          <button id='nextBtn' onClick={ended}>Next</button>
          <ShuffleButton/>
          <RepeatOne/>
        </div>
      )
    } */
  } else {
    console.log("nothing playing")
    return null
  }
}

export default NowPlaying
