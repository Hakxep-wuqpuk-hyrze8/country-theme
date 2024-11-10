import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface getCountryResponse {
  data: Array<CountryType>
};

export const useGetCountryByName = (name: string, fields: string, enabled?: boolean) => {
  return useQuery<getCountryResponse, Error>({  
    queryKey: [name],
    queryFn: async () => {
      const response = await client.api.country.main["$get"]({
        query: { name, fields },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch country data");
      }

      return await response.json();
    },
    enabled
  });
};
