<template>
	<div class="container">
		<header class="block">
			<h1>hello</h1>
			<!-- <h1>{{$prismic.asText(homepage.data.name)}}</h1> -->
			<h2>{{$prismic.asText(homepage.data.slogan)}}</h2>
			<!-- <div>{{$prismic.asImageSrc(homepage.data.image1)}}</div> -->
			<prismic-image :field="homepage.data.image1"></prismic-image>
		</header>
	</div>
</template>

<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");

</script>

<style scoped>

</style>
