import React from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './componens/RepositoryList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;