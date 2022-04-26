<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";
const { data: homepage } = useSinglePrismicDocument("homepage");
const { data: contact } = useSinglePrismicDocument("footer");
</script>

<template>
	<div class="container">
		<h1 class="test">hello</h1>
		<h1>Make the impossible possible</h1>
		<h4>K-Spirit Taekwondo</h4>
		<prismic-image :field="homepage.data.splash"></prismic-image>
		<Footer
			:email="$prismic.asText(contact.data.email)"
			:telephone="$prismic.asText(contact.data.telephone)"
			:address="$prismic.asText(contact.data.address)"
		/>
		<!-- <h1>{{$prismic.asText(homepage.data.name)}}</h1> -->
		<!-- <div>{{$prismic.asImageSrc(homepage.data.image1)}}</div> -->
		<prismic-image :field="homepage.data.splash" class="flag"></prismic-image>
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

<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");
</script>

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
@media only screen and (min-device-width: 300px) and (max-device-width: 500px) {
	.test {
		color: aqua;
	}
	.flag {
		width: 2rem;
	}
	.gallery {
		width: 100%;
		height: 31.5rem;
		margin: 0 auto;
	}

	.image {
		width: 100%;
	}
}
</style>
