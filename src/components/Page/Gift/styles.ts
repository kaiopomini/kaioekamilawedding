import { styled } from 'styled-components';

export const Container = styled.div`
  text-align: center;

  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 48px 56px 0 56px;
  @media (max-width: 768px) {
    padding: 16px 16px 0 16px;
  }

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

export const Title = styled.h1`
  font-family: 'Dancing Script';
  color: #000000;
  font-size: 32px;
  text-align: left;
  margin-bottom: 24px;
  color: #fafafa;
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
  color: #fafafa;
`;

export const Text = styled.div`
  font-family: 'Roboto';

  font-size: 1rem;
  text-align: center;

  text-align: left;

  color: #fafafa;

  height: 100%;
  max-width: 100%;

  overflow: auto;
  padding: 0 0 24px 0;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const TextButton = styled.div`
  font-family: 'Roboto';

  font-size: 1rem;
  text-align: center;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16px 0 24px 0;
  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

export const QRCode = styled.div`
  margin: 16px;
  padding: 12px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
`;

export const SuccessIcon = styled.span`
  margin-left: 10px;
`;
