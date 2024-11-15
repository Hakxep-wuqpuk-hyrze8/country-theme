import { RESTCOUNTRY_API } from "@/config";
import CountryDetail from "@/feature/country/components/country-detail";
import { Metadata } from "next";

interface CountryDetailProps {
  params: {
    code: string;
  };
};

// if not use fetch method, use Cache
export async function generateMetadata({
  params: { code }
}: CountryDetailProps): Promise<Metadata> {
  const GET_COUNTRY_BY_CODE_FIELDS = "name,flags";
  const url = `${RESTCOUNTRY_API}/alpha?codes=${code}&fields=${GET_COUNTRY_BY_CODE_FIELDS}`
  const response = await fetch(url);
  const data = await response.json();
  const name = data[0].name.common;
  const imageUrl = data[0].flags.svg;

  return {
    title: `${name}`,
    description: `Information and details about the country ${name}`,
    openGraph: {
      title: `${name}`,
      description: `Explore the details of the country ${name}`,
      url: imageUrl
    }
  };
}

export default function CountryDetailPage() {
  return (
    <div className="px-7">
      <CountryDetail />
    </div>
  )
}
