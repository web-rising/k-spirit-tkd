<template>
  <div class="hamburger" v-if="menuOpen">
    <nav />
    <div class="hamburger-container">
      <ul class="nav-list">
        <li>
          <nuxt-link to="/about" @click.native="toggleMenu">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/updates" @click.native="toggleMenu">News & Updates</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/classes" @click.native="toggleMenu">Classes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/gallery" @click.native="toggleMenu">Gallery</nuxt-link>
        </li>
      </ul>
      <!-- <div class="footer">
        <h5>K-Spirit Taekwondo</h5>
        <p>{{ this.data.address[0].text }}</p>
        <p>{{ this.data.number[0].text }}</p>
        <p>{{ this.data.email[0].text }}</p>
        <div class="media">
          <a :href="this.data.facebook.url" target="_blank"><img class="fb" src="../assets/facebook.svg" alt="" /></a>
          <a :href="this.data.instagram.url" target="_blank"><img class="ig" src="../assets/instagram.svg" alt="" /></a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuOpen: null,
    }
  },
  methods: {
    toggleMenu: function () {
      this.$store.dispatch('toggleMenu')
    },
  },
  watch: {
    '$store.state.menuOpen': function () {
      this.menuOpen = this.$store.state.menuOpen
    },
  },
}
</script>

<style scoped>
.hamburger {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.hamburger-container {
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.logo {
  position: fixed;
  top: 1.3rem;
  left: 1.3rem;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  background-color: #151515;
}

.nav-list {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 1.3rem;
  margin-top: 22vh;
}

.nav-list li {
  list-style: none;
  margin: 0.5rem;
}

.nav-list li a {
  color: #151515;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
}

.nav-list li a:hover {
  /* text-decoration: underline; */
  color: red;
}

.footer {
  position: absolute;
  margin: 1.3rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.footer h5,
p {
  padding: 0.3rem 0.5rem;
}

.media {
  padding: 0 0.5rem;
  padding-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fb {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin: 0.5rem 0;
  margin-right: 1.5rem;
}
.ig {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
}
</style>
