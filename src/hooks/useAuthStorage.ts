import * as React from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';

type Action = { type: 'increment' } | { type: 'decrement' };
type Dispatch = (action: Action) => void;
type State = { count: number };

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const useAuthStorage = () => {
  return React.useContext(AuthStorageContext);
};

export default useAuthStorage;
