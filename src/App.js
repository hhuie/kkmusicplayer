import './App.css';
import SongSearch from './SongSearch'
import NowPlaying from './NowPlaying'
import Header from './Header'
import { SongProvider } from './SongContext'

function App() {
  return (
    <SongProvider>
    <div className="App">
      <Header />
      <div className="flexbox-container">
        <SongSearch />
        <NowPlaying />
      </div>
    </div>
    </SongProvider>
  );
}

export default App;
