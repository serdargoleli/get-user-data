<template>
  <header :class="themee">
    <navbar :selectThemee="selectThemee" :themee="themee" />
    <nuxt-child />
  </header>
</template>
<script>
import Navbar from '~/components/nav.vue'
export default {
  name: 'default',
  components: {
    Navbar,
  },
  data() {
    return {
      themee: 'dark',
    }
  },
  methods: {
    selectThemee() {
      this.themee = this.themee === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>
