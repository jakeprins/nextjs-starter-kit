import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { WithReduxNextPageContext } from '../interfaces';

const Other: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startClock());
  });
  return <h1>Other page</h1>;
};

Other.getInitialProps = async ({
  store,
  req,
}: WithReduxNextPageContext): Promise<{
  isServer: boolean;
}> => {
  const isServer = !!req;
  // store.dispatch(tickClock(isServer));
  return { isServer };
};

export default Other;
