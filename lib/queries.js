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
      preferredTags {
        id
        name
        description
      }
      user {
        id
        email
        role {
          name
        }
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
      overview
      mission
      user {
        id
        email
        role {
          name
        }
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

      taxExemptionForm {
        id
        url
      }
      registrationCertificate {
        id
        url
      }
    }
  }
`;
export const GET_TAGS = gql`
  query {
    tags {
      id
      name
      description
    }
  }
`;
