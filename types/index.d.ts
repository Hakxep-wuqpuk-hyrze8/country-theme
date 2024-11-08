declare type CountryType = {
  name: {
    official: string;
  };
  population: number;
  region: string;
  capital: Array<string> | undefined;
  flags: {
    svg: string;
    alt: string;
  };
};