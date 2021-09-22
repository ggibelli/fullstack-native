import * as React from 'react';
// import Constants from 'expo-constants';
import { FlatList, View } from 'react-native';
import { useRepositoryQuery } from '../../generated/graphql';
import { useParams } from 'react-router-native';
import RepositoryItemContainer from '../RepositoryItem/RepositoryItemContainer';
import Text from '../Text';
import ReviewItem from './ReviewItem';

const SingleRepository: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { data, loading, error } = useRepositoryQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });
  // console.log(data?.repository?.reviews);
  const reviews = data?.repository?.reviews;

  const reviewsNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];
  const repository = data?.repository;
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
  return (
    <FlatList
      data={reviewsNodes}
      renderItem={({ item }) => {
        return <ReviewItem review={item} />;
      }}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItemContainer single item={repository} />}></FlatList>
  );
  // <RepositoryItemContainer item={data?.repository as Repository} single />;
};

export default SingleRepository;
