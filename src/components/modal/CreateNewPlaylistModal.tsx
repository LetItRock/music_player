import * as React from 'react'
import styled from 'styled-components'
import { Button, Input } from '../ui'
import { BaseModal } from './BaseModal'

const PlaylistName = styled.p`
  font-size: 1.5rem;
`
const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`
const Empty = styled.div`
  height: 4.5rem;
`

interface Props {
  onClose: () => void
  onCreateClick: (name: string) => void
}

export const CreateNewPlaylistModal: React.SFC<Props> = ({
  onClose,
  onCreateClick
}) => {
  const inputEl = React.useRef<HTMLInputElement>() as React.MutableRefObject<
    HTMLInputElement
  >
  const submitHandler = () => {
    const name = inputEl.current && inputEl.current.value
    onCreateClick(name as string)
    onClose()
  }
  return (
    <BaseModal onClose={onClose}>
      <PlaylistName>Playlist name:</PlaylistName>
      <Input ref={inputEl} type="text" />
      <Empty />
      <SubmitButton onClick={submitHandler}>Create</SubmitButton>
    </BaseModal>
  )
}
