<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";
const { data: homepage } = useSinglePrismicDocument("homepage");
const {data: contact} = useSinglePrismicDocument("footer");
</script>

<template>
	<div class="container">
		<h1>Make the impossible possible</h1>
		<h4>K-Spirit Taekwondo</h4>
		<prismic-image :field="homepage.data.splash"></prismic-image>
		<Footer
		:email="$prismic.asText(contact.data.email)"
		:telephone="$prismic.asText(contact.data.telephone)"
		:address="$prismic.asText(contact.data.address)"
		/>
	</div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
	components: {
		Footer
	}
}
</script>

<style scoped>

</style>
