import React, { ReactNode } from 'react';

export interface ISection {
  sectionName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface SectionsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredSections: ISection[];
  registerSection: (section: ISection) => void;
  unregisterSection: (sectionName: string) => void;
  getSectionByName: (sectionName: string) => ISection | null;
}

// Export with default values
export default React.createContext<SectionsContext>({} as SectionsContext);
