import { takeLatest } from 'redux-saga/effects'
import {
  FETCH_PLAYLISTS,
  NEW_PLAYLIST,
  ADD_SONG_TO_PLAYLIST
} from '../actionTypes'
import {
  fetchPlaylistsSaga,
  createPlaylistSaga
} from './playlists/playlistsSaga'
import { addSongToPlaylistSaga } from './songs/songsSaga'

export default function* root() {
  yield takeLatest(FETCH_PLAYLISTS, fetchPlaylistsSaga)
  yield takeLatest(NEW_PLAYLIST, createPlaylistSaga)
  yield takeLatest(ADD_SONG_TO_PLAYLIST, addSongToPlaylistSaga)
}
