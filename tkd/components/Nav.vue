<template>
  <div>
    <div class="navbar bg-base-100 fixed top-0 left-0 w-full z-40 px-4 sm:px-6 md:px-2 lg:px-10">
      <div class="flex-1">
        <nuxt-link to="/" id="home" class="btn btn-ghost normal-case flex space-x-2 text-xl md:text-2xl hover:bg-zinc-200">
          <prismic-image :field="logo" id="cho-image" class="h-full aspect-square rounded-full object-cover"></prismic-image>
          <li>K-Spirit Taekwondo</li>
        </nuxt-link>
        <!-- * make this the logo instead of this text * -->
      </div>
      <div class="flex-none md:hidden">
        <label type="button" tabindex="0" class="btn btn-ghost rounded-full h-12 w-12 swap swap-rotate hover:bg-zinc-200">
          <input type="checkbox" @change="toggleMenu" :checked="$store.state.menuOpen" />

          <svg class="swap-off fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <svg class="swap-on fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </label>
      </div>
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal space-x-4">
          <li><nuxt-link to="/about" class="text-lg rounded-md active:bg-white">About Us</nuxt-link></li>
          <li><nuxt-link to="/updates" class="text-lg rounded-md active:bg-white">News & Updates</nuxt-link></li>
          <li><nuxt-link to="/classes" class="text-lg rounded-md active:bg-white">Classes</nuxt-link></li>
          <li><nuxt-link to="/gallery" class="text-lg rounded-md active:bg-white">Gallery</nuxt-link></li>
        </ul>
      </div>
    </div>
    <Menu />
  </div>
</template>

<script>
export default {
  props: {
    logo: Object,
  },
  methods: {
    toggleMenu: function () {
      this.$store.dispatch('toggleMenu')
    },
  },
}
</script>

<style>
a.nuxt-link-exact-active {
  color: rgb(239 68 68);
}
#home.nuxt-link-active {
  color: black;
}
</style>