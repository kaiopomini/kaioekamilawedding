import { styled } from 'styled-components';

export const TitleSection = styled.h2`
  font-family: 'Dancing Script';
  color: white;
  font-size: 56px;
  text-align: center;
  margin-top: 32px;
`;

export const SubtitleSection = styled.h6`
  font-family: 'Dancing Script';
  color: white;
  font-size: 32px;
  text-align: center;
  margin-top: 24px;
`;

export const Time = styled.p`
  font-family: 'Dancing Script';
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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

export const CountdowContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
