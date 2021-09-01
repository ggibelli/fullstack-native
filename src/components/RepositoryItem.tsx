import * as React from 'react';
// import Constants from 'expo-constants';
import { ListRenderItemInfo, View, Image, StyleSheet } from 'react-native';
import { Repository } from '../generated/graphql';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: 5,
    alignSelf: 'flex-start',
    marginLeft: 5,
    borderRadius: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 3,
  },
  flexContainerTop: {
    flexDirection: 'row',
    padding: 5,
  },
  flexContainerTextsTop: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  flexContainerBottom: {
    flexDirection: 'row',
    // padding: 5,
    justifyContent: 'space-around',
  },
  flexContainerTextsBottom: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textItem: {
    padding: 5,
    flexGrow: 0,
    alignSelf: 'stretch',
  },
});

const RepositoryItem: React.FC<ListRenderItemInfo<Repository>> = ({ item }) => {
  const kSuffixCount = (number: number): string => {
    if (number > 999) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    return `${number}`;
  };
  return (
    <>
      <View style={styles.flexContainerTop}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl as string,
          }}
        />
        <View style={styles.flexContainerTextsTop}>
          <Text style={styles.textItem} fontWeight="bold">
            {item.fullName}
          </Text>
          <Text style={styles.textItem} color="textSecondary">
            {item.description}
          </Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainerBottom}>
        <View style={styles.flexContainerTextsBottom}>
          <Text fontWeight="bold">{kSuffixCount(item.stargazersCount as number)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexContainerTextsBottom}>
          <Text fontWeight="bold">{kSuffixCount(item.forksCount as number)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexContainerTextsBottom}>
          <Text fontWeight="bold">{kSuffixCount(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexContainerTextsBottom}>
          <Text fontWeight="bold">{kSuffixCount(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </>
  );
};

export default RepositoryItem;
