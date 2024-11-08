import { RESTCOUNTRY_API } from "@/config";
import { Hono } from "hono";

const app = new Hono()
  .get(
    "/main",
    async (c) => {
      const { name } = c.req.queries();

      const url = `${RESTCOUNTRY_API}/all?field=${name}`

      console.log(url);

      return c.json({ deta: name });
      // const response = await fetch (RESTCOUNTRY_API, )
    }
  )


export default app;