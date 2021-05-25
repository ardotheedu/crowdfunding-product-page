import styled from 'styled-components';

interface UlProps {
  open: boolean;
}
export const Ul = styled.ul<UlProps>`
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
    background-color: hsl(0, 0%, 0%);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 270px;
    z-index: 1;
    height: 110vh;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      & + li {
        margin-left: 0;
      }
    }
  }
`;
