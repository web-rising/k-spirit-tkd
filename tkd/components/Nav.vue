<template>
  <div class="navbar bg-base-100 fixed top-0 left-0 w-full z-40">
    <div class="flex-1">
      <nuxt-link to="/" @click.native="toggleMenu" class="btn btn-ghost normal-case text-xl md:text-2xl">K-Spirit Taekwondo</nuxt-link>
    </div>
    <div class="flex-none md:hidden">
      <label type="button" tabindex="0" class="btn btn-ghost swap swap-rotate">
        <input type="checkbox" @change="toggleMenu" :checked="$store.state.menuOpen" />
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
      </label>
    </div>
    <div class="flex-none hidden md:block">
      <ul class="menu menu-horizontal p-0">
        <li><nuxt-link to="/about" class="text-xl">About Us</nuxt-link></li>
        <li><nuxt-link to="/updates" class="text-xl">News & Updates</nuxt-link></li>
        <li><nuxt-link to="/classes" class="text-xl">Classes</nuxt-link></li>
        <li><nuxt-link to="/gallery" class="text-xl">Gallery</nuxt-link></li>
      </ul>
    </div>
    <Menu />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu: function () {
      this.$store.dispatch('toggleMenu')
    },
  },
}
</script>

<style>
</style>