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
      portfolios {
        id
        organization {
          id
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
export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      createdAt
      updatedAt
      name
      status
      shortDescription
      description
      totalDonations
      titleImage {
        id
        url
      }
      organization {
        id
        profilePicture {
          id
          url
        }
        organizationName
      }
      targetAmount
      relatedImages {
        id
        url
      }
      donations {
        id
      }
      reviews {
        id
      }
      tags {
        id
        name
      }
      updates {
        id
      }
    }
  }
`;
export const GET_PROJECTS = gql`
  query getProjects($sort: String, $start: Int, $limit: Int, $where: JSON) {
    projects(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      createdAt
      updatedAt
      name
      status
      shortDescription
      description
      totalDonations
      titleImage {
        id
        url
      }
      organization {
        id
        profilePicture {
          id
          url
        }
        organizationName
      }
      targetAmount
      relatedImages {
        id
        url
      }
      donations {
        id
      }
      reviews {
        id
      }
      tags {
        id
        name
      }
      updates {
        id
      }
    }
  }
`;

export const GET_PROJECT_UPDATES = gql`
  query getProjectUpdates(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    updates(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      update
      createdAt
      images {
        id
        url
      }
    }
  }
`;
export const GET_PROJECT_DONATIONS = gql`
  query getProjectDonations(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    donations(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      amount
      createdAt
      donor {
        id
        fullName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
export const GET_PROJECT_REVIEWS = gql`
  query getProjectReviews(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    reviews(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      review
      rating
      donor {
        id
        fullName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
export const GET_PORTFOLIOS = gql`
  query getPortfolios($sort: String, $start: Int, $limit: Int, $where: JSON) {
    portfolios(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      period
      paymentSize
      paymentDate
      organization {
        id
        organizationName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
