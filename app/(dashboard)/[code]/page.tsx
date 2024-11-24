import CountryDetail from "@/feature/country/components/country-detail";
import { getCountryDetail } from "@/feature/country/query";
import { Metadata } from "next";

async function fetchCountryData(code: string) {
  const countryDetail: Array<CountryDetailType> = await getCountryDetail(code);
  const borderCodes = countryDetail[0]?.borders?.join(',') || '';
  let borderCountry: Array<BorderCountryType> = [];

  if (borderCodes) {
    borderCountry = await getCountryDetail(borderCodes);
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
