import * as React from 'react'
import styled from 'styled-components'
import { BaseModal } from './BaseModal'
import { Playlist } from '../../utils/types'

const ChoosePlaylist = styled.p`
  font-size: 1.5rem;
`
const PlaylistName = styled.div`
  font-size: 1.5rem;
  color: #969bac;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    color: inherit;
  }
`

const sortByName = (el1: Playlist, el2: Playlist) => {
  if (el1.name < el2.name) {
    return -1
  }
  if (el1.name > el2.name) {
    return 1
  }
  return 0
}

interface Props {
  playlists: Playlist[]
  onClose: () => void
  onSelectedPlaylist: (id: string) => void
}

export const AddSongToPlaylistModal: React.SFC<Props> = ({
  playlists,
  onClose,
  onSelectedPlaylist
}) => {
  const setPlaylistHandler = (id: string) => {
    onSelectedPlaylist(id)
    onClose()
  }
  return (
    <BaseModal onClose={onClose}>
      <ChoosePlaylist>Choose playlist:</ChoosePlaylist>
      {playlists.sort(sortByName).map(playlist => (
        <PlaylistName
          onClick={() => setPlaylistHandler(playlist.id)}
          key={playlist.id}
        >
          {playlist.name}
        </PlaylistName>
      ))}
    </BaseModal>
  )
}
