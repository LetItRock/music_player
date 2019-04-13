import * as React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Holder = styled.aside`
  width: 20rem;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.grey};
`
const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  color: #969bac;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    color: inherit;
  }
`

export const Sidebar = () => (
  <Holder>
    <Link to="/">Songs</Link>
    <Link to="/playlists">Playlists</Link>
  </Holder>
)
