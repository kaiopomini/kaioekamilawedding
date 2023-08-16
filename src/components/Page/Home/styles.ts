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

export const Text = styled.p`
  font-family: 'Dancing Script';
  color: white;
  font-size: 24px;
  text-align: center;

  span {
    font-family: 'Dancing Script';
    font-weight: bold;
  }
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
  padding: 0 20px;

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
`;

export const AfterCountdownContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 140px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
`;

export const TextButton = styled.div`
  font-family: 'Roboto';

  font-size: 1rem;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-top: 24px;
`;
