import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface getAllCountryResponse {
  data: Array<CountryType>
};

export const useGetAllCountry = (fields: string, enabled?: boolean) => {
  return useQuery<getAllCountryResponse, Error>({  
    queryKey: ["country", enabled],
    queryFn: async () => {
      const response = await client.api.country.all["$get"]({
        query: { fields },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch country data");
      }

      return await response.json();
    },
    enabled 
  });
};
