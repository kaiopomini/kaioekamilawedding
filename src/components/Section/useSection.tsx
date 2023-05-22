import React, { useCallback, useEffect } from 'react';

import SectionsContext from './SectionsContext';

export default function useSection(sectionName: string) {
  const { registerSection, unregisterSection, getSectionByName } =
    React.useContext(SectionsContext);

  useEffect(() => () => unregisterSection(sectionName), [sectionName, unregisterSection]);

  const getSection = useCallback(
    () => getSectionByName(sectionName),
    [getSectionByName, sectionName],
  );

  return {
    registerSection,
    getSection,
  };
}
