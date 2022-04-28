<template>
	<div class="app">
		<Nav/>
		<router-view/>
		<!-- <Footer
		:email="$prismic.asText(contact.data.email)"
		:telephone="$prismic.asText(contact.data.telephone)"
		:address="$prismic.asText(contact.data.address)"
		/> -->
	</div>
</template>

<script>
import Nav from "./components/Nav.vue"
// import Footer from "./components/Footer.vue"

export default {
	components: {
		Nav,
    // Footer
},
}

</script>
