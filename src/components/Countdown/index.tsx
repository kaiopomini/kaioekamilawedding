import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  targetDate: Date;
}

interface LeftTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const Countdown: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = (): LeftTime => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {} as LeftTime;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const formatTimeValue = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <CountdownContainer>
      <TimeContainer>
        <div>{formatTimeValue(timeLeft.days)}</div>
        <div>Days</div>
      </TimeContainer>
      <TimeContainer>
        <div>{formatTimeValue(timeLeft.hours)}</div>
        <div>Hours</div>
      </TimeContainer>
      <TimeContainer>
        <div>{formatTimeValue(timeLeft.minutes)}</div>
        <div>Minutes</div>
      </TimeContainer>
      <TimeContainer>
        <div>{formatTimeValue(timeLeft.seconds)}</div>
        <div>Seconds</div>
      </TimeContainer>
    </CountdownContainer>
  );
};

export default Countdown;
