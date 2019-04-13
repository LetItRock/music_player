import { PlaylistsState, playlistsReducer } from '../playlists'
import {
  songAddedToPlaylistSuccess,
  fetchPlaylistSuccess,
  createPlaylistSuccess
} from '../../actions/actions'
import { Playlist } from '../../../utils/types'

describe('Playlists reducer', () => {
  const playlist: Playlist = {
    id: '1',
    name: 'Test playlist'
  }

  it('should set initial state', () => {
    const state = undefined
    const newState = playlistsReducer(state as any, { type: '' } as any)
    expect(newState.items).toHaveLength(0)
    expect(newState.items).not.toBeNull()
  })

  it('should handle default case', () => {
    const state: PlaylistsState = { items: [] }
    const newState = playlistsReducer(state, { type: '' } as any)
    expect(newState.items).toHaveLength(0)
  })

  it('should handle songAddedToPlaylistAction', () => {
    const state: PlaylistsState = { items: [] }
    const newState = playlistsReducer(
      state,
      songAddedToPlaylistSuccess({ playlist })
    )
    expect(newState.items).toHaveLength(1)
    expect(newState.items[0].id).toEqual(playlist.id)
    expect(newState.items[0].name).toEqual(playlist.name)
  })

  it('should handle songAddedToPlaylistAction when we have other playlists', () => {
    const state: PlaylistsState = { items: [{ id: '2', name: 'Playlist' }] }
    const newState = playlistsReducer(
      state,
      songAddedToPlaylistSuccess({ playlist })
    )
    const addedPlaylist = newState.items.find(
      el => el.id === playlist.id
    ) as Playlist
    expect(newState.items).toHaveLength(2)
    expect(addedPlaylist.id).toEqual(playlist.id)
    expect(addedPlaylist.name).toEqual(playlist.name)
  })

  it('should handle fetchPlaylistSuccessAction', () => {
    const state: PlaylistsState = { items: [] }
    const playlists = [playlist]
    const newState = playlistsReducer(
      state,
      fetchPlaylistSuccess({ playlists })
    )
    const addedPlaylist = newState.items.find(
      el => el.id === playlist.id
    ) as Playlist
    expect(newState.items).toHaveLength(1)
    expect(addedPlaylist.id).toEqual(playlist.id)
    expect(addedPlaylist.name).toEqual(playlist.name)
  })

  it('should handle createPlaylistSuccess', () => {
    const state: PlaylistsState = { items: [playlist] }
    const newState = playlistsReducer(
      state,
      createPlaylistSuccess({ playlist: { id: '2', name: 'TEST PLAYLIST' } })
    )
    const addedPlaylist = newState.items.find(el => el.id === '2') as Playlist
    expect(newState.items).toHaveLength(2)
    expect(addedPlaylist.id).toEqual('2')
    expect(addedPlaylist.name).toEqual('TEST PLAYLIST')
  })
})
