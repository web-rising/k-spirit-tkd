<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");
const {data: contact} = useSinglePrismicDocument("footer");
</script>

<template>
	<div class="container">
		<div class="splash">
			<prismic-image :field="homepage.data.splash" class="flag"></prismic-image>
			<div class="mask"></div>
			<h1>"Make the impossible possible."</h1>
			<h4>K-Spirit Taekwondo</h4>
		</div>
		<!-- <h1>{{$prismic.asText(homepage.data.name)}}</h1> -->
		<!-- <div>{{$prismic.asImageSrc(homepage.data.image1)}}</div> -->
		<div class="gallery">
			<swiper
				class="swiper"
				:modules="[Autoplay]"
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
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log("slide change");
		};
		return {
			onSwiper,
			onSlideChange,
		};
	},
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
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
		width: 250%;
		height: 80vh;
		right: -12rem;
		object-fit: cover;
		z-index: -2;
	}

	.mask {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 80vh;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.gallery {
		width: 100%;
		height: 25rem;
		object-fit: cover;
		z-index: 1;
	}

	.image {
		width: 100%;
	}
}
</style>
