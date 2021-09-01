import * as React from 'react';
import { RepositoriesQuery, useRepositoriesQuery } from '../../generated/graphql';

const useRepositories = () => {
  const { data, loading, error } = useRepositoriesQuery({
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ repositories }) => setRepositories(repositories),
  });
  console.log(data);
  const [repositories, setRepositories] = React.useState<null | RepositoriesQuery['repositories']>(
    null,
  );

  return {
    repositories,
    loading,
  };
};

export default useRepositories;
