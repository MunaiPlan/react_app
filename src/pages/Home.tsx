import React from 'react';

import { Button } from '@mui/material';
import { useDarkMode } from 'usehooks-ts';

export default function HomePage() {
  const { toggle } = useDarkMode();
  return (
    <div>
      Home Page
      <Button onClick={toggle}>toggle</Button>
    </div>
  );
}
