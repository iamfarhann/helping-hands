import gql from "graphql-tag";
export const CREATE_DONOR = gql`
  mutation createDonor($fields: createDonorInput) {
    createDonor(input: $fields) {
      donor {
        id
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($fields: UserInput!) {
    register(input: $fields) {
      jwt
      user {
        id

        role {
          id
          name
        }
      }
    }
  }
`;
