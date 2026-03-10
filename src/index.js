import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
function startApp() {
  const loader = document.getElementById('font-loader');
  if (loader) {
    loader.style.display = 'none';
  }
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
// Если браузер поддерживает Font Loading API
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(startApp);
} else {
  // Фолбэк: если API нет — запускаем сразу
  startApp();
}
