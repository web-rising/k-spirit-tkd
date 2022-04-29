<template>
	<div>
		<div class="hamburger" v-show="isOpenBuger">
			<div class="hamburger-dialog">
				<div class="burger">
					<img
						class="close"
						src="../assets/close.svg"
						alt=""
						@click="closeBuger"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hamburger",
	data() {
		return {};
	},
	methods: {
		closeBuger: function () {
			this.$store.dispatch("closeBuger");
		},
	},

	computed: {
		isOpenBuger: function () {
			return this.$store.state.hamburgerHidden;
		},
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
.hamburger-dialog {
	background-color: #ffffff;
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	z-index: 2;
}
.burger {
	position: fixed;
	right: 1.3rem;
	height: 4rem;
	width: 4rem;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	overflow: hidden;
	cursor: pointer;
}

.close {
	position: absolute;
	height: 2.2rem;
	width: 2.2rem;
}
</style>
