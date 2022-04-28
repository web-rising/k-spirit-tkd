<template>
	<div>
		<div class="hamburger">
			<h1>hello</h1>
			<h2>schfoiashoifchoiH</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hamburger",
	setup() {
		return {};
	},
};
</script>

<style scoped>
.hamburger {
	overflow-x: hidden;
	overflow-y: auto;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9;
}
</style>
