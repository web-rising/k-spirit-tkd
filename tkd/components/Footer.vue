<template>
  <footer class="footer p-10 text-neutral-content bg-[#001220]">
    <div>
      <prismic-image :field="data.logo" class="h-16 w-16 object-cover rounded-full" />
      <h5 class="font-bold overflow-hidden">K-Spirit Taekwondo</h5>
      <div class="flex flex-col space-y-4 mt-4">
        <prismic-rich-text :field="data.address" />
        <prismic-rich-text :field="data.number" />
        <prismic-rich-text :field="data.email" />
      </div>
    </div>
    <div>
      <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-4">
        <a :href="data.facebook.url" target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg
        ></a>
        <a :href="data.instagram.url" target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
    <div class="items-center grid-flow-row">
      <p class="text-lg font-semibold">Crafted with ❤️ by <a class="hover:text-red-500 ease-in duration-150 font-bold" href="https://webrising.org" target="_blank">WebRising</a></p>
      <p class="text-sm">Copyright © 2022 WebRising - All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style>
p {
  overflow: hidden;
}
</style>