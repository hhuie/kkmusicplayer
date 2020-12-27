import React, { useState, useContext, useEffect } from 'react'

const SongContext = React.createContext()
const SongUpdateContext = React.createContext()

export function useSong() {
  return useContext(SongContext)
}

export function useSongUpdate() {
  return useContext(SongUpdateContext)
}


export function SongProvider ({ children }) {
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [currSong, setCurrSong] = useState([])

  useEffect( () => {
    var allSongs = [];
    const endPoint = `https://acnhapi.com/v1/songs`
    fetch(endPoint)
      .then(data => data.json())
      .then(results => {
        //console.log(results)
        allSongs = Object.values(results)
        setSongs(prevSongs => allSongs)
        setFilteredSongs(allSongs) //may cause error(?)
      })
      .catch(err => console.log(err))
  }, []);

  function updateSong(newSong) {
    setCurrSong([newSong])
    console.log(currSong)
  }

  return(
    <SongContext.Provider value={[songs, setSongs, filteredSongs, setFilteredSongs, currSong, setCurrSong]}>
    <SongUpdateContext.Provider value={updateSong}>
      {children}
    </SongUpdateContext.Provider>
    </SongContext.Provider>
  )
}
