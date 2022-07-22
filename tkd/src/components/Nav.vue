<template>
	<div class="nav">
		<div class="logo"></div>
		<div class="burger">
			<img class="menu" src="../assets/menu.svg" alt="" @click="openBurger" />
		</div>
		<ul class="nav-list">
			<li><router-link to="/about" class="btn">About</router-link></li>
			<li><router-link to="/updates" class="btn">Updates</router-link></li>
			<li><router-link to="/classes" class="btn">Classes</router-link></li>
			<li><router-link to="/gallery" class="btn">Gallery</router-link></li>
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
	overflow: hidden;
	cursor: pointer;
}

.menu {
	position: absolute;
	height: 1.8rem;
	width: 1.8rem;
	/* display: none; */
}

.nav-list {
	display: none;
}

.btn:hover {
	color: #cd2e3a;
	transition: all .2s ease;
}

@media (min-width: 600px) {
	.burger {
		display: none;
	}
	.nav-list {
		position: relative;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: space-between;
		width: 50%;
	}
	.btn {
		list-style: none;
		font-size: 1.2rem;
		text-decoration: none;
		color: #000;
	}
}

</style>
