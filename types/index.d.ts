// Page And Components Props
declare type CountryDetailProps = {
  params: {
    code: string;
  };
}


// Data
declare type CountryDetailType = {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    official: string;
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca3: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  population: number;
};

declare type CountryType = {
  name: {
    official: string;
    common: string;
  };
  population: number;
  region: string;
  capital: Array<string> | undefined;
  flags: {
    svg: string;
    alt: string;
  };
  cca3: string;
};

declare type BorderCountryType = {
  name: {
    official: string;
    common: string;
  }
  cca3: string;
}

declare type RegionType = {
  region: string;
};