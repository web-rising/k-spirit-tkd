<template>
	<div class="nav">
		<div class="logo"></div>
		<div class="burger">
			<img class="menu" src="../assets/menu.svg" alt="" @click="openBurger" />
		</div>
		<ul class="nav-list">
			<li><router-link to="/about"></router-link></li>
			<li><router-link to="/updates"></router-link></li>
			<li><router-link to="/classes"></router-link></li>
			<li><router-link to="/gallery"></router-link></li>
		</ul>
		<Menu />
	</div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
	components: {
		Menu,
	},
	methods: {
		openBurger: function () {
			this.$store.dispatch("openBuger");
		},
	},
};
</script>

<style scoped>
.nav {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.3rem;
	z-index: 2;
}

.logo {
	height: 4rem;
	width: 4rem;
	border-radius: 2rem;
	background-color: #fff;
	position: relative;
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
	/* margin-left: 5rem; */
	overflow: hidden;
	cursor: pointer;
}

.menu {
	position: absolute;
	height: 1.8rem;
	width: 1.8rem;
	/* display: none; */
}

@media (min-width: 600px) {
	.burger {
		opacity: 0;
	}
	.nav-list {
		height: 3rem;
		width: 60%;
	}
}

</style>
