<template>
  <div>
    <Nav :logo="footer.logo" />

    <div>
      <div class="mt-[4rem] hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img :src="item.classimage.url" class="max-w-sm rounded-lg shadow-lg" />
          <div class="sm:text-center lg:text-left">
            <h1 class="text-5xl font-bold overflow-hidden">{{ item.classname[0].text }}</h1>
            <h3 class="font-semibold">Ages: {{ item.agegroup[0].text }}</h3>
            <div id="times" class="pt-3">
              <p class="" v-for="time in item.classtimes" :key="time.text">{{ time.text }}</p>
            </div>
            <p class="py-6">{{ item.classdescription[0].text }}</p>
          </div>
        </div>
      </div>
      <Footer :data="footer" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params }) {
    try {
      const { data: footer } = await $prismic.api.getSingle('footer')
      const { data: data } = await $prismic.api.getSingle('classes')
      const classes = data.body[0].items
      let item = ''
      classes.forEach((e) => {
        if (e.classroute[0].text === params.class) {
          item = e
          return
        }
      })
      return { footer, item }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
</style>