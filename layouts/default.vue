<template>
  <header class=" ">
    <navbar />
    <nuxt />
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
}
</script>
