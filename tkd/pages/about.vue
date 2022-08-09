<template>
  <div>
    <Nav />
    <div class="mt-[4rem]">
      <div id="master" class="flex flex-col items-center justify-center">
        <prismic-image :field="document.cho" id="cho-image" class="rounded-full h-56 w-56 object-cover"></prismic-image>
        <h3>Master Hyuk Jin Cho</h3>
        <prismic-rich-text :field="document.mission" id="mission" class="mx-4"></prismic-rich-text>
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