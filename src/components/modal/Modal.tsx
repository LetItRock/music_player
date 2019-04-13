import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const modal =
  (document.getElementById('modal') as HTMLElement) ||
  (document.createElement('modal') as HTMLElement) // for testing purposes
const el = document.createElement('div') as HTMLElement

const ModalPortal: React.SFC<any> = ({ children }) => {
  React.useEffect(() => {
    modal.appendChild(el)
    return () => {
      modal.removeChild(el)
    }
  }, [])

  return ReactDOM.createPortal(children, el)
}

const ModalHolder = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal: React.SFC<any> = ({ children }) => (
  <ModalPortal>
    <ModalHolder>{children}</ModalHolder>
  </ModalPortal>
)
