import { call, put } from 'redux-saga/effects'
import { AddSongToPlaylistAction } from '../../actionTypes'
import { addSongToPlaylist } from '../../../services/PlaylistServices'
import { songAddedToPlaylistSuccess } from '../../actions/actions'

export function* addSongToPlaylistSaga(action: AddSongToPlaylistAction) {
  try {
    const playlist = yield call(
      addSongToPlaylist,
      action.payload.songId,
      action.payload.playlistId
    )
    yield put(songAddedToPlaylistSuccess({ playlist }))
  } catch (e) {
    console.log({ e })
  }
}
