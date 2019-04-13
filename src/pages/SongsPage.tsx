import * as React from 'react'
import styled from 'styled-components'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { songs } from '../utils/songs'
import { IState } from '../redux/store'
import {
  fetchPlaylistsAction,
  addSongToPlaylistAction
} from '../redux/actions/actions'
import { Topbar, SongComponent, AddSongToPlaylistModal } from '../components'
import { Playlist } from '../utils/types'

const Holder = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const SongsPage = () => {
  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = React.useState(false)
  const [songId, setSongId] = React.useState('')
  const onClose = () => setModalVisible(false)
  const onAddToPlaylist = (id: string) => {
    setSongId(id)
    setModalVisible(true)
  }
  const onSelectedPlaylistHandler = (playlistId: string) => {
    dispatch(addSongToPlaylistAction({ songId, playlistId }))
  }

  React.useEffect(() => {
    dispatch(fetchPlaylistsAction())
  }, [])

  const playlists: Playlist[] = useMappedState(
    React.useCallback((state: IState) => state.playlists.items, [])
  )
  console.log({ playlists })

  return (
    <Holder>
      <Topbar name="Songs" />
      {songs.map(song => (
        <SongComponent
          key={song.id}
          song={song}
          onAddToPlaylist={onAddToPlaylist}
        />
      ))}
      {isModalVisible && (
        <AddSongToPlaylistModal
          playlists={playlists}
          onClose={onClose}
          onSelectedPlaylist={onSelectedPlaylistHandler}
        />
      )}
    </Holder>
  )
}
