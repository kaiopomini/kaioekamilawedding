import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  text-align: center;
  padding-top: 48px;
`;

export const Title = styled.h2`
  font-family: 'Dancing Script';
  color: #000000;
  font-size: 32px;
  text-align: center;
  margin-bottom: 24px;
`;

export const Message = styled.h6`
  font-family: 'Roboto';
  color: #000000;
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
  text-align: left;
  margin-left: 56px;
  line-height: 30px;
`;
