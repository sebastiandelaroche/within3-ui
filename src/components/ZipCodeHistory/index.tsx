import React from 'react';
import { Table, Button } from 'antd';
import { ZipCode } from '../../types';
import { formatDateTime } from '../../utils';

type Props = {
  history: ZipCode[];
  clearHistory: () => void;
};

const columns = [
  { title: 'ZipCode', dataIndex: 'postalCode', key: 'postalCode' },
  { title: 'Country', dataIndex: 'country', key: 'country' },
  { title: 'Country Abbreviation', dataIndex: 'countryAbbreviation', key: 'countryAbbreviation' },
  { title: 'Search Time', dataIndex: 'timestamp', key: 'timestamp', render: (timestamp: string) => formatDateTime(timestamp) },
];

export const ZipCodeHistory: React.FC<Props> = ({ history = [], clearHistory }) => (
  <Table
    title={() => (
      <>
        <h2>History</h2>
        {history.length > 0 && <Button type="link" onClick={clearHistory}>Clear History</Button>}
      </>
    )}
    pagination={false}
    columns={columns}
    dataSource={history}
    locale={{ emptyText: 'Not History' }}
    expandable={{
      expandedRowRender: ({ places }, index) => places.map(({ placeName, state }) => (
        <div key={`${state}_${placeName}_${placeName}`}>
          * <strong>City: </strong>{placeName || '---'}{' - '}
            <strong>State: </strong>{state || '---'}
        </div>
      )) ,
    }}
  />
);
