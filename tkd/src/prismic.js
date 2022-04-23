import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: import.meta.env.VITE_ENDPOINT,
  clientConfig: {
    defaultParams: {
			routes: [
				{
					type: "homepage",
					path: "/",
				},
			],
		},
      accessToken: import.meta.env.VITE_ACCESSTOKEN
  },
});

export default prismic;