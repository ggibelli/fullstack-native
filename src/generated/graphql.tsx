import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export enum AllRepositoriesOrderBy {
  CreatedAt = 'CREATED_AT',
  RatingAverage = 'RATING_AVERAGE'
}

export type AuthorizationPayload = {
  __typename?: 'AuthorizationPayload';
  user: User;
  accessToken: Scalars['String'];
  expiresAt: Scalars['DateTime'];
};

export type AuthorizeInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type CreateReviewInput = {
  repositoryName: Scalars['String'];
  ownerName: Scalars['String'];
  rating: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  root?: Maybe<Scalars['String']>;
  /** Creates a new user, if the provided username does not already exist. */
  createUser?: Maybe<User>;
  /** Generates a new access token, if provided credentials (username and password) match any registered user. */
  authorize?: Maybe<AuthorizationPayload>;
  /** Creates a review for the given repository defined by repositoryName and ownerName. */
  createReview?: Maybe<Review>;
  /** Deletes the review which has the given id, if it is created by the authorized user. */
  deleteReview?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  user?: Maybe<CreateUserInput>;
};


export type MutationAuthorizeArgs = {
  credentials?: Maybe<AuthorizeInput>;
};


export type MutationCreateReviewArgs = {
  review?: Maybe<CreateReviewInput>;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  root?: Maybe<Scalars['String']>;
  /** Returns repository by an id. */
  repository?: Maybe<Repository>;
  /** Returns paginated users. */
  users: UserConnection;
  /** Returns the authorized user. */
  authorizedUser?: Maybe<User>;
  /** Returns paginated repositories. */
  repositories: RepositoryConnection;
};


export type QueryRepositoryArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  orderDirection?: Maybe<OrderDirection>;
  orderBy?: Maybe<AllRepositoriesOrderBy>;
  searchKeyword?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
};

export type Repository = {
  __typename?: 'Repository';
  id: Scalars['ID'];
  ownerName: Scalars['String'];
  name: Scalars['String'];
  user: User;
  createdAt: Scalars['DateTime'];
  fullName: Scalars['String'];
  reviews: ReviewConnection;
  ratingAverage: Scalars['Int'];
  reviewCount: Scalars['Int'];
  stargazersCount?: Maybe<Scalars['Int']>;
  watchersCount?: Maybe<Scalars['Int']>;
  forksCount?: Maybe<Scalars['Int']>;
  openIssuesCount?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  ownerAvatarUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  authorizedUserHasReviewed?: Maybe<Scalars['Boolean']>;
};


export type RepositoryReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type RepositoryConnection = {
  __typename?: 'RepositoryConnection';
  totalCount: Scalars['Int'];
  pageInfo: PageInfo;
  edges: Array<RepositoryEdge>;
};

export type RepositoryEdge = {
  __typename?: 'RepositoryEdge';
  cursor: Scalars['String'];
  node: Repository;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  user: User;
  repository: Repository;
  userId: Scalars['String'];
  repositoryId: Scalars['String'];
  rating: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  text?: Maybe<Scalars['String']>;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  totalCount: Scalars['Int'];
  pageInfo: PageInfo;
  edges: Array<ReviewEdge>;
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String'];
  node: Review;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  createdAt: Scalars['DateTime'];
  reviews: ReviewConnection;
  reviewCount: Scalars['Int'];
};


export type UserReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  totalCount: Scalars['Int'];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type RepositoryDetailFragment = { __typename?: 'Repository', id: string, fullName: string, description?: Maybe<string>, language?: Maybe<string>, forksCount?: Maybe<number>, stargazersCount?: Maybe<number>, ratingAverage: number, reviewCount: number, ownerAvatarUrl?: Maybe<string> };

export type AuthorizeMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthorizeMutation = { __typename?: 'Mutation', authorize?: Maybe<{ __typename?: 'AuthorizationPayload', accessToken: string }> };

export type CreateReviewMutationVariables = Exact<{
  review?: Maybe<CreateReviewInput>;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview?: Maybe<{ __typename?: 'Review', id: string, rating: number, text?: Maybe<string>, repositoryId: string }> };

export type CreateUserMutationVariables = Exact<{
  user?: Maybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: Maybe<{ __typename?: 'User', id: string, username: string }> };

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteReviewMutation = { __typename?: 'Mutation', deleteReview?: Maybe<boolean> };

