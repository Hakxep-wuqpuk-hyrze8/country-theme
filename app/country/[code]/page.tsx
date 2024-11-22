import { GET_BORDER_COUNTRY_FIELDS_QUERY, GET_COUNTRY_DETAIL_FIELDS_QUERY } from "@/app/constants";
import CountryDetail from "@/feature/country/components/country-detail";
import { getCountryDetail } from "@/feature/country/query";
import { Metadata } from "next";

interface CountryDetailProps {
  params: {
    code: string;
  };
}

async function fetchCountryData(code: string) {
  const countryDetail: Array<CountryDetailType> = await getCountryDetail(code, GET_COUNTRY_DETAIL_FIELDS_QUERY);
  const borderCodes = countryDetail[0]?.borders?.join(',') || '';
  let borderCountry: Array<BorderCountryType> = [];

  if (borderCodes) {
    borderCountry = await getCountryDetail(borderCodes, GET_BORDER_COUNTRY_FIELDS_QUERY);
  }

  return { countryDetail: countryDetail[0], borderCountry };
}

export async function generateMetadata({
  params: { code },
}: CountryDetailProps): Promise<Metadata> {
  const { countryDetail } = await fetchCountryData(code);
  const name = countryDetail.name.common;

  return {
    title: `${name}`,
    description: `Information and details about the country ${name}`,
    openGraph: {
      title: `${name}`,
      description: `Explore the details of the country ${name}`,
      url: countryDetail.flags.svg,
    },
  };
}

export default async function CountryDetailPage({ params }: { params: { code: string } }) {
  const { code } = params;

  const { countryDetail, borderCountry } = await fetchCountryData(code);
  return (
    <div className="px-7">
      <CountryDetail countryDetail={countryDetail} borderCountry={borderCountry} />
    </div>
  );
}
