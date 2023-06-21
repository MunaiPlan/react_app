import React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';

import Sidebar from '~/components/Sidebar/Sidebar';

export default function HomePage() {
  const { toggle } = useDarkMode();
  return (
    <div>
      <Sidebar />
      Munai Plan
      <Link to="/login">login</Link>
      <Button onClick={toggle}>toggle</Button>
    </div>
  );
}

// AA00C7GZ3F
