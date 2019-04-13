import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { StoreContext } from 'redux-react-hook'
import { PlaylistsPage } from '../PlaylistsPage'
import { makeStore, IState } from '../../redux/store'

const state: IState = {
  playlists: {
    items: [{ id: '1', name: 'Playlist' }]
  }
}
const store = makeStore(state)

const wrapInProvider = (el: React.ReactElement) => (
  <StoreContext.Provider value={store}>{el}</StoreContext.Provider>
)

describe('PlaylistPage', () => {
  const PlaylistPageWrapped = wrapInProvider(<PlaylistsPage />)
  const el = mount(PlaylistPageWrapped)
  const topbar = el.find('Topbar')
  const playlistGrid = el.find('PlaylistGrid')

  it('should render without modal', () => {
    // should have topbar and playlist grid
    expect(topbar).toHaveLength(1)
    expect(playlistGrid).toHaveLength(1)
    // modal shouldn't be visible
    expect(el.find('CreateNewPlaylistModal')).toHaveLength(0)

    const newPlaylistBtn = topbar.find('div#test_new_playlist')
    expect(newPlaylistBtn).toHaveLength(1)
  })

  it('should show modal', () => {
    // still should be visible grid
    expect(playlistGrid).toHaveLength(1)

    // find new playlist button and click
    const newPlaylistBtn = topbar.find('div#test_new_playlist')
    expect(newPlaylistBtn).toHaveLength(1)
    act(() => {
      const onClick = newPlaylistBtn.props().onClick as any
      onClick()
    })
    el.update()

    expect(el.find('CreateNewPlaylistModal')).toHaveLength(1)
  })
})
