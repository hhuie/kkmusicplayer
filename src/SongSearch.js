import React from 'react'
import SongList from './SongList'
import { useSong, useFiltered } from './SongContext'


function SongSearch() {
  //const [songs, setSongs, filteredSongs, setFilteredSongs] = useContext(SongContext)
  //const [filteredSongs, setFilteredSongs] = useContext(SongContext)
  const [songs] = useSong()
  const [filteredSongs, setFilteredSongs] = useFiltered()



  const typing = (e) => {
  		const filtered = songs.filter(song => {
  					const input = document.getElementById("input").value;
            const regex = RegExp(input, "gi");
            return song.name['name-USen'].match(regex);
      });
      setFilteredSongs(filtered)
  	}

  return (
    <div id="search">
      <h4>Search</h4>
      <input type="text" id="input" onInput={(e) => typing(e)}/>
      <div id="songListContainer">
          <SongList songData={filteredSongs}/>
      </div>

    </div>
  )
}


export default SongSearch
