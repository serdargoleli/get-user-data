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
      getCookieThemee: this.$cookiz.get('themee'),
      themee: 'dark',
    }
  },

  created() {
    if (this.getCookieThemee) {
      this.themee = this.getCookieThemee
    } else {
      this.$cookiz.set('themee', this.themee, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      })
    }
  },
  methods: {
    selectThemee() {
      this.themee = this.themee === 'dark' ? 'light' : 'dark'
      this.$cookiz.set('themee', this.themee, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      })
    },
  },
}
</script>
