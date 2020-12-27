import React, { useState, useContext } from 'react'
import SongList from './SongList'
import { useSong, useSongUpdate } from './SongContext'


function SongSearch() {
  //const [songs, setSongs, filteredSongs, setFilteredSongs] = useContext(SongContext)
  //const [filteredSongs, setFilteredSongs] = useContext(SongContext)
  const [songs, setSongs, filteredSongs, setFilteredSongs] = useSong()



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
      <div>
          <SongList songData={filteredSongs}/>
      </div>

    </div>
  )
}


/* *******************************/

/*
class SongSearch extends React.Component {
  state = {
    songs: [],
    filteredSongs: []
  };

  render() {
    return (
      <div id="search">
        <h4>Search</h4>
				<input type="text" id="input" onInput={(e) => this.typing(e)}/>
        <div>
				    <SongList songData={this.state.filteredSongs}/>
        </div>

      </div>
    )
  }

  typing(e) {
		const filtered = this.state.songs.filter(song => {
					const input = document.getElementById("input").value;
          const regex = RegExp(input, "gi");
          return song.name['name-USen'].match(regex);
    });
		//const results = filtered.map(song => `${song.name['name-USen']}`);
    //console.log(results)
	//	this.setState({ filteredSongs: results});
    this.setState({ filteredSongs: filtered});

	}
  */

  /*
  componentDidMount() {
    var allSongs = [];
    const endPoint = `https://acnhapi.com/v1/songs`
    fetch(endPoint)
      .then(data => data.json())
      .then(results => {
        //console.log(results)
        allSongs = Object.values(results)
        this.setState({songs: allSongs})
        this.typing(null)
      })
      .catch(err => console.log(err))
  }
  */

export default SongSearch
