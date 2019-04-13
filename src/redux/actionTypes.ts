import { Playlist } from './../utils/types.d'
import { ReduxAction } from './store'

export const NEW_PLAYLIST = 'NEW_PLAYLIST'
export const NEW_PLAYLIST_SUCCESS = 'NEW_PLAYLIST_SUCCESS'
export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS'

export interface PlaylistNamePayload {
  name: string
}

export interface PlaylistsPayload {
  playlists: Playlist[]
}

export interface PlaylistPayload {
  playlist: Playlist
}

export interface NewPlaylistAction extends ReduxAction {
  type: typeof NEW_PLAYLIST
  payload: PlaylistNamePayload
}

export interface NewPlaylistSuccessAction extends ReduxAction {
  type: typeof NEW_PLAYLIST_SUCCESS
  payload: PlaylistPayload
}

export interface FetchPlaylistsAction extends ReduxAction {
  type: typeof FETCH_PLAYLISTS
  payload: null
}

export interface FetchPlaylistsSuccessAction extends ReduxAction {
  type: typeof FETCH_PLAYLISTS_SUCCESS
  payload: PlaylistsPayload
}

export type PlaylistsActionTypes =
  | NewPlaylistAction
  | FetchPlaylistsAction
  | FetchPlaylistsSuccessAction
  | NewPlaylistSuccessAction

export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST'
export const SONG_ADDED_TO_PLAYLIST_SUCCESS = 'SONG_ADDED_TO_PLAYLIST_SUCCESS'

export interface SongAndPlaylistPayload {
  songId: string
  playlistId: string
}

export interface AddSongToPlaylistAction extends ReduxAction {
  type: typeof ADD_SONG_TO_PLAYLIST
  payload: SongAndPlaylistPayload
}

export interface SongAddedToPlaylistSuccessAction extends ReduxAction {
  type: typeof SONG_ADDED_TO_PLAYLIST_SUCCESS
  payload: PlaylistPayload
}

export type SongActionTypes =
  | AddSongToPlaylistAction
  | SongAddedToPlaylistSuccessAction
