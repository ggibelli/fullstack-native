import * as React from 'react';
import { useAuthUserQuery } from '../generated/graphql';

interface Args {
  includeReviews?: boolean;
  first?: number;
}

const useAuthorizedUser = (variables: Args | undefined) => {
  const { data, loading, error, fetchMore, ...result } = useAuthUserQuery({
    fetchPolicy: 'cache-and-network',
    variables,
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.authorizedUser?.reviews?.pageInfo.hasNextPage;
    if (!canFetchMore) return;
    fetchMore({
      variables: {
        after: data?.authorizedUser?.reviews?.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    user: data?.authorizedUser,
    loading,
    fetchMore: handleFetchMore,
    error,
    ...result,
  };
};

export default useAuthorizedUser;
