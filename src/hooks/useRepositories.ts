import * as React from 'react';
import { IOrder } from '../components/RepositoryList';
import { RepositoriesQuery, useRepositoriesQuery } from '../generated/graphql';

const useRepositories = (variables) => {
  const { data, loading, error, fetchMore, ...result } = useRepositoriesQuery({
    variables,
    fetchPolicy: 'cache-and-network',
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    console.log(canFetchMore);
    if (!canFetchMore) return;

    return fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;
