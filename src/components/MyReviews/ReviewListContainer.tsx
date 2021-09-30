import * as React from 'react';
import { FlatList } from 'react-native';
import { Review, ReviewConnection } from '../../generated/graphql';
import ReviewItem from '../ReviewItem';

const ReviewListContainer: React.FC<{
  onEndReach: () => void;
  reviews: ReviewConnection;
}> = ({ onEndReach, reviews }) => {
  const reviewsNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      onEndReached={onEndReach}
      data={reviewsNodes as Review[]}
      renderItem={ReviewItem}
    />
  );
};

export default ReviewListContainer;
