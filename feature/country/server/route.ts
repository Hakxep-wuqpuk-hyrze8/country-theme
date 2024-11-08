import { RESTCOUNTRY_API } from "@/config";
import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator';
import { getAllCountrySchema, getCountrySchema } from "../schema";

const app = new Hono()
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


export default app;