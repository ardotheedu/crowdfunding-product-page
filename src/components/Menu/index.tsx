import React from 'react';
import { StyledMenu } from '../../styles/pages/index';

export default function Menu({ open }) {

  return (
    <StyledMenu open={open} >
        <a href="/">
            About
        </a>
        <a href="/">
            Discover
        </a>
        <a href="/">
            Get Started
        </a>
    </StyledMenu>
  )
}
