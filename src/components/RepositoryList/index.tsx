import * as React from 'react';
import { AllRepositoriesOrderBy, OrderDirection } from '../../generated/graphql';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

export interface IOrder {
  orderBy: AllRepositoriesOrderBy | '';
  orderDirection: OrderDirection | '';
}

const RepositoryList: React.FC = () => {
  const [order, setOrder] = React.useState<IOrder>({
    orderBy: '',
    orderDirection: '',
  });
  const [filter, setFilter] = React.useState<string>('');
  const [debouncedFilter] = useDebounce<string>(filter, 1000);

  const { repositories, fetchMore } = useRepositories({
    orderDirection: order.orderDirection ? order.orderDirection : undefined,
    orderBy: order.orderBy ? order.orderBy : undefined,
    searchKeyword: debouncedFilter,
    first: 8,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      filter={filter}
      setFilter={setFilter}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
