/* eslint-disable react/react-in-jsx-scope */
import { ProvideAuth } from './hooks/useAuth/useAuth';

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <h1>App</h1>
      </div>
    </ProvideAuth>
  );
}

export default App;
