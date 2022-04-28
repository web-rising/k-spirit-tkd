<template>
	<div class="app">
		<Hamburger />
		<Nav />
		<router-view />
		<!-- <Footer
		:email="$prismic.asText(contact.data.email)"
		:telephone="$prismic.asText(contact.data.telephone)"
		:address="$prismic.asText(contact.data.address)"
		/> -->
	</div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Hamburger from "./components/Hambuger.vue";

// import Footer from "./components/Footer.vue"

export default {
	components: {
		Nav,
		Hamburger,

		// Footer
	},
};
</script>

<style scoped></style>
