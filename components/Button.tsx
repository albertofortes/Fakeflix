import react, { FC } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  border-radius: .4rem;
  background-color: rgba(109, 109, 110, 0.7);
  color: white;
  padding: 1rem 1.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;

  &:hover {
    background-color: rgba(109, 109, 110, 0.4)
  }

  .icon {
    font-size: 110%;
    vertical-align: middle;
    margin-right: .4rem;
  }
`

const Button: FC = ({ children }) => {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  )
}

export default Button