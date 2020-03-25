import React from 'react';

import { useLogout } from '@app/features/auth/hooks';

function Dashboard() {
  const logout = useLogout();
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
