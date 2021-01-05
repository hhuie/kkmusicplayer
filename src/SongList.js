import React from 'react'
import { useSongUpdate } from './SongContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function ListItem(props) {
  const songUpdate = useSongUpdate()

  const localSongUpdate = (e) => {
    e.preventDefault()
    songUpdate(e.target.id)
  }

  const faOnClick = (e) => {
    songUpdate(e.target.nearestViewportElement.id)

  }

  //<FontAwesomeIcon icon={faPlay} className='playIcon' id={props.value.name['name-USen']}/>

  return (
    <li id={props.value.name['name-USen']} onDoubleClick={localSongUpdate} className='noselect'>
      <a href="#" id={props.value.name['name-USen']} onClick={localSongUpdate}>
        <img src={props.value['image_uri']} id={props.value.name['name-USen']} className="icons" alt="image not found"/>
      </a>
      &nbsp;{props.value.name['name-USen']}
    </li>
  )
}

function SongList(props) {

  const listItems = props.songData.map(s =>
    <ListItem key={s.name['name-USen']} value={s} />
  )

  return (
    <div id="songList">
      <ul>
        {listItems}
      </ul>
    </div>
  )

}

export default SongList;
