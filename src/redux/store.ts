import { Action, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/root'
import rootSaga from './sagas/root'
import { PlaylistsState } from './reducers/playlists'

const sagaMiddleware = createSagaMiddleware()

export interface IState {
  playlists: PlaylistsState
}

export interface ReduxAction extends Action {
  payload: any
}

export function makeStore(state?: IState) {
  const store = createStore(rootReducer, state, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}
