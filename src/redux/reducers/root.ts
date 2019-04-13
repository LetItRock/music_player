import { combineReducers } from 'redux'
import { playlistsReducer } from './playlists'

export default combineReducers({
  playlists: playlistsReducer
})
