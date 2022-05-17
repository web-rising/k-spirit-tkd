import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import generateSitemap from 'vite-ssg-sitemap'
import classes from './classes'

export default defineConfig({
	plugins: [vue()],
	ssgOptions:{
		onFinished() {
			const dynamicRoutes = classes.map(myClass => `/classes/${myClass.name}`)
			generateSitemap({dynamicRoutes})
		}
	}
});
