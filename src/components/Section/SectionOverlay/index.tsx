import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';

import { ISection } from '../SectionsContext';
import useWrapperScroll from '../useWrapperScroll';
import { Container } from './styles';

interface Props {
  section: ISection;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>;

const SectionOverlay: React.FC<Props> = ({ section, children }) => {
  const { scrollY } = useWrapperScroll();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: section.sectionRef.current?.offsetTop ?? 0,
      offsetHeight: section.sectionRef.current?.offsetHeight ?? 0,
    } as SectionDimensions;
  }, [section.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(getSectionDimensions());

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [getSectionDimensions, section.sectionRef]);

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight,
  );
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0],
  );
  const pointerEvents = useTransform(opacity, (value) => (value > 0 ? 'auto' : 'none'));
  const zIndex = useTransform(opacity, (value) => (value > 0 ? 1 : -10));

  return <Container style={{ opacity, pointerEvents, zIndex }}>{children}</Container>;
};

export default SectionOverlay;
