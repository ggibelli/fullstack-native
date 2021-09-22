import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

export interface Values {
  ownerName: string;
  repositoryName: string;
  rating: number | string;
  text?: string;
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .moreThan(0, 'Min number is 0')
    .lessThan(100, 'Max number is 100')
    .required('Rating is required'),
});

const CreateReviewContainer: React.FC<{
  handleSubmit: (values: Values) => Promise<void>;
}> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReviewContainer;
