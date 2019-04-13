import {} from './../actionTypes'
import {
  PlaylistsActionTypes,
  PlaylistNamePayload,
  PlaylistsPayload,
  PlaylistPayload,
  NEW_PLAYLIST,
  NEW_PLAYLIST_SUCCESS,
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_SUCCESS,
  SongActionTypes,
  SongAndPlaylistPayload,
  ADD_SONG_TO_PLAYLIST,
  SONG_ADDED_TO_PLAYLIST_SUCCESS
} from '../actionTypes'

export function fetchPlaylistsAction(): PlaylistsActionTypes {
  return {
    type: FETCH_PLAYLISTS,
    payload: null
  }
}

export function newPlaylistAction(
  playlistPayload: PlaylistNamePayload
): PlaylistsActionTypes {
  return {
    type: NEW_PLAYLIST,
    payload: playlistPayload
  }
}

export function fetchPlaylistSuccess(
  playlistPayload: PlaylistsPayload
): PlaylistsActionTypes {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: playlistPayload
  }
}

export function createPlaylistSuccess(
  payload: PlaylistPayload
): PlaylistsActionTypes {
  return {
    type: NEW_PLAYLIST_SUCCESS,
    payload
  }
}

export function addSongToPlaylistAction(
  songAndPlaylistPayload: SongAndPlaylistPayload
): SongActionTypes {
  return {
    type: ADD_SONG_TO_PLAYLIST,
    payload: songAndPlaylistPayload
  }
}

export function songAddedToPlaylistSuccess(
  payload: PlaylistPayload
): SongActionTypes {
  return {
    type: SONG_ADDED_TO_PLAYLIST_SUCCESS,
    payload
  }
}
