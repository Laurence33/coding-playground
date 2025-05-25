import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const el = document.getElementById('root');
const app = createRoot(el);

app.render(
  <Provider store={store}>
    <App />
  </Provider>
);