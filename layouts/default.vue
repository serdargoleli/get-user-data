<template>
  <header class="">
    <navbar />
    <nuxt-child :themee="themee" />
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
      themee: 'light',
    }
  },
}
</script>
