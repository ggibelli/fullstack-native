import * as React from 'react';
// import Constants from 'expo-constants';
import { ListRenderItemInfo, View } from 'react-native';
import { Repository, useRepositoryQuery } from '../generated/graphql';
import { Link, useParams } from 'react-router-native';
import RepositoryItemContainer from './RepositoryItemContainer';
import Text from './Text';

const SingleRepository: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { data, loading, error } = useRepositoryQuery({
    variables: {
      id,
    },
  });
  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return <RepositoryItemContainer item={data?.repository as Repository} single />;
};

export default SingleRepository;
