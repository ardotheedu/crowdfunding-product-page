import React from 'react';
import Menu  from '../Menu'

import { Header, HeaderContent} from '../../styles/pages/index';

export default function HeaderComponent() {
  return (
    <Header>
        <HeaderContent>
            <img src="/logo.svg"></img>
            <Menu />
        </HeaderContent>
    </Header>
  );
}