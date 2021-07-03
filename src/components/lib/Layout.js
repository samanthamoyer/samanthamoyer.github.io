import './layout.css';
import styled from 'styled-components';
import { BG_LIGHT } from '../../constants/theme';

const Layout = styled.div`
  background-color: ${BG_LIGHT};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default Layout;