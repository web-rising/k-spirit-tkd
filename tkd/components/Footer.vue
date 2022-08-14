<template>
  <footer class="footer p-10 text-neutral-content bg-[#001220] relative">
    <div>
      <prismic-image :field="data.logo" class="h-16 w-16 object-cover rounded-full mb-2" />
      <h5 class="text-xl font-bold overflow-hidden">K-Spirit Taekwondo</h5>
      <div class="flex flex-col space-y-4 mt-2">
        <a href="https://www.google.com/maps/place/K-Spirit+Taekwondo/@40.6253908,-74.0267041,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2455e845b0369:0x72f98fa99e7ddcbe!8m2!3d40.6253867!4d-74.0245154" target="_blank"><prismic-rich-text :field="data.address" /></a>
        <a class="sm:hidden" :href="`tel:${data.number[0].text}`"><prismic-rich-text :field="data.number" /></a>
        <prismic-rich-text class="hidden sm:block" :field="data.number" />
        <prismic-rich-text :field="data.email" />
      </div>
      <div class="hidden items-center grid-flow-row my-6 md:block">
        <p class="text-lg font-semibold">Made with ❤️ by <a class="hover:text-red-500 ease-in duration-150 font-bold" href="https://webrising.org" target="_blank">WebRising</a></p>
        <p class="text-sm">Copyright © 2022 WebRising - All Rights Reserved</p>
      </div>
    </div>
    <div class="md:pt-4">
      <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-6">
        <a :href="data.facebook.url" class="ease-in duration-150 hover:text-blue-500" target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg
        ></a>
        <a :href="data.instagram.url" class="ease-in duration-150 hover:text-fuchsia-500" target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
    <div class="hidden md:block md:pt-4 md:pl-12">
      <span class="footer-title">Pages</span>
      <ul class="flex flex-col justify-center items-start space-y-4 mt-2">
        <li><nuxt-link to="/about" class="text-lg ease-in duration-150 hover:opacity-80">About Us</nuxt-link></li>
        <li><nuxt-link to="/updates" class="text-lg ease-in duration-150 hover:opacity-80">News & Updates</nuxt-link></li>
        <li><nuxt-link to="/classes" class="text-lg ease-in duration-150 hover:opacity-80">Classes</nuxt-link></li>
        <li><nuxt-link to="/gallery" class="text-lg ease-in duration-150 hover:opacity-80">Gallery</nuxt-link></li>
      </ul>
    </div>
    <div class="items-center grid-flow-row md:hidden">
      <p class="text-lg font-semibold">Made with ❤️ by <a class="hover:text-red-500 ease-in duration-150 font-bold" href="https://webrising.org" target="_blank">WebRising</a></p>
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