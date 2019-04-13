import * as React from 'react'
import styled from 'styled-components'
import { Playlist as PlaylistType } from '../../utils/types'

interface PlaylistHolderProps {
  row: string
  column: string
}
const PlaylistHolder = styled.div<PlaylistHolderProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  min-height: ${({ row }) => (row.length > 1 ? '32rem' : '15rem')};
  background-color: white;
  box-shadow: 0 0 50px 0 #eef0f5;
  border: 1px solid #eef0f5;

  &:hover {
    box-shadow: 0 0 50px 0 #e3e5eb;
  }
`
const PlaylistName = styled.span`
  color: #969bac;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const Song = styled.span`
  font-size: 1rem;
  color: #969bac;
  margin-bottom: 0.5rem;
  max-width: 20rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface PlaylistProps {
  row: string
  column: string
  playlist: PlaylistType
}

export const Playlist: React.SFC<PlaylistProps> = ({
  playlist,
  row,
  column
}) => (
  <PlaylistHolder column={column} row={row}>
    <PlaylistName>{playlist.name}</PlaylistName>
    {playlist.songs &&
      playlist.songs.map(song => {
        const text = `${song.artist} - ${song.name}`
        const key = text.replace(' ', '_')
        return <Song key={key}>{text}</Song>
      })}
  </PlaylistHolder>
)
