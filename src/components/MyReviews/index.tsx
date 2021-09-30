import * as React from 'react';
import { ReviewConnection } from '../../generated/graphql';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import ReviewListContainer from './ReviewListContainer';

const MyReviews: React.FC = () => {
  const { user, fetchMore } = useAuthorizedUser({ includeReviews: true, first: 4 });
  const handleFetchMore = () => {
    fetchMore();
  };

  return (
    <ReviewListContainer reviews={user?.reviews as ReviewConnection} onEndReach={handleFetchMore} />
  );
};

export default MyReviews;
