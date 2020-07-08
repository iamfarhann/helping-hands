import gql from "graphql-tag";
export const INITIALIZATION_QUERY = gql`
  query {
    me {
      id
      confirmed
      blocked
      role {
        name
      }
    }
  }
`;
export const DONOR_INFO = gql`
  query DonorInfo($fields: JSON) {
    donors(where: $fields) {
      id
      fullName
      profilePicture {
        id
        url
      }
      user {
        id
        email
      }
      creditAmount
      mobileNumber
      cnic
    }
  }
`;

export const ORGANIZATION_INFO = gql`
  query organizationInfo($fields: JSON) {
    organizations(where: $fields) {
      id
      organizationName
      registrationNumber
      focalPerson
      address
      mobileNumber
      user {
        id
        email
      }
      profilePicture {
        id
        url
      }
      coverImage {
        id
        url
      }

      projects {
        id
      }
    }
  }
`;
