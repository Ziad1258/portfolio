// create a new context
import { createContext, useState } from "react";

export const MainContext = createContext(null);
export default function MainProvider({ children }) {
  const [active, setActive] = useState("");
  const values = { active, setActive };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}
