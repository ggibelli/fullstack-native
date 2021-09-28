import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { IOrder } from '.';
import { RepositoriesQuery, Repository } from '../../generated/graphql';
import Filter from '../Filter';
import Order from '../Order';
import RepositoryItem from '../RepositoryItem';
const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#D3D3D3',
  },
});

const ItemSeparator: React.FC = () => <View style={styles.separator} />;

const RepositoryListContainer: React.FC<{
  repositories: RepositoriesQuery['repositories'] | undefined;
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  onEndReach: () => void;
}> = ({ repositories, order, setOrder, filter, setFilter, onEndReach }) => {
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      ListHeaderComponent={
        <View style={{ backgroundColor: '#d3d3d3' }}>
          <Filter filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </View>
      }
      data={repositoryNodes as Repository[]}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;
