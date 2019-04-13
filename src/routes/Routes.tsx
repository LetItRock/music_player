import * as React from 'react'
import { Switch, Route } from 'react-router'
import { SongsPage } from '../pages/SongsPage'
import { PlaylistsPage } from '../pages/PlaylistsPage'

export const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={SongsPage} />
    <Route exact={true} path="/playlists" component={PlaylistsPage} />
  </Switch>
)
