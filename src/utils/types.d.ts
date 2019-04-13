import { Song } from './songs'

export interface Playlist {
  id: string
  name: string
  songs?: Song[]
}
