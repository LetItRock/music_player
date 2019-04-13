import { FETCH_PLAYLISTS_SUCCESS } from './../actionTypes'
import { Playlist } from '../../utils/types'
import {
  PlaylistsActionTypes,
  SongActionTypes,
  NEW_PLAYLIST_SUCCESS,
  SONG_ADDED_TO_PLAYLIST_SUCCESS
} from '../actionTypes'

export interface PlaylistsState {
  items: Playlist[]
}

const INITIAL_STATE: PlaylistsState = {
  items: []
}

export const playlistsReducer = (
  state = INITIAL_STATE,
  action: PlaylistsActionTypes | SongActionTypes
): PlaylistsState => {
  switch (action.type) {
    case NEW_PLAYLIST_SUCCESS:
    case SONG_ADDED_TO_PLAYLIST_SUCCESS: {
      const { playlist } = action.payload
      const oldPlaylists = state.items.filter(
        playlistEl => playlistEl.id !== playlist.id
      )
      return {
        items: [...oldPlaylists, playlist]
      }
    }
    case FETCH_PLAYLISTS_SUCCESS: {
      return {
        items: [...action.payload.playlists]
      }
    }
    default:
      return state
  }
}
