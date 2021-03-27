import React from 'react';
import Menu  from '../Menu'

import { Header, HeaderContent} from '../../styles/pages/index';

export default function HeaderComponent() {
  return (
    <Header>
        <Menu />
    </Header>
  );
}