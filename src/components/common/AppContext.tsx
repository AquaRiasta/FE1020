import { createContext } from "react";

const AppContext = createContext({
  selection: "landing",
});

export default AppContext;