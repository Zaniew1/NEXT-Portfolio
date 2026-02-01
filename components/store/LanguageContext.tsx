"use client"
import React, { createContext, useState, ReactNode } from "react";

type LanguageContextType = {
  isPolish: boolean;
  setIsPolish: (value: boolean) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  isPolish: false,
  setIsPolish: () => {},
});
type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isPolish, setIsPolish] = useState<boolean>(true);

  return (
    <LanguageContext.Provider value={{ isPolish, setIsPolish }}>
      {children}
    </LanguageContext.Provider>
  );
};
