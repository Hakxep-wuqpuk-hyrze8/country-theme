import { FIELDSQUERY, GET_BORDER_COUNTRY_FIELDS_QUERY, GET_COUNTRY_DETAIL_FIELDS_QUERY } from "@/app/constants";
import { RESTCOUNTRY_API } from "@/config";

export const getAllCountries = async (): Promise<Array<CountryType>> => {
  try {
    const url = `${RESTCOUNTRY_API}/all?fields=${FIELDSQUERY}`
    const response = await fetch(url);
    const data: Array<CountryType> = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries.');
  }
};

export const getCountryDetail = async (cca3: string): Promise<Array<CountryDetailType>> => {
  try {
    const url = `${RESTCOUNTRY_API}/alpha?codes=${cca3}&fields=${GET_COUNTRY_DETAIL_FIELDS_QUERY}`
    const response = await fetch(url);
    const data: Array<CountryDetailType> = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries.');
  }
};

export const getBorderCountryByCode = async (cca3: string): Promise<Array<BorderCountryType>> => {
  try {
    const url = `${RESTCOUNTRY_API}/alpha?codes=${cca3}&fields=${GET_BORDER_COUNTRY_FIELDS_QUERY}`
    const response = await fetch(url);
    const data: Array<BorderCountryType> = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries.');
  }
};

export const getCountriesByName = async (name: string): Promise<Array<CountryType>> => {
  try {
    const url = `${RESTCOUNTRY_API}/name/${name}?fields=${FIELDSQUERY}`
    const response = await fetch(url);
    const data: Array<CountryType> = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries by name.');
  }
};

export const getAllRegions = async (): Promise<RegionType[]> => {
  try {
    const url = `${RESTCOUNTRY_API}/all?&fields=region`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: RegionType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Error', error);
    throw new Error('Failed to fetch all regions.');
  }
};