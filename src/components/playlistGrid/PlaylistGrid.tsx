import * as React from 'react'
import styled from 'styled-components'
import { Playlist } from '../'
import { Playlist as PlaylistType } from '../../utils/types'

const PlaylistGridHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
`

const calculatePos = (index: number) => {
  const gridRows = 4
  const itemsInGrid = 6
  const row = gridRows * Math.floor(index / itemsInGrid + 1)
  const pos = (index + 1) % itemsInGrid

  const rowPos =
    (pos === 1 && row - 3) ||
    (pos === 2 && `${row - 3} / span 2`) ||
    (pos === 3 && row - 2) ||
    (pos === 4 && `${row - 1} / span 2`) ||
    (pos === 5 && row - 1) ||
    (pos === 0 && row) ||
    0
  const columnPos =
    (pos === 1 && 1) ||
    (pos === 2 && 2) ||
    (pos === 3 && 1) ||
    (pos === 4 && 1) ||
    (pos === 5 && 2) ||
    (pos === 0 && 2) ||
    0

  return {
    row: rowPos,
    column: columnPos
  }
}

interface Props {
  playlists: PlaylistType[]
}
export const PlaylistGrid: React.SFC<Props> = ({ playlists }) => {
  return (
    <PlaylistGridHolder>
      {playlists.map((playlist, index) => {
        const { row, column } = calculatePos(index)
        return (
          <Playlist
            key={playlist.id}
            playlist={playlist}
            row={`${row}`}
            column={`${column}`}
          />
        )
      })}
    </PlaylistGridHolder>
  )
}
