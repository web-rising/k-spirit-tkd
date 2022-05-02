<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: contact } = useSinglePrismicDocument("footer");
console.log(contact);
</script>

<template>
	<div class="hamburger" v-show="isOpenBuger">
		<div class="hamburger-container">
			<router-link to="/"><div class="logo"></div></router-link>
			<div class="burger">
				<img class="close" src="../assets/close.svg" alt="" @click="closeBuger"/>
			</div>
			<ul class="nav-list">
				<li>
					<router-link to="/about" @click="closeBuger">About Us</router-link>
				</li>
				<li>
					<router-link to="/news" @click="closeBuger">News & Updates</router-link>
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
			<div class="footer">
				<p>Telephone</p>
				<p>Email</p>
				<p>Address</p>
				<div class="media">
					<img class="fb" src="../assets/facebook.svg" alt=""/>
					<img class="ig" src="../assets/instagram.svg" alt=""/>
				</div>
				<!-- <p>{{$prismic.asText(contact.data.number)}}</p>
				<p>{{$prismic.asText(contact.data.email)}}</p>
				<p>{{$prismic.asText(contact.data.address)}}</p> -->
			</div>
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
	flex-direction: column;
	align-items: start;
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

.nav-list {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 1.3rem;
  margin-top: 20vh;
}

.nav-list li {
  list-style: none;
  margin: 0.5rem;
}

.nav-list li a {
  color: #151515;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
}

.nav-list li a:hover {
  /* text-decoration: underline; */
  color: red;
}

.footer{
	position: absolute;
	margin: 1.3rem;
	bottom: 0rem;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
}

.media {
	display: flex;
	align-items: center;
	justify-content: center;
}

.fb {
	width: 3rem;
	height: 3rem;
	object-fit: cover;
	margin: 0.5rem 0;
	margin-right: 1.5rem;
}
.ig {
	width: 3rem;
	height: 3rem;
	object-fit: cover;
}
</style>
