<script setup>
import Footer from './components/Footer.vue'
</script>

<template>
	<div class="app">
		<router-view/>
		<Footer/>
	</div>
</template>

<script>

export default {
	components: {
    Footer,
}
}

</script>
