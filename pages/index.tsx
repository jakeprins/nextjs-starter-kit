import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { getHotels } from '../store/hotels/actions';
import { WithReduxNextPageContext } from '../interfaces';

const Index: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startClock());
  });

  return <h1>testing</h1>;
};

Index.getInitialProps = async ({
  store,
  req,
}: WithReduxNextPageContext): Promise<{ isServer: boolean }> => {
  const isServer = !!req;

  if (!store.getState().hotels.entities.length) {
    store.dispatch(getHotels());
  }

  return { isServer };
};

export default Index;
