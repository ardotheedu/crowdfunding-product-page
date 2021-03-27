import React from 'react';
import Burger from '../Burger';
import styled from 'styled-components';

export const Nav = styled.nav`
  @media (max-width: 768px) {
    padding: 30px 0;
    .logo {
      padding: 15px 0;
      margin: 0 20px;
      img {
        height: 2.1rem;
      }
    }
  }
  @media (min-width: 1000px) {
    width: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .logo {
      padding: 15px 0;
    }
  }
`;

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
