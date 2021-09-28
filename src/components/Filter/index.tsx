import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Filter: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filter, setFilter }) => {
  const onChangeSearch = (query: string) => setFilter(query);

  return (
    <Searchbar
      style={{ margin: 10 }}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={filter}
    />
  );
};

export default Filter;
