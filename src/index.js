import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import { createStore } from 'redux';
import movies from './reducers';



const store = createStore(movies);
console.log('store', store);
console.log('beforestate', store.getState());

store.dispatch({
  type:'ADD_MOVIES',
  movies: [{name:'supermab'}]
});
console.log('afterstate', store.getState());





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


