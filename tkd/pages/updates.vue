<template>
  <div>
    <Nav :logo="footer.logo" />

    <div class="mt-[5rem]">
      <div>
        <div class="flex text-center justify-center w-full mb-4">
          <h2 class="font-semibold text-3xl">News & Updates</h2>
        </div>
        <div class="flex flex-wrap justify-center items-center space-y-6 md:space-x-6 pb-10">
          <div v-for="item in updates" :key="item.uploadtime" class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h4 class="font-semibold text-xl">{{ item.title[0].text }}</h4>
              <div class="badge badge-lg overflow-hidden">{{ item.updatetime }}</div>
              <p v-for="text in item.description" :key="text.text">{{ text.text }}</p>
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
      const { data: data } = await $prismic.api.getSingle('updates')
      const updates = data.body[0].items.reverse()
      return { footer, updates }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
</style>