import { createContext } from "react";

interface ContextProps {
  prop1: boolean;
}

export const UIContext = createContext({} as ContextProps);
