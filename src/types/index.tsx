export type ZipCode = {
  key: string;
  country: string;
  postalCode: string;
  countryAbbreviation: string;
  places: Array<{
    placeName: string;
    longitude: string;
    state: string;
    stateAbbreviation: string;
    latitude: string;
  }>
};
