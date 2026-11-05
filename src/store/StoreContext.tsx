import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, initialAppState } from './state';
import { AppAction } from './actions';
import { appReducer } from './reducer';

interface StoreContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useAppStore(): StoreContextValue {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useAppStore must be used within a StoreProvider');
  }
  return context;
}

export function useAppSelector<T>(selector: (state: AppState) => T): T {
  const { state } = useAppStore();
  return selector(state);
}

export function useAppDispatch(): React.Dispatch<AppAction> {
  const { dispatch } = useAppStore();
  return dispatch;
}
