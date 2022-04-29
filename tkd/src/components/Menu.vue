<template>
	<div class="hamburger" v-show="isOpenBuger">
		<div class="hamburger-container">
			<div class="logo"></div>
			<div class="burger">
				<img
					class="close"
					src="../assets/close.svg"
					alt=""
					@click="closeBuger"
				/>
			</div>
			<ul class="nav-list">
				<li>
					<router-link to="/about" @click="closeBuger">About Us</router-link>
				</li>
				<li>
					<router-link to="/schedule" @click="closeBuger">Schedule</router-link>
				</li>
				<li>
					<router-link to="/classes" @click="closeBuger">Classes</router-link>
				</li>
				<li>
					<router-link to="/gallery" @click="closeBuger">Gallery</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Menu",
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
.hamburger-container {
	background-color: #ffffff;
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: start;
}

.logo {
	position: fixed;
	top: 1.3rem;
	left: 1.3rem;
	height: 4rem;
	width: 4rem;
	border-radius: 2rem;
	background-color: #151515;
}

.burger {
	position: fixed;
	right: 1.3rem;
	top: 1.3rem;
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
