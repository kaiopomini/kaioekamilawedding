import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 180px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  color: white;
  width: 110px;
`;

export const TimeTitle = styled.h2`
  font-size: 3rem;
`;

export const TimeSubtitle = styled.h6`
  font-size: 1.5rem;
`;
