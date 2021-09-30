import * as React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import SingleRepositoryContainer from './SingleRepositoryContainer';

const SingleRepository: React.FC = () => {
  const { id }: { id: string } = useParams();

  const { repository, fetchMore, error, loading } = useRepository({ id, first: 3 });

  const handleFetchMore = () => {
    fetchMore();
  };
  return <SingleRepositoryContainer repository={repository} onEndReach={handleFetchMore} />;
};

export default SingleRepository;
