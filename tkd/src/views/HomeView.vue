<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");
const { data: contact } = useSinglePrismicDocument("footer");
console.log(homepage)
</script>

<template>
	<div class="home">
		<section class="splash">
			<prismic-image :field="homepage.data.splash" class="flag"></prismic-image>

			<div class="mask"></div>
			<div class="text">
				<h1>"Make the impossible possible."</h1>
				<h4>K-Spirit Taekwondo</h4>
			</div>
		</section>
		<section class="news">
			<h2>News & Updates</h2>
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
				}"
			>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image1"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image2"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image3"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image4"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image5"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image6"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image7"
						class="image"
					></prismic-image
				></swiper-slide>
				<swiper-slide
					><prismic-image
						:field="homepage.data.image8"
						class="image"
					></prismic-image
				></swiper-slide>
			</swiper>
		</section>
		<section class="meet">
			<h2>Meet Master Cho</h2>
		</section>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
	}

	.flag {
		position: absolute;
		width: 100%;
		height: 80vh;
		object-fit: cover;
		object-position: 70%;
		z-index: -2;
	}

	.text {
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
		background-color: blue;
		height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.gallery {
		width: 100%;
		height: 60rem;
		object-fit: cover;
		z-index: 1;
	}

	.image {
		width: 100%;
	}
	.meet {
		
	}
}
</style>
