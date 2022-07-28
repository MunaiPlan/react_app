import React from 'react';

import Layout from '~/components/Layout/Layout';
import { Todos } from '~/features/todo';

export function TodoPage() {
  return (
    <Layout>
      <div>TodoPage</div>
      <Todos />
    </Layout>
  );
}
