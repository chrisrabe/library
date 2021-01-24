import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from 'components/common/ErrorBoundary';
import AppThemeProvider from 'components/common/AppThemeProvider';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <ErrorBoundary>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
