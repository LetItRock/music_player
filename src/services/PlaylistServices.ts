import { Playlist } from './../utils/types.d'
import { generateId } from '../utils/stringUtils'
import { songs as allSongs, Song } from '../utils/songs'

export const items: Playlist[] = [
  {
    id: generateId(),
    name: 'Chillout'
  },
  {
    id: generateId(),
    name: 'Rock'
  },
  {
    id: generateId(),
    name: 'Coding'
  }
]

export const fetchPlaylists = async (): Promise<Playlist[]> => {
  const playlistStringified = localStorage.getItem('playlists')
  const savedPlaylist = playlistStringified && JSON.parse(playlistStringified)
  return savedPlaylist || items
}

export const createPlaylist = async (name: string): Promise<Playlist> => {
  const oldPlaylists = await fetchPlaylists()
  const playlist = { id: generateId(), name }
  const playlists = [...oldPlaylists, playlist]
  localStorage.setItem('playlists', JSON.stringify(playlists))
  return playlist
}

export const addSongToPlaylist = async (songId: string, playlistId: string) => {
  const playlists = await fetchPlaylists()
  const playlistToAdd = playlists.find(el => el.id === playlistId)
  const song = allSongs.find(el => el.id === songId) as Song
  if (playlistToAdd) {
    const songs = playlistToAdd.songs ? [...playlistToAdd.songs, song] : [song]
    playlistToAdd.songs = songs
  }
  localStorage.setItem('playlists', JSON.stringify(playlists))
  return playlistToAdd
}
