<template>
  <div id="home">
    <Nav :logo="footer.logo" />
    <div class="flex flex-col space-y-12">
      <section id="mobile-splash" class="h-full w-full overflow-hidden flex flex-col justify-center items-center mt-[4rem] lg:hidden">
        <img class="w-full hidden md:block" src="@/assets/waves.svg" alt="" />
        <img class="w-full md:hidden" src="@/assets/layered-waves-haikei.svg" alt="">
        <div class="absolute text-center space-y-3 -mt-32 md:-mt-8">
          <h2 class="font-bold text-white text-3xl sm:text-5xl md:text-6xl md:mb-4">K-Spirit Taekwondo</h2>
          <h3 class="font-semibold text-white text-lg sm:text-2xl md:text-3xl">"Make the impossible possible"</h3>
        </div>
      </section>
      <section id="splash" class="w-full h-[100vh] overflow-hidden flex-col justify-center relative hidden lg:flex">
        <img class="w-full object-cover object-center" src="@/assets/blob-scene-2.svg" alt="" />
        <div id="text" class="text-center absolute left-1/2 top-1/2">
          <h2 class="font-bold text-7xl p-3">K-Spirit Taekwondo</h2>
          <h3 class="font-semibold text-4xl p-2">"Make the impossible possible"</h3>
        </div>
      </section>
      <section id="news" class="text-center items-center justify-center py-4">
        <h2 class="font-semibold text-3xl lg:text-4xl">News & Updates</h2>
        <HomeNews :items="updates[0].items" />
      </section>
      <section id="cho" class="">
        <nuxt-link to="about" class="my-4 flex flex-row space-x-8 justify-center items-center">
          <h4 class="font-semibold text-4xl lg:text-5xl overflow-hidden">Meet Master Cho</h4>
          <prismic-image :field="document.cho" alt="" class="h-28 aspect-square object-cover rounded-full md:h-36 lg:h-42" />
        </nuxt-link>
      </section>
      <section id="carousel">
        <Carousel :images="images" />
      </section>
      <section id="schedule" class="flex flex-col text-center items-center justify-center">
        <h2 class="font-semibold text-3xl lg:text-4xl">Schedule</h2>
        <prismic-image class="" :field="document.schedule" />
      </section>
      <section id="location" class="flex flex-row items-center content-between justify-center space-x-2">
        <img src="@/assets/pin.svg" alt="" class="w-12 object-cover sm:w-16" />
        <div id="location-text" class="flex flex-col content-center items-start space-y-1">
          <h5 class="font-semibold text-2xl lg:text-3xl ">Bay Ridge</h5>
          <p class="text-2xl lg:text-3xl">{{ footer.address[0].text }}</p>
        </div>
      </section>
      <Footer :data="footer" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    try {
      const { data: document } = await $prismic.api.getSingle('homepage')
      const { data: gallery } = await $prismic.api.getSingle('gallery')
      const { data: updateData } = await $prismic.api.getSingle('updates')
      const { data: footer } = await $prismic.api.getSingle('footer')
      const images = gallery.body[0].items.slice(0, 5)
      const updates = updateData.body.slice(0, 5)
      return { document, images, updates, footer }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style scoped>
#text {
  transform: translate(-50%, -50%);
}
</style>