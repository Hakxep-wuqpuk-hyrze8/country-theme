import { RESTCOUNTRY_API } from "@/config";
import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator';
import { getAllCountrySchema, getCountryByRegionSchema, getCountryDetailsSchema, getCountrySchema, getCountryByCodeSchema } from "../schema";

const app = new Hono()
  .get(
    "/all",
    zValidator("query", getAllCountrySchema),
    async (c) => {
      try {
        const { fields } = c.req.valid("query");
        const url = `${RESTCOUNTRY_API}/all?fields=${fields}`
        const response = await fetch (url);
        const data = await response.json();
        return c.json({ data });
      } catch (error) {
         return c.json({ error: error }, 500);
      }
    }
  )
  .get(
    "/detail",
    zValidator("query", getCountryDetailsSchema),
    async (c) => {
      try {
        const { cca3, fields } = c.req.valid("query");
        const url = `${RESTCOUNTRY_API}/alpha?codes=${cca3}&fields=${fields}`
        const response = await fetch (url);
        const data = await response.json();
        return c.json({ data });  
      } catch (error) {
         return c.json({ error: error }, 500);
      }
    }
  )
  .get(
    "/main",
    zValidator("query", getCountrySchema),
    async (c) => {
      try {
        const { name, fields } = c.req.valid("query");
        const url = `${RESTCOUNTRY_API}/name/${name}?fields=${fields}`
        const response = await fetch (url);
        const data = await response.json();
        return c.json({ data });  
      } catch (error) {
         return c.json({ error: error }, 500);
      }
    }
  )
  .get(
    "/region",
    zValidator("query", getCountryByRegionSchema),
    async (c) => {
      try {
        const { region, fields } = c.req.valid("query");
        const url = `${RESTCOUNTRY_API}/region/${region}?fields=${fields}`
        const response = await fetch (url);
        const data = await response.json();
        return c.json({ data });
      } catch (error) {
         return c.json({ error: error }, 500);
      }
    }
  )
  .get(
    "/codes",
    zValidator("query", getCountryByCodeSchema),
    async (c) => {
      try {
        const { codes, fields } = c.req.valid("query");
        const url = `${RESTCOUNTRY_API}/alpha?codes=${codes}&fields=${fields}`
        const response = await fetch (url);
        const data = await response.json();
        return c.json({ data });
      } catch (error) {
        return c.json({ error: error }, 500);
      }
    }
  )


export default app;