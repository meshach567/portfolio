
import { createContext, useReducer } from "react";

interface ThemeState {
  darkMode: boolean;
}

interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<any>;
}

// Initial state
const initialState: ThemeState = { darkMode: false };

// Create the context with the initial state
export const themeContext = createContext<ThemeContextType>({
  state: initialState,
  dispatch: () => null, // This is a placeholder dispatch function
});

const themeReducer = (state: ThemeState, action: any): ThemeState => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props: any) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};