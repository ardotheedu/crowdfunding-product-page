import React from 'react';
import { Ul } from './styles'

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>
      <li>Discover</li>
      <li>Get Started</li>
    </Ul>
  )
}

export default RightNav