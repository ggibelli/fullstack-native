import * as React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { RepositoryQuery } from '../../generated/graphql';
import theme from '../../theme';
import Text from '../Text';
import * as Linking from 'expo-linking';

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
  item: {
    alignSelf: 'stretch',
  },
  text: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

const RepositoryItemContainer: React.FC<{ item: RepositoryQuery['repository']; single?: boolean }> =
  ({ item, single }) => {
    const kSuffixCount = (number: number): string => {
      if (number > 999) {
        return `${(number / 1000).toFixed(1)}k`;
      }
      return `${number}`;
    };
    const onSubmit = () => {
      Linking.openURL(item?.url as string);
    };
    return (
      <>
        <View style={styles.flexContainerTop}>
          <Image
            testID="avatar"
            style={styles.avatar}
            source={{
              uri: item?.ownerAvatarUrl as string,
            }}
          />
          <View style={styles.flexContainerTextsTop}>
            <Text testID="full-name" style={styles.textItem} fontWeight="bold">
              {item?.fullName}
            </Text>
            <Text testID="description" style={styles.textItem} color="textSecondary">
              {item?.description}
            </Text>
            <Text testID="language" style={styles.language}>
              {item?.language}
            </Text>
          </View>
        </View>
        <View style={styles.flexContainerBottom}>
          <View style={styles.flexContainerTextsBottom}>
            <Text testID="stars" fontWeight="bold">
              {kSuffixCount(item?.stargazersCount as number)}
            </Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.flexContainerTextsBottom}>
            <Text testID="forks" fontWeight="bold">
              {kSuffixCount(item?.forksCount as number)}
            </Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.flexContainerTextsBottom}>
            <Text testID="reviews" fontWeight="bold">
              {kSuffixCount(item?.reviewCount as number)}
            </Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.flexContainerTextsBottom}>
            <Text testID="rating" fontWeight="bold">
              {kSuffixCount(item?.ratingAverage as number)}
            </Text>
            <Text>Rating</Text>
          </View>
        </View>
        {single ? (
          <View>
            <Pressable testID="submit" style={styles.item} onPress={onSubmit}>
              <Text style={styles.text}>Open in GitHub</Text>
            </Pressable>
            {/* <ReviewList /> */}
          </View>
        ) : null}
      </>
    );
  };

export default RepositoryItemContainer;
