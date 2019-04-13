import * as React from 'react'
import styled from 'styled-components'

const TopbarHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
const PageName = styled.span`
  font-size: 2rem;
  font-weight: bold;
`
const ActionButtons = styled.div``

interface TopbarProps {
  name: string
  renderActions?: () => React.ReactElement | React.ReactElement[]
}

export const Topbar: React.SFC<TopbarProps> = ({ name, renderActions }) => (
  <TopbarHolder>
    <PageName>{name}</PageName>
    <ActionButtons>{renderActions && renderActions()}</ActionButtons>
  </TopbarHolder>
)
