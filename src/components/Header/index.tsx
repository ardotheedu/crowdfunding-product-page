import React from 'react';
import Menu  from '../Menu'

import {  Header, HeaderContent, StyledMenu } from '../../styles/pages/index';

export default function HeaderComponent() {
  return (
    <Header>
        <HeaderContent>
        <img src="/logo.svg"></img>
        <Menu open={open} />
        </HeaderContent>
    </Header>
  );
}