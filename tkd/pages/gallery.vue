<template>
  <div>
    <Nav :logo="footer.logo" />

    <section class="overflow-hidden text-gray-700 mt-[5rem]">
      <div class="flex text-center justify-center w-full mb-4">
        <h2 class="font-semibold text-3xl">Gallery</h2>
      </div>
      <div class="container px-5 py-2 mb-8 mx-auto lg:pt-24 lg:px-32 ">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div v-for="(block, i) in images" :key="block[0]" class="hidden flex-wrap w-1/2 md:flex">
            <div v-for="(image, j) in block" :key="image.image.url" class="group ease-in duration-150 p-1 flex-col justify-center relative text-center items-center flex md:p-2" :class="j === 2 ? (i % 2 === 0 ? 'w-full' : 'w-1/2') : j === 0 ? (i % 2 === 1 ? 'w-full' : 'w-1/2') : 'w-1/2'">
              <img alt="gallery" class="block object-cover object-center w-full h-60 rounded-lg group-hover:opacity-25 ease-linear" :src="image.image.url" />
              <prismic-rich-text class="absolute hidden group-hover:block font-white z-20 font-semibold mx-4" :field="image.description" />
            </div>
          </div>
          <div class="flex flex-wrap justify-center items-center space-y-4 md:hidden">
            <div v-for="image in data" :key="image.image.url" class="card w-5/6 bg-base-100 shadow-xl">
              <figure class="max-h-48 object-cover overflow-hidden"><img :src="image.image.url" /></figure>
              <div class="card-body">
                <prismic-rich-text class="font-semibold" :field="image.description" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer :data="footer" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    try {
      const { data: gallery } = await $prismic.api.getSingle('gallery')
      const { data: footer } = await $prismic.api.getSingle('footer')
      const data = gallery.body[0].items
      const images = []
      for (let i = 0; i < data.length; i += 3) {
        const chunk = data.slice(i, i + 3)
        images.push(chunk)
      }
      return { footer, images, data }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
</style>