import { z } from "zod";

export const getCountrySchema = z.object({
  name: z.string(),
  fields: z.string(),
});

export const getAllCountrySchema = z.object({
  fields: z.string(),
})