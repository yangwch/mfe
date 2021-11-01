import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(
    <App history={history} onSignIn={onSignIn} />,
    el
  );

  return {
    onParentNavigate(location) {
      const { pathname: nextPathname } = location;
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
        console.log('Container just navigate', nextPathname);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-dev-root');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
