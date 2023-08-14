import "./App.css";

import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("TEST-...");

function App() {
  return (
    <div className="App">
      <Wallet
        initialization={{
          preferenceId: "8640843-080e2b2f-75a6-4cfa-8724-a33a5b6c1a83",
        }}
      />
    </div>
  );
}

export default App;
