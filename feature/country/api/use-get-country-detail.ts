import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface getAllCountryResponse {
  data: Array<CountryDetailType>
};

export const useGetCountryDetail = (code: string, fields: string) => {
  return useQuery<getAllCountryResponse, Error>({  
    queryKey: ["country-detail", code],
    queryFn: async () => {
      const response = await client.api.country.detail["$get"]({
        query: { cca3: code, fields },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch country detail data");
      }

      return await response.json();
    }
  });
};
