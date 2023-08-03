import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  color: white;
  width: 110px;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const TimeTitle = styled.h2`
  font-size: 3rem;
`;

export const TimeSubtitle = styled.h6`
  font-size: 1.5rem;
`;
