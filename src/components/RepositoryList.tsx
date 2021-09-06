import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Repository } from '../generated/graphql';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator: React.FC = () => <View style={styles.separator} />;

const RepositoryList: React.FC = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes as Repository[]}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}

      // other props
    />
  );
};

export default RepositoryList;
