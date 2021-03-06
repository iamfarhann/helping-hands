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

export const UPDATE_DONOR = gql`
  mutation updateDonor($fields: updateDonorInput) {
    updateDonor(input: $fields) {
      donor {
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
        visitedTags {
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
            organizationName
          }
        }
        donations {
          id
          project {
            id
          }
        }
        creditAmount
        mobileNumber
        cnic
      }
    }
  }
`;
export const UPDATE_ORGANIZATION = gql`
  mutation updateOrganization($fields: updateOrganizationInput) {
    updateOrganization(input: $fields) {
      organization {
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
  }
`;
export const CREATE_PROJECT = gql`
  mutation CreateProject($fields: createProjectInput) {
    createProject(input: $fields) {
      project {
        name
        id
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($fields: createReviewInput) {
    createReview(input: $fields) {
      review {
        rating
        review
        donor {
          fullName
          id
          profilePicture {
            id
            url
          }
        }
      }
    }
  }
`;

export const CREATE_DONATION = gql`
  mutation createDonation($field: createDonationInput) {
    createDonation(input: $field) {
      donation {
        id
        amount
      }
    }
  }
`;
export const CREATE_PORTFOLIO = gql`
  mutation createPortfolio($field: createPortfolioInput) {
    createPortfolio(input: $field) {
      portfolio {
        id
        paymentSize
        organization {
          id
          organizationName
        }
      }
    }
  }
`;
export const UPDATE_PORTFOLIO = gql`
  mutation updatePortfolio($field: updatePortfolioInput) {
    updatePortfolio(input: $field) {
      portfolio {
        id
        paymentSize
        organization {
          id
          organizationName
        }
      }
    }
  }
`;
export const DELETE_PORTFOLIO = gql`
  mutation deletePortfolio($fields: deletePortfolioInput) {
    deletePortfolio(input: $fields) {
      portfolio {
        id
      }
    }
  }
`;
export const CREATE_UPDATE = gql`
  mutation createUpdate($field: createUpdateInput) {
    createUpdate(input: $field) {
      update {
        id
      }
    }
  }
`;
