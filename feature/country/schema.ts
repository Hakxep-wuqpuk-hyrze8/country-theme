import { z } from "zod";

export const getCountrySchema = z.object({
  name: z.string(),
  fields: z.string(),
});

export const getAllCountrySchema = z.object({
  fields: z.string(),
})

export const getCountryByRegionSchema = z.object({
  region: z.string(),
  fields: z.string(),
});

export const getCountryDetailsSchema = z.object({
  cca3: z.string(),
  fields: z.string()
});

export const getCountryByCodeSchema = z.object({
  codes: z.string(),
  fields: z.string(),
});
