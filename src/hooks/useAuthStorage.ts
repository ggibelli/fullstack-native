import * as React from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useAuthStorage = () => {
  return React.useContext(AuthStorageContext);
};

export default useAuthStorage;
