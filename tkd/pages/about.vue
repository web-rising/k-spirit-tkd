<template>
  <div>
    <Nav :logo="footer.logo" />

    <div class="mt-[4rem] flex flex-col items-center">
      <div id="master" class="flex flex-col items-center justify-center mb-8 max-w-4xl">
        <prismic-image :field="document.cho" id="cho-image" class="rounded-full h-56 w-56 object-cover"></prismic-image>
        <h2 class="font-semibold">Master Hyuk Jin Cho</h2>
        <p id="mission" class="text-xl text-center mx-8">{{ document.mission[0].text }}</p>
      </div>
      <Footer :data="footer" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    try {
      const { data: document } = await $prismic.api.getSingle('about')
      const { data: footer } = await $prismic.api.getSingle('footer')
      return { document, footer }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
</style>