import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface getAllCountryResponse {
  data: Array<{
    name: {
      official: string
      common: string
    };
  }>
};

export const useGetCountryByCodes = (codes: string, fields: string, enabled?: boolean) => {
  return useQuery<getAllCountryResponse, Error>({  
    queryKey: ["country-by-codes", codes],
    queryFn: async () => {
      const response = await client.api.country.codes["$get"]({
        query: { codes, fields },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch country data");
      }

      return await response.json();
    },
    enabled: enabled
  });
};
