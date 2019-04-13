import { call, put } from 'redux-saga/effects'
import { Playlist } from './../../../utils/types.d'
import { NewPlaylistAction } from '../../actionTypes'
import {
  fetchPlaylistSuccess,
  createPlaylistSuccess
} from '../../actions/actions'
import {
  fetchPlaylists,
  createPlaylist
} from '../../../services/PlaylistServices'

export function* fetchPlaylistsSaga() {
  try {
    const playlists = yield call(fetchPlaylists)
    yield put(fetchPlaylistSuccess({ playlists }))
  } catch (e) {
    console.log({ e })
  }
}

export function* createPlaylistSaga(action: NewPlaylistAction) {
  try {
    const playlist: Playlist = yield call(createPlaylist, action.payload.name)
    yield put(createPlaylistSuccess({ playlist }))
  } catch (e) {
    console.log({ e })
  }
}
