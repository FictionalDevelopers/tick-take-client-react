import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { checkToken } from '@app/features/auth/effects';

import Routes from './Routes';

function App() {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(checkToken());
      setIsAuthChecked(true);
    }
  }, [isAuthChecked, setIsAuthChecked, dispatch]);

  if (!isAuthChecked) {
    return null;
  }

  return (
    <Routes />
  );
}

export default App;
