import React from 'react';
import { selectSong } from '../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongList from './songList';



const App = () => {
  return (
    <div className="container">
      <SongList/>
    </div>
  );
}

export default App;
