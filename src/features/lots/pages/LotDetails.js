import React from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../components';

export default function LotCreation() {
  const { lotId } = useParams();

  return (
    <Layout title={`Lot ${lotId}`}>
      Lot details
    </Layout>
  );
}
