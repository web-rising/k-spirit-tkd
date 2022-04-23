<template>
	<div class="container">
		<header class="block">
			<h1>{{$prismic.asText(homepage.data.name)}}</h1>
			<h2>{{$prismic.asText(homepage.data.slogan)}}</h2>
		</header>
	</div>
</template>

<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");

</script>

<style scoped>

</style>
