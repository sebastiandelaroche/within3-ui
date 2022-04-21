import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { countries } from './countries';

type Props = {
  loading?: boolean;
  onSearch: (country: string, zipcode: string) => void;
};

export const ZipCodeSearch: React.FC<Props> = ({ onSearch, loading = false }) => {
  const [country, setCountry] = useState('US');

  const onSearchHandle = (zipcode: string) => onSearch(country, zipcode);

  return (
    <Input.Group compact>
      <Select
        loading={loading}
        defaultValue={country}
        style={{ width: 200 }}
        onChange={(value: string) => setCountry(value)}>
        {countries.map(
          ({ label, value }) => (
            <Select.Option key={value} value={value}>{label} ({value})</Select.Option>
          )
        )}
      </Select>
      <Input.Search
        style={{ width: '50%' }}
        onSearch={onSearchHandle}
        loading={loading}
        disabled={loading}/>
    </Input.Group>
  );
}
