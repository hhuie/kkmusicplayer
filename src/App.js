//import logo from './logo.svg';
import './App.css';
import SongSearch from './SongSearch'
import NowPlaying from './NowPlaying'
import { SongProvider } from './SongContext'

function App() {
  return (
    <SongProvider>
    <div className="App">
      <SongSearch />
      <NowPlaying />
    </div>
    </SongProvider>
  );
}

export default App;
