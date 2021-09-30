import * as React from 'react';
import { FlatList } from 'react-native';
import { RepositoryQuery, Review } from '../../generated/graphql';
import RepositoryItemContainer from '../RepositoryItem/RepositoryItemContainer';
import ReviewItem from '../ReviewItem';

const SingleRepositoryContainer: React.FC<{
  onEndReach: () => void;
  repository: RepositoryQuery['repository'];
}> = ({ onEndReach, repository }) => {
  const reviewsNodes = repository?.reviews
    ? repository?.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      onEndReached={onEndReach}
      data={reviewsNodes as Review[]}
      renderItem={ReviewItem}
      ListHeaderComponent={<RepositoryItemContainer single item={repository} />}
    />
  );
};

export default SingleRepositoryContainer;
