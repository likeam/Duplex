import * as React from 'react';
import Header from './components/Header/Header';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Header />
  );
};

export default App;
