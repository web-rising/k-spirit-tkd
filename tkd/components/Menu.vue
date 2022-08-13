<template>
  <div id="hamburger" v-if="menuOpen" class="fixed inset-0 z-30">
    <!-- <Nav /> -->
    <div id="hamburger-container" class="bg-white relative w-full h-screen flex justify-start items-center px-14">
      <ul id="nav-list" class="flex flex-col justify-center items-start space-y-6 text-4xl">
        <li id="underline">
          <nuxt-link to="/about" @click.native="toggleMenu">About Us</nuxt-link>
        </li>
        <li id="underline">
          <nuxt-link to="/updates" @click.native="toggleMenu">News & Updates</nuxt-link>
        </li>
        <li id="underline">
          <nuxt-link to="/classes" @click.native="toggleMenu">Classes</nuxt-link>
        </li>
        <li id="underline">
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
import gsap from 'gsap'

export default {
  name: 'Menu',
  data() {
    return {
      menuOpen: null,
    }
  },
  mounted() {
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
        }
    })

    tl.from('#underline', {
        x: -150, 
        opacity: 0,
        stagger: 0.2
    }, '-=1.2')
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
