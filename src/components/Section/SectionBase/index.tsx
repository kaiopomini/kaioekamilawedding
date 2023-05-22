import React, { useEffect, useRef } from 'react';

import useModel from '../useSection';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  sectionName: string;
  overlayNode: React.ReactNode;
}

const SectionBase: React.FC<Props> = ({
  sectionName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerSection } = useModel(sectionName);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      registerSection({
        sectionName,
        overlayNode,
        sectionRef: ref,
      });
    }
  }, [children, sectionName, overlayNode, registerSection]);

  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  );
};

export default SectionBase;
