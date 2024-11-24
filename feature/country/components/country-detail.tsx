import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface CountryDetailProps {
  countryDetail: CountryDetailType;
  borderCountry: Array<BorderCountryType>;
}

function renderCountryDetailList(label: string, name: string | number | string[]) {
  return (
    <div>
      {label}
      <span className="font-semibold text-neutral-600 dark:text-neutral-300"> {name} </span>
    </div>
  )
}

export default function CountryDetail({ countryDetail, borderCountry }: CountryDetailProps) {
  const nativeNames = Object.values(countryDetail.name.nativeName).map((ns) => ns.common).join(", ");
  const currencies = Object.values(countryDetail.currencies).map((currency) => currency.name).join(", ");
  const languages = Object.values(countryDetail.languages).join(", ");

  return (
    <main className="size-full flex flex-col gap-y-8 md:flex-row md:gap-y-0 justify-between">
      <div className="relative w-full md:w-5/12 h-[400px] rounded-lg">
        <Image
          src={countryDetail.flags.svg}
          alt={countryDetail.flags.alt}
          fill
          className="object-fill lg:object-cover"
        />
      </div>

      <div className="w-full mb-8 md:mb-0 md:w-6/12 flex flex-col gap-y-8">
        <h1 className="max-w-[400px] text-4xl font-bold text-texts-dark dark:text-texts-light">
          {countryDetail.name.common}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 text-texts-dark text-lg font-bold">
          <div className="flex flex-col gap-y-1 dark:text-texts-light">
            {renderCountryDetailList("Native name:", nativeNames)}
            {renderCountryDetailList("Population:", countryDetail.population)}
            {renderCountryDetailList("Region:", countryDetail.region)}
            {renderCountryDetailList("Sub Region:", countryDetail.subregion)}
            {renderCountryDetailList("Capital:", countryDetail.capital)}
          </div>
          <div className="flex flex-col gap-y-1 dark:text-texts-light">
            {renderCountryDetailList("Top Level Domain:", countryDetail.tld)}
            {renderCountryDetailList("Currencies:", currencies)}
            {renderCountryDetailList("Languages:", languages)}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full">
          <span className="font-bold text-lg text-texts-dark dark:text-texts-light">
            Border Countries:
          </span>
          {borderCountry.length > 0 ? (
            borderCountry.map((data) => (
              <Badge key={data.cca3} variant="outline" className="flex font-bold items-center justify-center text-center px-6 py-1 text-base rounded-sm dark:text-neutral-300 dark:ring-2 dark:ring-white">
                {data.name.common}
              </Badge>
            ))
          ) : (
            <span className="text-muted-foreground font-semibold dark:text-texts-light">None</span>
          )}
        </div>
      </div>
    </main>
  );
}
