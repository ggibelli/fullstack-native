import * as React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

const App: React.FC = () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};

export default App;
