import * as React from 'react';
// import Constants from 'expo-constants';
import { ListRenderItemInfo } from 'react-native';
import { Repository } from '../generated/graphql';
import { Link } from 'react-router-native';
import RepositoryItemContainer from './RepositoryItemContainer';

const RepositoryItem: React.FC<ListRenderItemInfo<Repository>> = ({ item }) => {
  return (
    <Link to={item.id}>
      <RepositoryItemContainer item={item} />
    </Link>
  );
};

export default RepositoryItem;
