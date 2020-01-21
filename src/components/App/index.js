import React from 'react';

import Navigation from '../Navigation'
import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <main>
      <Navigation />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
