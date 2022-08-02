import React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';

export default function HomePage() {
  const { toggle } = useDarkMode();
  return (
    <div>
      Home Page
      <Link to="/login">login</Link>
      <Button onClick={toggle}>toggle</Button>
    </div>
  );
}
