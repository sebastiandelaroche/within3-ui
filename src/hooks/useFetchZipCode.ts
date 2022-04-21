import { gql, useQuery } from "@apollo/client";

const FETCH_ZIP_CODE = gql`
  query zipcode($country: String!, $postalCode: String!) {
    zipcode(country: $country, postalCode: $postalCode) {
    __typename
    ... on ZipCode {
      key
      timestamp
      postalCode
      country
      countryAbbreviation
      places {
        placeName
        longitude
        state
        longitude
        state
        stateAbbreviation
      }
    }
    ... on Exception {
      code
      message
    }
  }
}`;

type UseFetchZipCodeVariables = {
  country: string;
  postalCode: string;
};

export const useFetchZipCode = (
  variables: UseFetchZipCodeVariables
) => useQuery(FETCH_ZIP_CODE, { variables });
