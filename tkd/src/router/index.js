import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () =>
				import("../views/HomeView.vue"),
		},
		{
			path: "/updates",
			name: "Updates",
			component: () =>
				import("../views/UpdatesView.vue"),
		},
		{
			path: "/classes",
			name: "Classes",
			component: () =>
				import("../views/ClassesView.vue"),
		},
		{
			path: "/classes/:name",
			name: "Class",
			component: () =>
				import("../components/Class.vue"),
			props: true
		},
	],
});

export default router;