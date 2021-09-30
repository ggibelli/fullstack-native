import * as React from 'react';
import { AllRepositoriesOrderBy, OrderDirection, useRepositoriesQuery } from '../generated/graphql';

interface Args {
  orderDirection?: OrderDirection;
  orderBy?: AllRepositoriesOrderBy;
  searchKeyword?: string;
  first?: number;
}

const useRepositories = (variables: Args) => {
  const { data, loading, error, fetchMore, ...result } = useRepositoriesQuery({
    variables,
    fetchPolicy: 'cache-and-network',
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) return;
    fetchMore({
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
