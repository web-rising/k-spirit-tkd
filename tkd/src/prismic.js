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
				{
					type: "footer",
					path: "/",
				},
				// {
				// 	type: "classes",
				// 	path: "/classes",
				// },
			],
		},
		accessToken: import.meta.env.VITE_ACCESSTOKEN
	},
});

export default prismic;