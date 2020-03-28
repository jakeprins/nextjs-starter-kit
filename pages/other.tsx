import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { Button } from 'antd';

import { WithReduxNextPageContext } from '../interfaces';
import SideBarLayout from '../components/SidebarLayout/SidebarLayout';

const Other: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startClock());
  });

  return (
    <SideBarLayout>
      <Button size="large" style={{ marginLeft: 8 }}>
        Dit is een button
      </Button>
    </SideBarLayout>
  );
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
