import React from 'eact';
import { Provider } from 'eact-redux';
import { createStore } from 'edux';
import App from './App';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Index;

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
