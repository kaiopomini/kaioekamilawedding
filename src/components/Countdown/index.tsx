import React, { useEffect, useState } from 'react';

import img from '../../../resources/images/noivos.png';
import {
  CountdownContainer,
  Image,
  TimeContainer,
  TimeSubtitle,
  TimeTitle,
} from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  targetDate: Date;
}

interface LeftTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
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
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, finished: false };

    if (difference > 0) {
      timeLeft = {
        ...timeLeft,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        ...timeLeft,
        finished: true,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const formatTimeValue = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (timeLeft.finished) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {timeLeft.finished ? (
        <Image src={img} alt="noivos" />
      ) : (
        <CountdownContainer>
          {counterItem(formatTimeValue(timeLeft.days), 'Dias')}
          {counterItem(formatTimeValue(timeLeft.hours), 'H')}
          {counterItem(formatTimeValue(timeLeft.minutes), 'M')}
          {counterItem(formatTimeValue(timeLeft.seconds), 'S')}
        </CountdownContainer>
      )}
    </>
  );
};

export default Countdown;
