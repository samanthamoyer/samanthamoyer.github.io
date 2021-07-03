import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  justify-items: space-between;
`;

const StyledCell = styled.div`
  width: ${({ widthPercent }) => widthPercent}%;
`;

export default function Row({ children }) {
  const count = React.Children.count(children);
  const widthPercentagePerChild = count > 0 ? 100 / count : 100;

  return (
    <StyledRow>
      {React.Children.map(children, child => (
        <StyledCell widthPercent={widthPercentagePerChild}>
          {child}
        </StyledCell>
      ))}
    </StyledRow>
  );
};