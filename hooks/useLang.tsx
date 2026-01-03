import { LangContext } from "@/store/Lang-context";
import { useContext } from "react";

export function useLang() {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error('useLang must be used within LangContextProvider');
  }

  return context;
}