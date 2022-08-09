<template>
  <div>
    <Nav />
    <div class="mt-[4rem]">
      <div class="flex text-center justify-center w-full">
        <h2 class="font-semibold">Classes</h2>
      </div>
      <div class="flex flex-wrap justify-center items-center space-y-4 space-x-4 mb-8">
        <div v-for="item in classes" :key="item.classroute[0].text" class="card w-96 bg-base-100 shadow-xl">
          <figure><img :src="item.classimage.url" /></figure>
          <div class="card-body">
            <h3 class="font-semibold">{{ item.classname[0].text }}</h3>
            <h5 class="font-semibold">Ages: {{ item.agegroup[0].text }}</h5>
            <div class="card-actions justify-end">
              <nuxt-link :to="`/classes/${item.classroute[0].text}`" class="btn btn-primary">Learn More</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <Footer :data="footer" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    try {
      const { data: footer } = await $prismic.api.getSingle('footer')
      const { data: data } = await $prismic.api.getSingle('classes')
      const classes = data.body[0].items
      return { footer, classes }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
</style>