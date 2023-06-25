import React, { useEffect, useState } from 'react';

import { CountdownContainer, TimeContainer, TimeSubtitle, TimeTitle } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  targetDate: Date;
}

interface LeftTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const counterItem = (title: string, subtitle: string) => {
  return (
    <TimeContainer>
      <div>
        <TimeTitle>{title}</TimeTitle>
      </div>
      <div>
        <TimeSubtitle>{subtitle}</TimeSubtitle>
      </div>
    </TimeContainer>
  );
};

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
      {counterItem(formatTimeValue(timeLeft.days), 'Dias')}
      {counterItem(formatTimeValue(timeLeft.hours), 'Horas')}
      {counterItem(formatTimeValue(timeLeft.minutes), 'Minutos')}
      {counterItem(formatTimeValue(timeLeft.seconds), 'Segundos')}
    </CountdownContainer>
  );
};

export default Countdown;
