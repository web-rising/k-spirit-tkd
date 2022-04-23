import { createPrismic, usePrismic } from "@prismicio/vue";
import { linkResolver } from "./linkResolver";

const prismic = createPrismic({
  endpoint: import.meta.env.VITE_ENDPOINT,
  clientConfig: {
      accessToken: import.meta.env.VITE_ACCESSTOKEN
  },
  linkResolver,
});

export default prismic;