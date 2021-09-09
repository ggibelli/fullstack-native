import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer handleSubmit={onSubmit} />);
      fireEvent.changeText(getByTestId('user'), 'kalle');
      fireEvent.changeText(getByTestId('password'), 'password');
      fireEvent.press(getByTestId('submit'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });

    it('does not call onSubmit function with correct arguments when a invalid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer handleSubmit={onSubmit} />);
      // fireEvent.changeText(getByTestId('user'), 'kalle');
      fireEvent.changeText(getByTestId('password'), 'password');
      fireEvent.press(getByTestId('submit'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(0);
        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });
  });
});
