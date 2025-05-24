import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const app = createRoot(el);

app.render(<App />);