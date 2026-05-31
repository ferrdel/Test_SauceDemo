// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// cypress/support/e2e.js

Cypress.on('uncaught:exception', (err, runnable) => {
  // Evita que Cypress falle el test por errores internos de telemetría
  return false;
});

// Ocultar las peticiones fallidas de Backtrace en la interfaz de Cypress
const app = window.top;
if (app && !app.document.head.querySelector('[data-cy-hide-backtrace]')) {
  const style = app.document.createElement('style');
  style.type = 'text/css';
  style.setAttribute('data-cy-hide-backtrace', '');
  style.innerHTML = '.command-name-xhr:contains("backtrace.io") { display: none; }';
  app.document.head.appendChild(style);
}