import * as React from 'react'
import styled from 'styled-components'
import { Topbar, PlaylistGrid } from '../components'
import { Button } from '../components/ui'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { IState } from '../redux/store'
import {
  newPlaylistAction,
  fetchPlaylistsAction
} from '../redux/actions/actions'
import { CreateNewPlaylistModal } from '../components/modal'
import { Playlist } from '../utils/types'

const Holder = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const PlaylistsPage = () => {
  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = React.useState(false)

  const createNewPlaylist = (name: string) =>
    dispatch(newPlaylistAction({ name }))
  const closeHandler = () => setModalVisible(false)
  const newPlaylistHandler = () => setModalVisible(true)

  React.useEffect(() => {
    dispatch(fetchPlaylistsAction())
  }, [])

  const playlists: Playlist[] = useMappedState(
    React.useCallback((state: IState) => state.playlists.items, [])
  )

  return (
    <Holder>
      <Topbar
        name="Playlist"
        renderActions={() => (
          <Button id="test_new_playlist" onClick={newPlaylistHandler}>
            New playlist
          </Button>
        )}
      />
      <PlaylistGrid playlists={playlists} />
      {isModalVisible && (
        <CreateNewPlaylistModal
          onClose={closeHandler}
          onCreateClick={createNewPlaylist}
        />
      )}
    </Holder>
  )
}
