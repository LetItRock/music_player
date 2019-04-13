import React, { Component } from 'react'
import styled from 'styled-components'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { StoreContext } from 'redux-react-hook'

import { Routes } from './routes/Routes'
import { makeStore } from './redux/store'
import { ThemeProvider, theme } from './components/ui/styled'
import { Sidebar } from './components'
import { GlobalStyles } from './components/ui'

const history = createBrowserHistory()
const store = makeStore()

const AppHolder = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <>
            <GlobalStyles />
            <StoreContext.Provider value={store}>
              <AppHolder>
                <Sidebar />
                <Routes />
              </AppHolder>
            </StoreContext.Provider>
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
