<template>
	<div class="app">
		<Nav/>
		<router-view/>
		<Footer v-if="$route.name !== 'Contact'"
		:email="this.data.email[0].text"
		:number="this.data.number[0].text"
		:address="this.data.address[0].text"
		:facebook="this.data.facebook.url"
		:instagram="this.data.instagram.url"
		/>
	</div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue"
import footer from './prismicHelpers/footer.js'

export default {
	components: {
		Nav,
		Footer
	},
	data() {
		return {
			data: footer
		}
	}
};
</script>

<style scoped></style>
