import React from 'react';

import { ProvideAuth } from './hooks/useAuth/useAuth';
import Router from './pages/Router';

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Router />
      </div>
    </ProvideAuth>
  );
}

export default App;
