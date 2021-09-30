import * as React from 'react';
import theme from '../../theme';
import Text from '../Text';
import { View, StyleSheet, ListRenderItemInfo, Pressable } from 'react-native';
import { Maybe } from '../../generated/graphql';
import ReviewActions from './ReviewActions';

const styles = StyleSheet.create({
  rating: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 90,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  flexContainerButtons: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  flexContainerTexts: {
    padding: 5,
    flexDirection: 'column',
    // flexGrow: 1,
    // flexWrap: 'wrap-reverse',
    flexShrink: 1,
  },
  item: {
    alignSelf: 'stretch',
  },
  textOpen: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  textDelete: {
    backgroundColor: 'red',
    color: theme.colors.white,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

interface Review {
  __typename?: 'Review' | undefined;
  id: string;
  text?: Maybe<string> | undefined;
  rating: number;
  createdAt: any;
  user: {
    __typename?: 'User' | undefined;
    id: string;
    username: string;
  };
  repository: {
    fullName: string;
    id: string;
  };
}

const ReviewItem: React.FC<ListRenderItemInfo<Review>> = ({ item }) => {
  const isUser = Boolean(item.user);
  return (
    <View>
      <View style={styles.flexContainer}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">
            {item.rating}
          </Text>
        </View>
        <View style={styles.flexContainerTexts}>
          <Text style={{ paddingBottom: 5 }} fontWeight="bold">
            {item.user?.id ? `${item.user.username}` : `${item.repository.fullName}`}
          </Text>
          <Text style={{ paddingBottom: 5 }} color="secondary">
            {new Date(item.createdAt).toLocaleDateString('en-gb', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })}
          </Text>
          <Text style={{ paddingTop: 2 }} color="textPrimary">
            {item.text}
          </Text>
        </View>
      </View>
      {isUser ? null : <ReviewActions id={item.id} repositoryId={item.repository.id} />}
    </View>
  );
};

export default ReviewItem;
