import React from 'react'
import { useShuffle, useShuffleUpdate } from './SongContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

function ShuffleButton() {
  const update = useShuffleUpdate()
  const shuffle = useShuffle()

  if (shuffle) {
    return <button onClick={update}><FontAwesomeIcon icon={faRandom} id='shuffleBtn' className='shuffle'/></button>
  }
  return (
    <button onClick={update}><FontAwesomeIcon icon={faRandom} id='unshuffleBtn' className='shuffle'/> </button>
  )
}

export default ShuffleButton
