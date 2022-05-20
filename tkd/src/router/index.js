import { createRouter, createWebHistory } from "vue-router";
import classRoutes from '../classes'

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
			children: classRoutes
		},
		{
			path: "/Classinfo/:id",
			name: "Classinfo",
			component: () =>
				import("../views/Classinfo.vue")
		},
	],
});

export default router;