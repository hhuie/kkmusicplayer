import React, { useState, useContext, useEffect } from 'react'

const SongContext = React.createContext()
const SongUpdateContext = React.createContext()
const FilteredContext = React.createContext()
const CurrSongContext = React.createContext()
const ShuffleContext = React.createContext()
const ShuffleUpdateContext = React.createContext()

export function useSong() {
  return useContext(SongContext)
}

export function useSongUpdate() {
  return useContext(SongUpdateContext)
}

export function useFiltered() {
  return useContext(FilteredContext)
}

export function useCurrSong() {
  return useContext(CurrSongContext)
}

export function useShuffle() {
  return useContext(ShuffleContext)
}

export function useShuffleUpdate() {
  return useContext(ShuffleUpdateContext)
}

export function SongProvider ({ children }) {
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [currSong, setCurrSong] = useState([])
  const [shuffle, setShuffle] = useState(false)

  useEffect( () => {
    var allSongs = [];
    const endPoint = `https://acnhapi.com/v1/songs`
    fetch(endPoint)
      .then(data => data.json())
      .then(results => {
        allSongs = Object.values(results)
        setSongs(prevSongs => allSongs)
        setFilteredSongs(allSongs)
      })
      .catch(err => console.log(err))
  }, []);

  function updateSong(newSong) {
    setCurrSong([newSong])
    console.log(currSong)
  }

  function updateShuffle() {
    setShuffle(prev => !prev)
    console.log(shuffle)
  }

  return(
    <SongContext.Provider value={[songs, setSongs]}>
      <FilteredContext.Provider value={[filteredSongs, setFilteredSongs]}>
        <CurrSongContext.Provider value={[currSong, setCurrSong]}>
          <SongUpdateContext.Provider value={updateSong}>
          <ShuffleContext.Provider value={shuffle}>
          <ShuffleUpdateContext.Provider value={updateShuffle}>
            {children}
          </ShuffleUpdateContext.Provider>
          </ShuffleContext.Provider>
          </SongUpdateContext.Provider>
        </CurrSongContext.Provider>
      </FilteredContext.Provider>
    </SongContext.Provider>
  )
}
