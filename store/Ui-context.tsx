'use client'
import React, { useState } from "react";
export type ContextPropsType = {
  children: React.ReactNode;
};
export type UIContextType = {
  navPage: number;
  setNavPage: (number: number) => void;
};
export const UIContext = React.createContext<UIContextType>({
    navPage: 0,
    setNavPage: () => {}
  });

export const UIContextProvider = (props: ContextPropsType) => {
  const [navPage, setNavPage] = useState<number>(0);
 
  return (
    <UIContext.Provider
      value={{
        navPage: navPage,
        setNavPage: setNavPage,

      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};