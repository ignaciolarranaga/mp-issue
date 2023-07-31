import './App.css';

import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago('TEST-...');

function App() {
  return (
    <div className="App">
      <Wallet initialization={{ preferenceId: '8640843-fc2c72db-dcb6-43c1-a515-8d6463c0278c' }} />
    </div>
  );
}

export default App;
