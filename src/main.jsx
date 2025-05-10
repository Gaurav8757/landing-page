import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './utils/i18n';
import App from './App.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>,
)
