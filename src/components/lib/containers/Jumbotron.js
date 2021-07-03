import styled from 'styled-components';
import { PRIMARY, ON_LIGHT_TEXT_COLOR_SECONDARY } from '../../../constants/theme';

const Jumbotron = styled.div`
  background-color: ${PRIMARY};
  padding: 40px;

  h1 {
    font-size: 40pt;
    color: ${ON_LIGHT_TEXT_COLOR_SECONDARY};
  }

  p,span {
    font-size: 16pt;
    color: ${ON_LIGHT_TEXT_COLOR_SECONDARY};
  }
`;

export default Jumbotron;