export type RepositoriesQueryVariables = Exact<{
  orderDirection?: Maybe<OrderDirection>;
  orderBy?: Maybe<AllRepositoriesOrderBy>;
  searchKeyword?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type RepositoriesQuery = { __typename?: 'Query', repositories: { __typename?: 'RepositoryConnection', edges: Array<{ __typename?: 'RepositoryEdge', node: { __typename?: 'Repository', id: string, fullName: string, description?: Maybe<string>, language?: Maybe<string>, forksCount?: Maybe<number>, stargazersCount?: Maybe<number>, ratingAverage: number, reviewCount: number, ownerAvatarUrl?: Maybe<string> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean } } };

export type AuthUserQueryVariables = Exact<{
  includeReviews?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type AuthUserQuery = { __typename?: 'Query', authorizedUser?: Maybe<{ __typename?: 'User', id: string, username: string, reviews?: Maybe<{ __typename?: 'ReviewConnection', edges: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', id: string, text?: Maybe<string>, rating: number, createdAt: any, repository: { __typename?: 'Repository', fullName: string, id: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean } }> }> };

export type RepositoryQueryVariables = Exact<{
  id: Scalars['ID'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type RepositoryQuery = { __typename?: 'Query', repository?: Maybe<{ __typename?: 'Repository', id: string, fullName: string, description?: Maybe<string>, language?: Maybe<string>, forksCount?: Maybe<number>, stargazersCount?: Maybe<number>, ratingAverage: number, reviewCount: number, ownerAvatarUrl?: Maybe<string>, url?: Maybe<string>, reviews: { __typename?: 'ReviewConnection', edges: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', id: string, text?: Maybe<string>, rating: number, createdAt: any, user: { __typename?: 'User', id: string, username: string }, repository: { __typename?: 'Repository', fullName: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean } } }> };

export const RepositoryDetailFragmentDoc = gql`
    fragment RepositoryDetail on Repository {
  id
  fullName
  description
  language
  forksCount
  stargazersCount
  ratingAverage
  reviewCount
  ownerAvatarUrl
}
    `;
export const AuthorizeDocument = gql`
    mutation authorize($username: String!, $password: String!) {
  authorize(credentials: {username: $username, password: $password}) {
    accessToken
  }
}
    `;
export type AuthorizeMutationFn = Apollo.MutationFunction<AuthorizeMutation, AuthorizeMutationVariables>;

/**
 * __useAuthorizeMutation__
 *
 * To run a mutation, you first call `useAuthorizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthorizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authorizeMutation, { data, loading, error }] = useAuthorizeMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthorizeMutation(baseOptions?: Apollo.MutationHookOptions<AuthorizeMutation, AuthorizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthorizeMutation, AuthorizeMutationVariables>(AuthorizeDocument, options);
      }
export type AuthorizeMutationHookResult = ReturnType<typeof useAuthorizeMutation>;
export type AuthorizeMutationResult = Apollo.MutationResult<AuthorizeMutation>;
export type AuthorizeMutationOptions = Apollo.BaseMutationOptions<AuthorizeMutation, AuthorizeMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    rating
    text
    repositoryId
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: ID!) {
  deleteReview(id: $id)
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const RepositoriesDocument = gql`
    query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String) {
  repositories(
    orderDirection: $orderDirection
    orderBy: $orderBy
    searchKeyword: $searchKeyword
    first: $first
    after: $after
  ) {
    edges {
      node {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useRepositoriesQuery__
 *
 * To run a query within a React component, call `useRepositoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepositoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepositoriesQuery({
 *   variables: {
 *      orderDirection: // value for 'orderDirection'
 *      orderBy: // value for 'orderBy'
 *      searchKeyword: // value for 'searchKeyword'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useRepositoriesQuery(baseOptions?: Apollo.QueryHookOptions<RepositoriesQuery, RepositoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, options);
      }
export function useRepositoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepositoriesQuery, RepositoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, options);
        }
export type RepositoriesQueryHookResult = ReturnType<typeof useRepositoriesQuery>;
export type RepositoriesLazyQueryHookResult = ReturnType<typeof useRepositoriesLazyQuery>;
export type RepositoriesQueryResult = Apollo.QueryResult<RepositoriesQuery, RepositoriesQueryVariables>;
export const AuthUserDocument = gql`
    query AuthUser($includeReviews: Boolean = false, $first: Int, $after: String) {
  authorizedUser {
    id
    username
    reviews(first: $first, after: $after) @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          rating
          createdAt
          repository {
            fullName
            id
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    `;

/**
 * __useAuthUserQuery__
 *
 * To run a query within a React component, call `useAuthUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserQuery({
 *   variables: {
 *      includeReviews: // value for 'includeReviews'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAuthUserQuery(baseOptions?: Apollo.QueryHookOptions<AuthUserQuery, AuthUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, options);
      }
export function useAuthUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthUserQuery, AuthUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, options);
        }
export type AuthUserQueryHookResult = ReturnType<typeof useAuthUserQuery>;
export type AuthUserLazyQueryHookResult = ReturnType<typeof useAuthUserLazyQuery>;
export type AuthUserQueryResult = Apollo.QueryResult<AuthUserQuery, AuthUserQueryVariables>;
export const RepositoryDocument = gql`
    query Repository($id: ID!, $first: Int, $after: String) {
  repository(id: $id) {
    id
    fullName
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
          repository {
            fullName
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    url
  }
}
    `;

/**
 * __useRepositoryQuery__
 *
 * To run a query within a React component, call `useRepositoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepositoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepositoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useRepositoryQuery(baseOptions: Apollo.QueryHookOptions<RepositoryQuery, RepositoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, options);
      }
export function useRepositoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepositoryQuery, RepositoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, options);
        }
export type RepositoryQueryHookResult = ReturnType<typeof useRepositoryQuery>;
export type RepositoryLazyQueryHookResult = ReturnType<typeof useRepositoryLazyQuery>;
export type RepositoryQueryResult = Apollo.QueryResult<RepositoryQuery, RepositoryQueryVariables>;