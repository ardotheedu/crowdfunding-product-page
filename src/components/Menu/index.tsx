import React from 'react';
import Burger from '../Burger';

import {Nav} from './styles'

export default function Navbar() {

  return (
    <Nav >
      <div className="logo">
        <img src="/logo.svg"></img>
      </div>
      <Burger />
    </Nav>
  )
}
