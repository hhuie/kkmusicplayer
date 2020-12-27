import React from 'react'
import { useShuffle, useShuffleUpdate } from './SongContext'

function ShuffleButton() {
  const update = useShuffleUpdate()
  const shuffle = useShuffle()

  return (
    <button onClick={update}>Shuffle {shuffle ? 'ON' : 'OFF'}</button>
  )
}

export default ShuffleButton
