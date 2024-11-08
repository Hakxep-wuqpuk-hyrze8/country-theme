import { client } from "@/lib/rpc";

export const findAllCountryMain = async () => {
  try {
    const response = await client.api.country.main.$get();

    if (!response.ok) {
      return null;
    }

    return response;
  } catch {
      return null;
  }
}; 