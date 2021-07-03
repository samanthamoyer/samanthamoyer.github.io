import React from 'react';
import styled from 'styled-components';
import { NAV_BG } from '../../../constants/theme';
import ContentWrapper from '../../ContentWrapper';

const NavContainer = styled.div`
  width: 100%;
  background-color: ${NAV_BG};
`;

const NavItemsContainer = styled.div`
  margin-left: -20px;
  margin-right: -20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export default function Navbar({ children}) {
  return (
    <NavContainer>
      <ContentWrapper>
        <NavItemsContainer>
        {children}
        </NavItemsContainer>
      </ContentWrapper>
    </NavContainer>
  )
}