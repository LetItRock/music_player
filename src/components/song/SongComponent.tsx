import * as React from 'react'
import styled from 'styled-components'
import { Song } from '../../utils/songs'

const SongHolder = styled.div`
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 50px 0 #eef0f5;
  border: 1px solid #eef0f5;

  &:hover {
    box-shadow: 0 0 50px 0 #e3e5eb;
  }
`
const SongImage = styled.img`
  min-width: 2rem;
  height: 2rem;
  border-radius: 10px;
  margin-right: 2rem;
`
const SongInfo = styled.div`
  font-size: 1rem;
  max-width: 20rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #969bac;
  margin-right: 2rem;
`
const SongActions = styled.div`
  color: #969bac;
  margin-right: 2rem;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const AddToPlaylist = styled.div`
  width: 1rem;
  height: 1rem;
  background: url('./images/add.svg');
  margin-left: 1rem;
`

interface SongProps {
  song: Song
  onAddToPlaylist: (id: string) => void
}

export const SongComponent: React.SFC<SongProps> = ({
  song: { id, name, artist, duration, image },
  onAddToPlaylist
}) => {
  const onClickHandler = () => onAddToPlaylist(id)
  return (
    <SongHolder onClick={onClickHandler}>
      <SongImage src={image.url} alt={name} />
      <SongInfo>{`${artist} - ${name}`}</SongInfo>
      <SongActions>
        {duration}
        <AddToPlaylist />
      </SongActions>
    </SongHolder>
  )
}
