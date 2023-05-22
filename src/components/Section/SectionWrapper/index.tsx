import React, { useCallback, useRef, useState } from 'react';

import SectionOverlay from '../SectionOverlay';
import SectionsContext, { ISection } from '../SectionsContext';
import { Container, OverlaysRoot } from './styles';

const SectionWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredSections, setRegisteredSections] = useState<ISection[]>([]);

  const registerSection = useCallback((section: ISection) => {
    setRegisteredSections((state) => [...state, { ...section }]);
  }, []);

  const unregisterSection = useCallback((sectionName: string) => {
    setRegisteredSections((state) =>
      state.filter((model) => model.sectionName !== sectionName),
    );
  }, []);

  const getSectionByName = useCallback(
    (sectionName: string) => {
      return registeredSections.find((item) => item.sectionName === sectionName) || null;
    },
    [registeredSections],
  );

  return (
    <SectionsContext.Provider
      value={{
        wrapperRef,
        registeredSections,
        registerSection,
        unregisterSection,
        getSectionByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredSections.map((item) => (
            <SectionOverlay key={item.sectionName} section={item}>
              {item.overlayNode}
            </SectionOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </SectionsContext.Provider>
  );
};

export default SectionWrapper;
