import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { Card, Row, Col } from 'antd';

import { getHotels } from '../store/hotels/actions';
import { WithReduxNextPageContext, State } from '../interfaces';
import SidebarLayout from '../components/SidebarLayout/SidebarLayout';
import { HotelInterface } from '../store/hotels/interfaces';

const Index: NextPage = () => {
  const hotels = useSelector((state: State): HotelInterface[] => state.hotels.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startClock());
  });

  return (
    <SidebarLayout>
      <h1>Home screen test</h1>
      <Row gutter={16}>
        {hotels.map((hotel: HotelInterface) => (
          <Col xs={24} sm={24} md={16} lg={8} key={hotel.name} className="gutter-row">
            <Card
              cover={<img alt="example" src={`${hotel.image}&w=640&h=360`} />}
              style={{ margin: '8px 0' }}
            >
              <Card.Meta title={hotel.name} description={hotel.address.city} />
            </Card>
          </Col>
        ))}
      </Row>
    </SidebarLayout>
  );
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
