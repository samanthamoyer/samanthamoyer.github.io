import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NAV_BRAND_BG_HOVER, NAV_TEXT_COLOR } from '../../../constants/theme';

const Link = styled.a`
  color: ${NAV_TEXT_COLOR};
  text-decoration: none;
  padding: 22px;
  &:hover {
    background-color: ${NAV_BRAND_BG_HOVER};
  }
`;

export default function NavLink({ href, children }) {
  return (
      <Link href={href}>
        {children}
      </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};