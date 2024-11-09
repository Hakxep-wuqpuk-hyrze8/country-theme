import { client } from '@/lib/rpc';
import { useQuery } from '@tanstack/react-query';

interface getAllCountryByRegionResponse {
  data: Array<CountryType>
};

export default function useGetCountryByRegion(fields: string){
  return useQuery<getAllCountryByRegionResponse, Error>({
    queryKey: ['country'],
    queryFn: async () => {
      const response = await client.api.country.all["$get"]({
        query: { fields },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch country data");
      }

      return await response.json();
    }
  });
}
