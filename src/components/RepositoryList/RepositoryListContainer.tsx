import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { RepositoriesQuery, Repository, RepositoryConnection } from '../../generated/graphql';
import RepositoryItem from '../RepositoryItem';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator: React.FC = () => <View style={styles.separator} />;

const RepositoryListContainer: React.FC<{
  repositories: RepositoriesQuery['repositories'] | undefined;
}> = ({ repositories }) => {
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes as Repository[]}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

export default RepositoryListContainer;
