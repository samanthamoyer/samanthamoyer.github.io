import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-items: ${({ justify }) => justify};
  height: ${({ height }) => height ? height : 'inherit'};
`;

Column.defaultProps = {
  justify: 'flex-start',
}

export default Column;