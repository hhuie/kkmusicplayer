import React from 'react'
import { useShuffle, useShuffleUpdate } from './SongContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

function ShuffleButton() {
  const update = useShuffleUpdate()
  const shuffle = useShuffle()

  if (shuffle) {
    return (
      <div>
      Toggle Shuffle: <button onClick={update}><FontAwesomeIcon icon={faRandom} id='shuffleBtn' className='shuffle'/></button>
      </div>
    )
  }
  return (
    <div>
    Toggle Shuffle: <button onClick={update}><FontAwesomeIcon icon={faRandom} id='unshuffleBtn' className='shuffle'/> </button>
    </div>
  )
}

export default ShuffleButton
