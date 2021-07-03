import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: ${({ narrow }) => narrow ? '500px' : '800px'};
  margin-left: auto;
  margin-right: auto;
`;

export default ContentWrapper;
