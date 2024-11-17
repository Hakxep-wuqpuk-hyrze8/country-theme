import { RESTCOUNTRY_API } from "@/config";

export const getAllCountries = async (fields: string) => {
  try {
    const url = `${RESTCOUNTRY_API}/all?fields=${fields}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries.');
  }
};

export const getCountryDetail = async (cca3: string, fields: string) => {
  try {
    const url = `${RESTCOUNTRY_API}/alpha?codes=${cca3}&fields=${fields}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries.');
  }
};

export const getCountriesByName = async (name: string, fields: string) => {
  try {
    const url = `${RESTCOUNTRY_API}/name/${name}?fields=${fields}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
    throw new Error('Failed to fetch countries by name.');
  }
};