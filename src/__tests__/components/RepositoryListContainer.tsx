import React from 'react';
import RepositoryListContainer from '../../components/RepositoryListContainer';
import { render, fireEvent } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId, debug } = render(
        <RepositoryListContainer repositories={repositories} />,
      );
      const names = getAllByTestId('full-name');
      const descriptions = getAllByTestId('description');
      const languages = getAllByTestId('language');
      const forks = getAllByTestId('forks');
      const stars = getAllByTestId('stars');
      const rating = getAllByTestId('rating');
      const reviews = getAllByTestId('reviews');
      expect(names[0]).toHaveTextContent('jaredpalmer/formik');
      expect(descriptions[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(languages[0]).toHaveTextContent('TypeScript');
      expect(forks[0]).toHaveTextContent('1.6k');
      expect(stars[0]).toHaveTextContent('21.9k');
      expect(rating[0]).toHaveTextContent('88');
      expect(reviews[0]).toHaveTextContent('3');
      expect(names[1]).toHaveTextContent('async-library/react-async');
      expect(descriptions[1]).toHaveTextContent('Flexible promise-based React data loader');
      expect(languages[1]).toHaveTextContent('JavaScript');
      expect(forks[1]).toHaveTextContent('69');
      expect(stars[1]).toHaveTextContent('1.8k');
      expect(rating[1]).toHaveTextContent('72');
      expect(reviews[1]).toHaveTextContent('3');
    });
  });
});
