import * as React from 'react';
// import Constants from 'expo-constants';
import { ListRenderItemInfo, View } from 'react-native';
import Text from './Text';

// const styles = StyleSheet.create({
//   container: {
//     marginTop: Constants.statusBarHeight,
//     flexGrow: 1,
//     flexShrink: 1,
//   },
// });

interface Props {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

const RepositoryItem: React.FC<ListRenderItemInfo<Props>> = ({ item }) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Descriptiom: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
