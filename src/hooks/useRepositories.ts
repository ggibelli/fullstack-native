import * as React from 'react';
import { RepositoriesQuery, useRepositoriesQuery } from '../generated/graphql';

const useRepositories = () => {
  const { data, loading, error } = useRepositoriesQuery({
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ repositories }) => setRepositories(repositories),
  });
  const [repositories, setRepositories] = React.useState<
    undefined | RepositoriesQuery['repositories']
  >(data?.repositories);

  return {
    repositories,
    loading,
  };
};

export default useRepositories;
