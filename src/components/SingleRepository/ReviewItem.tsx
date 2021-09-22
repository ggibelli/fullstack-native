import * as React from 'react';
import theme from '../../theme';
import Text from '../Text';
import { View, StyleSheet } from 'react-native';
import { Maybe } from '../../generated/graphql';

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
  flexContainerTexts: {
    padding: 5,
    flexDirection: 'column',
    flexGrow: 2,
    // flexShrink: 1,
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
}

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.rating}>
        <Text color="primary" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={styles.flexContainerTexts}>
        <Text style={{ paddingBottom: 5 }} fontWeight="bold">
          {review.user.username}
        </Text>
        <Text style={{ paddingBottom: 5 }} color="secondary">
          {new Date(review.createdAt).toLocaleDateString('en-gb', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </Text>
        <Text style={{ paddingTop: 2 }} color="textPrimary">
          {review.text}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;
