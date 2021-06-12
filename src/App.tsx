import React from 'react';
import CreateGlobalStyle from './styles/global';
import Home from './components/Pages/Home';
const App: React.FC = () => (
  <div>
    <CreateGlobalStyle />
    <Home />
  </div>
);

export default App;
