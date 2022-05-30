<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");
</script>

<template>
	<div class="home">
		<section class="splash">
			<prismic-image :field="homepage.data.splash" class="flag"></prismic-image>
			<div class="mask"></div>
			<div class="splash-text">
				<h1>"Make the impossible possible."</h1>
				<h4>K-Spirit Taekwondo</h4>
			</div>
		</section>
		<section class="news">
			<h2>News & Updates</h2>
			<div class="news-container">
				<div  v-for="update in this.updates" :key="update">
				<router-link to="/updates">
					<h4>{{update.items[0].title[0].text}}</h4>
					<h4>{{update.items[0].updatetime}}</h4>
				</router-link>
				</div>
			</div>
		</section>
		<section class="gallery">
			<swiper
				class="swiper"
				:modules="[Autoplay, Pagination, Navigation]"
				navigation
				:pagination="{ clickable: true }"
				:slides-per-view="1"
				:space-between="0"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
				:loop="true"
				:autoplay="{
					delay: 3000,
					disableOnInteraction: false,
				}">
				
				<swiper-slide v-for="image in this.galleryImages" :key="image">
					<router-link to="/gallery">
						<prismic-image
							:field="image.image"
							id="image"
						></prismic-image>
					</router-link>
				</swiper-slide>
			</swiper>
		</section>
		<section class="meet">
			<h4>Meet Master Cho</h4>
			<div class="profile"></div>
		</section>
		<section class="schedule">
			<h2>Schedule</h2>
			<div class="picture"></div>
		</section>
		<section class="visit">
			<h4>Come visit our dojang!</h4>
			<div class="location">
				<img src="../assets/pin.svg" alt="" class="pin">
				<h5>Bay Ridge, Brooklyn</h5>
			</div>
		</section>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import limitUpdates from '../prismicHelpers/updates'
import limitImages from '../prismicHelpers/gallery.js'

export default {
data() {
	return {
		updates: limitUpdates(3),
		galleryImages: limitImages(5)
	}
}
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
	.home {
		overflow-x: hidden;
	}
	.splash {
		height: 80vh;
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		color: #fff;
	}

	.flag {
		position: absolute;
		width: 100%;
		height: 80vh;
		object-fit: cover;
		object-position: 70%;
		z-index: -2;
	}

	.splash-text {
		padding: 0 1rem;
	}

	.mask {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 80vh;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.news {
		height: 40vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.news-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.news-item {
		margin: 0.25rem;
		width: 23rem;
		height: 3.5rem;
		background-color: #151515;
	}
	.gallery {
		width: 100%;
		height: 60vh;
		object-fit: cover;
		display: flex;
		justify-content: center;
		/* background-color: #151515; */
		/* align-items: center; */
	}

	#image {
		width: 100%;
		object-fit: cover;
	}
	.meet {
		height: 25vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.profile {
		width: 8rem;
		height: 8rem;
		border-radius: 4rem;
		background-color: #151515;
	}
	.schedule {
		height: 32vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.picture {
		width: 90%;
		height: 15rem;
		background-color: #151515;
	}

	.visit {
		height: 30vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.location {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
}
</style>
