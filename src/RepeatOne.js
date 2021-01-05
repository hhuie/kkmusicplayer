import React from 'react'
import { useRepeat, useRepeatUpdate } from './SongContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

function RepeatOne() {
  const repeat = useRepeat()
  const updateRepeat = useRepeatUpdate()

  if (repeat) {
    return(
      <div>
      Repeat One: <button onClick={updateRepeat}><FontAwesomeIcon icon={faToggleOn} className="repeat"/></button>
      </div>
    )
  }
  return(
    <div>
    Repeat One: <button onClick={updateRepeat}><FontAwesomeIcon icon={faToggleOff} className="repeat"/></button>
    </div>
  )
}

export default RepeatOne
