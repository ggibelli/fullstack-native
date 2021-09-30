import * as React from 'react';
import theme from '../../theme';
import Text from '../Text';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { AuthUserDocument, useDeleteReviewMutation } from '../../generated/graphql';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexContainerButtons: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
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

const ReviewActions: React.FC<{ id: string; repositoryId: string }> = ({ id, repositoryId }) => {
  const [deleteReview] = useDeleteReviewMutation({
    refetchQueries: [AuthUserDocument],
  });
  const handleDelete = () =>
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'OK', onPress: () => deleteReview({ variables: { id } }) },
    ]);

  return (
    <View style={styles.flexContainerButtons}>
      <Link style={styles.item} to={`/${repositoryId}`}>
        <Text fontWeight="bold" style={styles.textOpen}>
          View repository
        </Text>
      </Link>
      <Pressable style={styles.item} onPress={handleDelete}>
        <Text fontWeight="bold" style={styles.textDelete}>
          Delete review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewActions;
