import * as React from 'react'
import { Modal } from './Modal'
import styled from 'styled-components'

const ModalHolder = styled.div`
  width: 50vw;
  border-radius: 10px;
  padding: 3rem;
  background: white;
  position: relative;
`
const CloseButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background: url('./images/close.svg');
  cursor: pointer;
`

interface BaseModalProps {
  onClose: () => void
}
export const BaseModal: React.SFC<BaseModalProps> = ({ onClose, children }) => (
  <Modal>
    <ModalHolder>
      <CloseButton onClick={onClose} />
      {children}
    </ModalHolder>
  </Modal>
)
