import { createContext } from "react";
import { ContextType } from "./App";

const ThemeContext = createContext<ContextType | null>(null);

export default ThemeContext;
