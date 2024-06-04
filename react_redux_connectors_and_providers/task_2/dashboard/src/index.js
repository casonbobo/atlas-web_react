import React from 'eact';
import { Provider } from 'eact-redux';
import { createStore, applyMiddleware } from 'edux';
import App from './App';
import thunk from 'edux-thunk';
import rootReducer from './reducers';
import uiReducer from './reducers/uiReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default store;

//Now I guess we need them to not be classes
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
