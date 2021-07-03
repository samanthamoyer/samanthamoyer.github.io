import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PRIMARY, TERTIARY } from '../../../constants/theme';

const GridTileWrapper = styled.div`
  width: calc(50% - 20px);
  margin: 10px;
  background-color: ${TERTIARY};
`;

const GridTileAnchor = styled.a`
  background-color: ${PRIMARY};
  display: inline-block;
  height: calc(100% - 20px);
  padding: 10px;

  transition: opacity .5s ease-in-out;
  -moz-transition: opacity .5s ease-in-out;
  -webkit-transition: opacity .5s ease-in-out;
  text-decoration: none;
  
  &:hover {
    opacity: 0.5;
  }
`;

export default function GridTile({ children, href }) {
  return (
    <GridTileWrapper>
      <GridTileAnchor href={href}>
        {children}
      </GridTileAnchor>
    </GridTileWrapper>
  );
};

GridTile.propTypes = {
  href: PropTypes.string,
};