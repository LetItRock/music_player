import { call, put } from 'redux-saga/effects'

import { fetchPlaylistsSaga, createPlaylistSaga } from '../playlistsSaga'
import {
  fetchPlaylists,
  createPlaylist,
  items
} from './../../../../services/PlaylistServices'
import {
  fetchPlaylistSuccess,
  newPlaylistAction,
  createPlaylistSuccess
} from '../../../actions/actions'
import { NewPlaylistAction } from '../../../actionTypes'
import { Playlist } from '../../../../utils/types'

describe('Playlists saga', () => {
  describe('fetchPlaylistsSaga - success', () => {
    const iterator = fetchPlaylistsSaga()

    it('should call fetchPlaylists service', () => {
      const { value } = iterator.next()
      expect(value).toEqual(call(fetchPlaylists))
    })

    it('should call fetchPlaylistSuccess action', () => {
      const { value } = iterator.next(items)
      expect(value).toEqual(put(fetchPlaylistSuccess({ playlists: items })))
    })

    it('should be done', () => {
      const { done } = iterator.next(items)
      expect(done).toBeTruthy()
    })
  })

  describe('fetchPlaylistsSaga - failure', () => {
    const iterator = fetchPlaylistsSaga()

    it('should call fetchPlaylists service', () => {
      const { value } = iterator.next()
      expect(value).toEqual(call(fetchPlaylists))
    })

    it('should be done after throwing exception', () => {
      ;(iterator as any).throw('ERROR')
      const { done } = iterator.next()
      expect(done).toBeTruthy()
    })
  })

  describe('createPlaylistSaga - success', () => {
    const name = 'NEW_PAYLIST'
    const iterator = createPlaylistSaga(newPlaylistAction({
      name
    }) as NewPlaylistAction)

    it('should call createPlaylist service', () => {
      const { value } = iterator.next()
      expect(value).toEqual(call(createPlaylist, name))
    })

    it('should call fetchPlaylistSuccess action', () => {
      const playlist: Playlist = { id: '1', name }
      const { value } = iterator.next(playlist)
      expect(value).toEqual(put(createPlaylistSuccess({ playlist })))
    })

    it('should be done', () => {
      const { done } = iterator.next(items)
      expect(done).toBeTruthy()
    })
  })

  describe('createPlaylistSaga - failure', () => {
    const name = 'NEW_PAYLIST'
    const iterator = createPlaylistSaga(newPlaylistAction({
      name
    }) as NewPlaylistAction)

    it('should call createPlaylist service', () => {
      const { value } = iterator.next()
      expect(value).toEqual(call(createPlaylist, name))
    })

    it('should be done after throwing exception', () => {
      ;(iterator as any).throw('ERROR')
      const { done } = iterator.next()
      expect(done).toBeTruthy()
    })
  })
})
