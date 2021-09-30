import * as React from 'react';
import { useRepositoryQuery } from '../generated/graphql';

interface Args {
  id: string;
  first: number;
}

const useRepository = (variables: Args) => {
  const { data, loading, error, fetchMore, ...result } = useRepositoryQuery({
    variables,
    fetchPolicy: 'cache-and-network',
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository?.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) return;
    fetchMore({
      variables: {
        after: data.repository?.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    fetchMore: handleFetchMore,
    error,
    ...result,
  };
};

export default useRepository;
