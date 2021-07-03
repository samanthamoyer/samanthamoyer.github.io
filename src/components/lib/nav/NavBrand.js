import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NAV_BRAND_BG_HOVER, NAV_BRAND_COLOR } from '../../../constants/theme';

const BrandFlexChild = styled.div`
  display: flex;
  flex:1 1 auto;
  justify-self: flex-start;
`;

const BrandLink = styled.a`
  color: ${NAV_BRAND_COLOR};
  font-size: 14pt;
  text-decoration: none;
  padding: 20px;
  &:hover {
    background-color: ${NAV_BRAND_BG_HOVER};
  }
`;

export default function NavBrand({ href, children }) {
  return (
    <BrandFlexChild>
      <BrandLink href={href}>
        {children}
      </BrandLink>
    </BrandFlexChild>
  );
}

NavBrand.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};