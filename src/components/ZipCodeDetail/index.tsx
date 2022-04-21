import React from 'react';
import { Card, List } from 'antd';
import { ZipCode } from '../../types';

type Props = {
  zipcode: ZipCode
};

export const ZipCodeDetail: React.FC<Props> = ({ zipcode }) => {
  const title = `${zipcode?.country} (${zipcode?.countryAbbreviation}) - ${zipcode?.postalCode}`;
  const places = zipcode?.places || [];

  return (
    <Card bordered={false}>
      <Card.Meta title={title}/>
      <List
        size='small'
        bordered={false}
        dataSource={places}
        renderItem={({ placeName, state }, index) => (
          <List.Item key={`item_${index}`}>
            * <strong>City: </strong>{placeName || '---'}{' - '}
            <strong>State: </strong>{state || '---'}
          </List.Item>
        )}
      />
    </Card>
  )
};
