import * as React from 'react';
import { useHistory } from 'react-router-native';
import { useCreateReviewMutation } from '../../generated/graphql';
import CreateReviewContainer, { Values } from './CreateReviewContainer';

const CreateReview: React.FC = () => {
  const [createReview, result] = useCreateReviewMutation({
    onCompleted: ({ createReview }) => history.push(`/${createReview?.repositoryId}`),
  });
  const history = useHistory();
  const onSubmit = async (values: Values) => {
    const numericRating = parseInt(values.rating as string);
    try {
      await createReview({
        variables: {
          review: { ...values, rating: numericRating },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer handleSubmit={onSubmit} />;
};

export default CreateReview;
