import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const env = import.meta.env

const contextOptions = {
  baseUrl: "https://app-dld48pr803pb.frontegg.com",
  clientId: "b01adc65-a7fc-4f47-b039-3850de10807a
};

const authOptions = {
  keepSessionAlive: true
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <FronteggProvider contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>
);
