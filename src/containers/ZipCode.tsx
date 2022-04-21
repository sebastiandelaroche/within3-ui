import React from 'react';
import { Row, Col } from 'antd';
import { useFetchZipCode, useHistoryZipCodes } from '../hooks';
import { ZipCodeSearch } from '../components/ZipCodeSearch';
import { ZipCodeDetail } from '../components/ZipCodeDetail';
import { ZipCodeHistory } from '../components/ZipCodeHistory';

export const ZipCode: React.FC = () => {
  const { data, fetchMore, refetch, loading } = useFetchZipCode({ country: 'US', postalCode: '' });
  const { addHistory, clearHistory, getLast5History } = useHistoryZipCodes();
  const showDetail = data?.zipcode?.__typename === 'ZipCode';

  const onSearchHandle = async (country: string, postalCode: string) => {
    const variables = { country, postalCode };
    await fetchMore({ variables }).then(({ data }) => {
      if (data?.zipcode?.__typename !== 'ZipCode') return;
      addHistory(data?.zipcode);
    });
    await refetch(variables);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Row align='middle'>
        <Col span={24}>
          <ZipCodeSearch onSearch={onSearchHandle} loading={loading} />
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          {showDetail && <ZipCodeDetail zipcode={data?.zipcode as any} />}
        </Col>
        <Col span={24}>
          <ZipCodeHistory history={getLast5History()} clearHistory={clearHistory} />
        </Col>
      </Row>
    </div>
  )
};
