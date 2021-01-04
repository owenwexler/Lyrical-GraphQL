import React from 'react';

import Title from './Title';

const App = ( { children }) => {
  return (
    <div className="container">
      <Title />
      {children}
    </div>
  )
}

export default App;
