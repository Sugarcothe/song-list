import {combineReducers} from 'redux';

const songsReducer = ( ) => {

  return [
    { title: 'Bad Influence', Duration: '4:05'},
    { title: 'FEM', Duration: '3:22'},
    { title: 'Nobody', Duration: '3:25'},
    { title: 'Lo Lo', Duration: '2:51'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});