import React from 'react';

const AppContext = React.createContext({
  locale: 'es',
  setLocale: () => null
});

export default AppContext;
