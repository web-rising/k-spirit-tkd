<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: homepage } = useSinglePrismicDocument("homepage");
const { data: contact } = useSinglePrismicDocument("footer");
console.log(homepage);
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
				<div class="news-item"></div>
				<div class="news-item"></div>
				<div class="news-item"></div>
			</div>
		</section>
		<section class="gallery">
			<VueSlickCarousel v-bind="settings">
				<div><h3>1</h3></div>
				/*...*/
			</VueSlickCarousel>
		</section>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
	data() {
		return {
			settings: {
				dots: true,
				dotsClass: "slick-dots custom-dot-class",
				edgeFriction: 0.35,
				infinite: false,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		};
	},
};
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
		background-color: #151515;
		/* align-items: center; */
	}

	.image {
		width: 100%;
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
