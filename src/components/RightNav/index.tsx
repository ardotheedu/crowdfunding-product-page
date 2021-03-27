import React from 'react';
import styled from 'styled-components';

interface UlProps {
    open: boolean;
}
const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    color: #fff;
    & + li {
      margin-left: 7px;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      & + li {
        margin-left: 0;
      }
    }
  }
`;

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