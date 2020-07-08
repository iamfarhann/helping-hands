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
export const CREATE_ORGANIZATION = gql`
  mutation CreateOrg($fields: createOrganizationInput) {
    createOrganization(input: $fields) {
      organization {
        id
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($fields: createUserInput) {
    createUser(input: $fields) {
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

export const LOGIN = gql`
  mutation login($fields: UsersPermissionsLoginInput!) {
    login(input: $fields) {
      jwt
      user {
        id
      }
    }
  }
`;
export const CREATE_PROJECT = gql`
  mutation CreateProj($fields: createProjectInput) {
    createProject(input: $fields) {
      project {
        name
        description
      }
    }
  }
`;
